import { Component, OnInit } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
// import { Category } from 'app/Admin/category/category.model';
import { ApiService } from 'app/api.service';
import { Productlist } from 'app/User/product/list/productlist.model';
import { Wishlist } from 'app/User/product/list/wishlist.model';
import { NavbaruserService } from './navbaruser.service';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})
export class NavbaruserComponent implements OnInit {
  open: boolean;
  wish: boolean;
  cartclass: string = 'cart-overlay';
  wishclass: string = 'wishlist-overlay';
  public getCartList: Productlist[] = [];
  public wishList: Wishlist[] = [];
  // public CategoryModel: Category = new Category;
  public categoryList: any = [];
  public subtosub: any = [];
  openSub: boolean = false;
  isLogged: boolean = false;
  carttotal:number=0;
  public uName = localStorage.getItem('Username');

  constructor(
    private navbaruserService: NavbaruserService,
    private router: Router,
    private apiservice:ApiService,
    private notifier:NotifierService
    // private _snackBar: MatSnackBar
  ) {
    if(localStorage.getItem('UserId') != undefined || localStorage.getItem('UserId') != null){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
     this.getCart();
      //setInterval(() => this.getCart(), 3500);
      this.getWishList();
    // setInterval(() => this.getWishList(), 3500);
     this.getCategoryList();
  }

  ngOnInit(): void {
  }
  openlink() {

    this.router.navigate(['contactus']);
  }
  getCart() {
    this.carttotal = 0;
    if(localStorage.getItem('UserId') != undefined){
      this.navbaruserService.getCartList().subscribe((data: any) => {
        this.getCartList = data;
        this.getCartList.forEach(element=>{
          this.carttotal = this.carttotal + element.productPrice;
        })
      });
    }
    else{
      
      if(localStorage.getItem('cart') != undefined){
        var test = localStorage.getItem('cart');
        var test2 = JSON.parse(test);
        var i=0;
          if(this.getCartList.length == 0){
            this.getCartList.push(test2);
            this.carttotal = this.carttotal +  this.getCartList[0].productPrice;
          }
          else{
            this.getCartList.forEach(element =>{
              if(element.id != test2.id){
                i++;
              }
            })
          }
          if(i >0){
            this.getCartList.push(test2);
            this.getCartList.forEach(element=>{
              this.carttotal = this.carttotal + element.productPrice;
            })
          }
          else{
            this.getCartList.forEach(element=>{
              this.carttotal = this.carttotal + element.productPrice;
            })
          }
      }
     
    }
    
  }
  getWishList() {
    if(localStorage.getItem('UserId') != undefined){
      this.navbaruserService.getWish().subscribe((data: any) => {
        this.wishList = data;
      });
    }
    else{
      if(localStorage.getItem('wish') != undefined){
        var test = localStorage.getItem('wish');
        var test2 = JSON.parse(test);
        var i=0;
          if(this.getCartList.length == 0){
            this.wishList.push(test2);
          }
          else{
            this.wishList.forEach(element =>{
              if(element.id == test2.id){
                i++;
              }
            })
          }
          if(i >0){
            this.wishList.push(test2);
          }
      }
     
    }
   
  }
  removeWishItem(index, id) {
   
    this.navbaruserService.removeWish(id).subscribe((req) => {
      this.wishList.splice(index, 1);
    })
  }
  removeCartItem(index, id) {
    this.carttotal =this.carttotal- this.getCartList[index].productPrice;
    this.navbaruserService.removeCart(id).subscribe((req) => {
      this.carttotal= this.carttotal - this.getCartList[index].productPrice;
      this.getCartList.splice(index, 1);
    })
  }

  openCart() {
    this.open = true;
    this.cartclass = 'cart-overlay active-cart-overlay';
    // this.getCart();
  }
  closeCart() {
    this.cartclass = 'cart-overlay';
    // this.getCart();
  }
  openWish() {
    this.open = true;
    this.wishclass = 'wishlist-overlay active-wishlist-overlay';
  }
  closeWish() {
    this.wishclass = 'wishlist-overlay';
  }
  getProductList(id) {
    this.router.navigate(['product/productdetails'], {
      queryParams: {
        val: id
      }
    })
  }
  getCategoryList() {
    this.navbaruserService.getCategory(0).subscribe((data: any) => {
      this.categoryList = data;
      this.categoryList.forEach(element => {
        this.navbaruserService.getCategory(element.id).subscribe((res: any) => {
          element.SubCategory = res;
        })
      })
    });
    this.categoryList;

  }
  openSubToSub(mainid, subid, i, j) {
    this.categoryList[i].SubCategory[j].subtosub = [];
    if (this.openSub == false) {
      this.openSub = true;
      this.navbaruserService.getCategory(subid).subscribe((data: any) => {
        if (data) {
          this.subtosub = data;
          this.categoryList[i].SubCategory[j].subtosub = data;
          this.categoryList[i].SubCategory[j].isopen = true;
          if(data.length ==0){
            this.getPoductToNavbar( this.categoryList[i].SubCategory[j].id);
          }
        }
        else {
          this.categoryList[i].SubCategory[j].isopen = false;
          // this.getPoductToNavbar( this.categoryList[i].SubCategory[j].id);
        }

      })
    }
    else {
      this.openSub = false;
      this.categoryList[i].SubCategory[j].isopen = false;
    }

  }
  logoutUser() {
    debugger
    localStorage.clear();
    this.isLogged = false;
    this.notifier.notify('success', 'You are awesome! I mean it!');
    // this._snackBar.open('Logout Successfully....',);
  }
  getPoductToSubNavbar(id) {
    this.router.navigate(['/product/productlist'], {
      queryParams: {
        val:JSON.stringify({subid:id})
      }
    })
  }
  getPoductToNavbar(id){
    this.router.navigate(['/product/productlist'], {
      queryParams: {
        val: JSON.stringify({catid:id})
      }
    })
  }
}
