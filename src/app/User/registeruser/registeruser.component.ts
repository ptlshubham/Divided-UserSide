import { Component, ElementRef, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { RegisterUserService } from './registeruser.service';
import { RegisterUserModel } from './registeruser.model'
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var require: any
declare var $:any;

@Component({
    selector: 'app-registeruser',
    templateUrl: './registeruser.component.html',
    styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

    signupForm: FormGroup;
    model: Date;
    model2: Date;
    focus;
    focus1;
    focus2;
    test: Date = new Date();
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    public RegisterModel: RegisterUserModel = new RegisterUserModel;
    public adminRegister: RegisterUserModel[] = [];
    submitted = false;
    onSubmit() { this.submitted = true };
    constructor(
        private element: ElementRef,
        private registerService: RegisterUserService,
        private router: Router,

    ) {
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;


    }
    // checkFullPageBackgroundImage() {
    //     var $page = $('.full-page');
    //     var image_src = $page.data('image');
    //     var body = document.getElementsByTagName('body')[0];
    //     body.classList.add('register-page');
    //     if (image_src !== undefined) {
    //         var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
    //         $page.append(image_container);
    //     }
    // };

    ngOnInit() {
        this.model = new Date();
        this.model2 = new Date();
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
        //  Init Bootstrap Select Picker
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker({
                iconBase: "nc-icon",
                tickIcon: "nc-check-2"
            });
        }
        if ($(".datepicker").length != 0) {
            $('.datepicker').datetimepicker({
                format: 'MM/DD/YYYY',
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-chevron-up",
                    down: "fa fa-chevron-down",
                    previous: 'fa fa-chevron-left',
                    next: 'fa fa-chevron-right',
                    today: 'fa fa-screenshot',
                    clear: 'fa fa-trash',
                    close: 'fa fa-remove'
                },
                debug: true
            });
        }

        if ($(".timepicker").length != 0) {
            $('.timepicker').datetimepicker({
                //          format: 'H:mm',    // use this format if you want the 24hours timepicker
                format: 'h:mm A', //use this format if you want the 12hours timpiecker with AM/PM toggle
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-chevron-up",
                    down: "fa fa-chevron-down",
                    previous: 'fa fa-chevron-left',
                    next: 'fa fa-chevron-right',
                    today: 'fa fa-screenshot',
                    clear: 'fa fa-trash',
                    close: 'fa fa-remove'
                },
                debug: true
            });
        }
        // this.signupForm = this.formBuilder.group({
        //     firstname: ['', Validators.required],
        //     middlename:['',Validators.required],
        //     lastname: ['', Validators.required],
        //     contactnumber:['',[Validators.required,Validators.pattern('0-9'),Validators.minLength(10)]],
        //     email: ['', [Validators.required, Validators.email]],
        //     password: ['', [Validators.required, Validators.minLength(6)]]
        //   });
        // this.checkFullPageBackgroundImage();

        var navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        // setTimeout(function () {
        //     // after 1000 ms we add the class animated to the login/register card
        //     $('.card').removeClass('card-hidden');
        // }, 700)
    }
    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
    }
    sidebarToggle() {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
    submitAdminRegister() {
         
        this.RegisterModel.isactive = true;
        this.registerService.saveUser(this.RegisterModel).subscribe((response) => {
            this.router.navigate(['userlogin']);

        })
    }


}
