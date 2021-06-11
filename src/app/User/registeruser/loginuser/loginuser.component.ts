import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { AuthService } from 'app/User/services/auth.service';
import { Toaster, ToastType } from 'ngx-toast-notifications';
import { RegisterUserModel } from '../registeruser.model';
import { RegisterUserService } from '../registeruser.service';
import { SocialAuthService, SocialUser  } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
 

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  focus;
  focus1;
  focus2;
  public loginModel: RegisterUserModel[] = [];
  loginForm: FormGroup;
  account_validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    } 
    submitted=false;
    onSubmit(){this.submitted=true};
 
    test : Date = new Date();
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    error: string;
    user: SocialUser;
    GoogleLoginProvider = GoogleLoginProvider;

    constructor(private element : ElementRef,
        public auth:AuthService,
        private loginService: RegisterUserService,
        private apiservice:ApiService,
        private router:Router,
        private toaster: Toaster,
        private authService: SocialAuthService
        
        ) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;

    }
    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    ngOnInit(){
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function(){
            $('.card').removeClass('card-hidden');
        }, 700)
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    }
    sidebarToggle(){
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if(this.sidebarVisible == false){
            setTimeout(function(){
                toggleButton.classList.add('toggled');
            },500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    
    loginUser(credentials) {
        console.log("......data...." + credentials.email);
        this.loginService.login(credentials).subscribe(data=>{
           
          if(data ==1){
              this.apiservice.showNotification('top','right','Wrong Email!','danger');
          }
          else if(data ==2){
            
            this.apiservice.showNotification('top','right','Wrong Password!','danger');
            
          }
          else{
            this.toaster.open({text:'User Login Successfully.',caption:'Login',type:'dark',duration:4000,position:'bottom-center'});
            localStorage.setItem('authenticationToken', data[0].token);
            localStorage.setItem('UserId',data[0].id);
            localStorage.setItem('Email',data[0].email);
            localStorage.setItem('Username',data[0].firstname +' '+ data[0].lastname);
            this.router.navigate(['home']);
          }
        
        });
      }

     
      signInWithGoogle(): void {
         
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID,null).then((res)=>{
          this.authService.authState.subscribe((user) => {
            
           localStorage.setItem('UserId',user.id);
           localStorage.setItem('Email',user.email);
           localStorage.setItem('Username',user.firstName +' '+ user.lastName);
           this.router.navigate(['home']);
          });
        });
      
      }
    
      signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((res)=>{
          this.authService.authState.subscribe((user) => {
            
           localStorage.setItem('UserId',user.id);
           localStorage.setItem('Email',user.email);
           localStorage.setItem('Username',user.firstName +' '+ user.lastName);
           this.router.navigate(['home']);
          });
        });;
      }

}
