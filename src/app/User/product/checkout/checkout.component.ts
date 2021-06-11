import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { State } from 'app/User/registeruser/manageuser/manageuser.model';
import { RegisterUserModel } from 'app/User/registeruser/registeruser.model';
import { RegisterUserService } from 'app/User/registeruser/registeruser.service';
import { AuthService } from 'app/User/services/auth.service';
import { NavbaruserService } from 'app/User/shared/navbaruser/navbaruser.service';
import { DetailsService } from '../details/details.service';
import { Address } from './address.model';
import { CheckoutService } from './checkout.service';
import { Userorders } from './orders.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  isShow: boolean = false;
  isLogin: boolean = true;
  showGift: boolean = false;
  isAddress: boolean = false;
  isproductList: boolean = false;
  ispayment: boolean = false;
  isProductsum: boolean = false;
  isShowLogout: boolean = false;
  isSignup: boolean = false;
  public localUserName = localStorage.getItem('Username')
  public userAddressModel: Address = new Address;
  public userAddress: Address[] = [];
  public loginModel: RegisterUserModel[] = [];
  public stateList: State[] = [];
  public selectedstate: any;
  public localUserId = localStorage.getItem('UserId');
  public localUserEmail = localStorage.getItem('Email');
  selectedAdd: any;
  getCartList: any = [];
  GrandTotal: number = 0;
  public userOrdersModel: Userorders = new Userorders;
  public userOrders: Userorders[] = [];
  public RegisterModel: RegisterUserModel = new RegisterUserModel;
  public adminRegister: RegisterUserModel[] = [];
  addressid: any;
  constructor(
    private registerService: RegisterUserService,
    private apiservice: ApiService,
    public auth: AuthService,
    private loginService: RegisterUserService,
    private router: Router,
    private navbaruserService: NavbaruserService,
    private checkoutService: CheckoutService,
    private detailsService: DetailsService,
    // private RegisterCheckoutModel: RegisterUserModel

  ) {
    this.getStateList();

    this.getCart();
     
    if (localStorage.getItem('UserId') != null || localStorage.getItem('UserId') != undefined) {
      this.isLogin = true;
      this.getUserAddress();
    }
    else {
      this.isLogin = false;
    }
  }

  ngOnInit(): void {
  }
  getStateList() {
    this.registerService.getState().subscribe((data: any) => {
      this.stateList = data;
    });
  }
  selectStateList(id) {
    this.stateList.forEach(element => {
      if (element.id == id) {
        this.selectedstate = element.name;
      }
    })
  }
  addAddress() {
    this.isShow = true;
  }
  cancelAddress() {
    this.isShow = false;
  }
  addGiftCoupon() {
    this.showGift = true;
  }
  cancelGiftCard() {
    this.showGift = false;
  }
  saveAddress() {
    this.userAddressModel.userid = this.localUserId;
    this.userAddressModel.state = this.selectedstate;
    this.registerService.saveUserAddress(this.userAddressModel).subscribe((response) => {
      this.apiservice.showNotification('top', 'right', 'Address Successfully Saved.', 'success');
      this.isShow = false;
      this.getUserAddress();
    })
  }
  getUserAddress() {
     
    this.registerService.getAddress(localStorage.getItem('UserId')).subscribe((data: any) => {
      this.userAddress = data;
      this.userAddress.forEach(element => {
        element.selected = false;
      })
    });
  }
  selectaddress(idn, id) {
     
    if (this.userAddress[idn].selected == false) {
      this.userAddress[idn].selected = true;
      this.userAddress.forEach(element => {
        if (element.id != id) {
          element.selected = false;
        }
      })

    }
    else {
      this.userAddress[idn].selected = false;
    }
  }
  continueLoginUser(credentials) {
    console.log("......data...." + credentials.email);
    this.loginService.login(credentials).subscribe(data => {
       
      if (data == 1) {
        this.apiservice.showNotification('top', 'right', 'Wrong Email!', 'danger');
      }
      else if (data == 2) {

        this.apiservice.showNotification('top', 'right', 'Wrong Password!', 'danger');

      }
      else {
        localStorage.setItem('authenticationToken', data[0].token);
        localStorage.setItem('UserId', data[0].id);
        localStorage.setItem('Email', data[0].email);
        localStorage.setItem('Username', data[0].firstname + ' ' + data[0].lastname);
        this.localUserEmail = localStorage.getItem('Email');
        this.localUserName = localStorage.getItem('Username');
        this.isLogin = true;
        this.getUserAddress();
      }

    });
  }
  selectedaddress(data) {
    this.selectedAdd = data.address + ',' + data.landmark + ',' + data.city + ',' + data.state + ',' + data.pincode;
    this.isAddress = true;
    this.userOrdersModel.addressid = data.id;
    this.isProductsum = true;


  }
  changeDilveryAddress() {
    this.isAddress = false;
    this.selectedAdd = '';
  }
  getCart() {
    if (localStorage.getItem('UserId') != null || localStorage.getItem('userId') != undefined) {
      this.navbaruserService.getCartList().subscribe((data: any) => {
        this.getCartList = data;

        this.getCartList.forEach(element => {
          this.detailsService.getProductSizelist(element.ProductId).subscribe(data => {
            element.sizelist = data;
             
            element.sizelist.forEach(element => {
              element.sizeclass = 'single-size';
            });

          });
          element.quantity = 1;
          element.total = element.productPrice * element.quantity;
          this.GrandTotal = this.GrandTotal + element.total;
        });
      });
    }
    else {
      if (localStorage.getItem('cart') != undefined) {
        var test = localStorage.getItem('cart');
        var test2 = JSON.parse(test);

        var i = 0;
        if (this.getCartList.length == 0) {
          this.getCartList.push(test2);
        }
        else {
          this.getCartList.forEach(element => {
            if (element.id == test2.id) {
              i++;
            }
          })
        }
        if (i > 0) {
          this.getCartList.push(test2);
        }
        this.getCartList.forEach(element => {
          this.detailsService.getProductSizelist(element.id).subscribe(data => {
            element.sizelist = data;
             
            element.sizelist.forEach(element => {
              element.sizeclass = 'single-size';
            });

          });
          element.quantity = 1;
          element.total = element.productPrice * element.quantity;
          this.GrandTotal = this.GrandTotal + element.total;
        })

      }
    }

  }
  selectSize(ind, j, val) {
     
    this.getCartList[ind].size = val;
    this.userOrdersModel.size = val;
    this.getCartList[ind].sizelist[j].sizeclass = 'single-size active';

  }
  showingListProduct() {
    if (this.isproductList == false) {
      this.isproductList = true;
      this.ispayment = true;
    }
    else {
      this.isproductList = false;

    }


    this.userOrdersModel.userid = localStorage.getItem('UserId');
    this.userOrdersModel.username = localStorage.getItem('Username');
    this.userOrdersModel.productid = this.getCartList;
    this.userOrdersModel.total = this.GrandTotal;
    this.userOrdersModel.status = 'Pending';
     
    this.checkoutService.saveOrders(this.userOrdersModel).subscribe((data: any) => {
      alert("order succesfully");
    })


  }
  decrementQty(indx) {
    if (this.getCartList[indx].quantity == 1) {
      this.GrandTotal = this.GrandTotal - this.getCartList[indx].productPrice;
      this.navbaruserService.removeCart(this.getCartList[indx].id).subscribe((req) => {
        this.getCartList.splice(indx, 1);
      })
    }
    else {
      this.getCartList[indx].quantity--;
      this.getCartList[indx].total = this.getCartList[indx].total - this.getCartList[indx].productPrice
      this.GrandTotal = this.GrandTotal - this.getCartList[indx].productPrice;
    }
  }

  incrementQty(indx) {

    this.getCartList[indx].quantity++;
    this.getCartList[indx].total = this.getCartList[indx].total + this.getCartList[indx].productPrice;
    this.GrandTotal = this.GrandTotal + this.getCartList[indx].productPrice;

  }
  changeLoginUser() {
    this.isShowLogout = true;
    this.isAddress = true;
  }
  changeOrderUser() {
    this.isproductList = false;
  }

  logoutUser() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
  ContinueCheckout() {
    this.isAddress = false;
    this.isShowLogout = false;
    this.isAddress = false;
  }
  SendEmailToUser() {

  }
  signupOpen() {
     
    this.isSignup = true;
    this.isLogin = true;
  }
  submitUserRegister() {
    // this.RegisterCheckoutModel.isactive = true;
    // this.registerService.saveUser(this.RegisterCheckoutModel).subscribe((response) => {

    // })
  }
}