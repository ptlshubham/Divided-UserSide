import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { Address } from 'app/User/product/checkout/address.model';
import { data } from 'jquery';
import { RegisterUserService } from '../registeruser.service';
import { State } from './manageuser.model';

@Component({
  selector: 'app-manageuser',
  templateUrl: './manageuser.component.html',
  styleUrls: ['./manageuser.component.css']
})
export class ManageuserComponent implements OnInit {
  dashboardclass: string = 'tab-pane fade show active'
  ordersclass: string = 'tab-pane fade ';
  downloadclass: string = 'tab-pane fade ';
  paymentmethodclass: string = 'tab-pane fade ';
  addresseditclass: string = 'tab-pane fade ';
  accountinfoclass: string = 'tab-pane fade ';
  public userAddressModel: Address = new Address;
  public userAddress: Address[] = [];
  public stateList: State[] = [];
  public selectedstate: any;
  isShow: boolean = false;
  ordersUser:any;
  public localUserName = localStorage.getItem('Username');
  public localUserId = localStorage.getItem('UserId');
  constructor(
    private registerService: RegisterUserService,
    private apiservice: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
  }
  dashboad() {
    this.dashboardclass = 'tab-pane fade show active'
    this.ordersclass = 'tab-pane fade';
    this.downloadclass = 'tab-pane fade';
    this.paymentmethodclass = 'tab-pane fade';
    this.addresseditclass = 'tab-pane fade';
    this.accountinfoclass = 'tab-pane fade';
    this.isShow = false;
  }
  orders() {
    this.dashboardclass = 'tab-pane fade'
    this.ordersclass = 'tab-pane fade show active';
    this.downloadclass = 'tab-pane fade';
    this.paymentmethodclass = 'tab-pane fade';
    this.addresseditclass = 'tab-pane fade';
    this.accountinfoclass = 'tab-pane fade';
    this.isShow = false;
    this.getOrdersForUser();
  }
  download() {
    this.dashboardclass = 'tab-pane fade'
    this.ordersclass = 'tab-pane fade';
    this.downloadclass = 'tab-pane fade show active';
    this.paymentmethodclass = 'tab-pane fade';
    this.addresseditclass = 'tab-pane fade';
    this.accountinfoclass = 'tab-pane fade';
    this.isShow = false;
  }
  paymentmethod() {
    this.dashboardclass = 'tab-pane fade'
    this.ordersclass = 'tab-pane fade';
    this.downloadclass = 'tab-pane fade';
    this.paymentmethodclass = 'tab-pane fade show active';
    this.addresseditclass = 'tab-pane fade';
    this.accountinfoclass = 'tab-pane fade';
    this.isShow = false;
  }
  addressedit() {
    this.dashboardclass = 'tab-pane fade'
    this.ordersclass = 'tab-pane fade';
    this.downloadclass = 'tab-pane fade';
    this.paymentmethodclass = 'tab-pane fade';
    this.addresseditclass = 'tab-pane fade show active';
    this.accountinfoclass = 'tab-pane fade';
    this.isShow = false;
    this.getUserAddress();
    this.getStateList();
  }
  accountinfo() {
    this.dashboardclass = 'tab-pane fade'
    this.ordersclass = 'tab-pane fade';
    this.downloadclass = 'tab-pane fade';
    this.paymentmethodclass = 'tab-pane fade';
    this.addresseditclass = 'tab-pane fade';
    this.accountinfoclass = 'tab-pane fade show active';
    this.isShow = false;
  }
  logoutUser() {
    localStorage.clear();
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
  saveAddress() {
    this.userAddressModel.userid = this.localUserId;
    this.userAddressModel.state = this.selectedstate;
    this.registerService.saveUserAddress(this.userAddressModel).subscribe((response) => {
      this.apiservice.showNotification('top', 'right', 'Address Successfully Saved.', 'success');
    })
  }
  getUserAddress() {
    this.registerService.getAddress(localStorage.getItem('UserId')).subscribe((data: any) => {
      this.userAddress = data;
    });
  }
  addAddress() {
    this.isShow = true;
  }
  cancelAddress() {
    this.isShow = false;
  }
  editUserAddress(obj) {
    this.isShow = true;
    this.selectedstate = obj.state;
    this.userAddressModel = obj;

  }
  UpdateAddress(){
    this.userAddressModel.userid = this.localUserId;
    this.userAddressModel.state = this.selectedstate;
    this.registerService.updateAddress(this.userAddressModel).subscribe((req) => {
      this.getUserAddress();
    })
  }
  removeUserAddress(id) {
    this.registerService.removeAddress(id).subscribe((req) => {
      this.getUserAddress();
    })
  }
  getOrdersForUser(){
     
    this.registerService.getUserOrders(this.localUserId).subscribe((data: any) => {
      this.ordersUser = data;
    });
  }
  productDetails(id){
    this.router.navigate(['/product/productdetails'], {
      queryParams: {
        val: id
      }
    })
  }
  viewOrdersDetails(data){
     
  }
}
