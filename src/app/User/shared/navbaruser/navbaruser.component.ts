import { Component, OnInit } from '@angular/core';
// import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

// import { Category } from 'app/Admin/category/category.model';
import { ApiService } from 'app/api.service';
import { Productlist } from 'app/User/product/list/productlist.model';
import { Wishlist } from 'app/User/product/list/wishlist.model';
import { Toaster } from 'ngx-toast-notifications';
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
  getCartList: Productlist[] = [];
  test2: any = [];
  public wishList: Wishlist[] = [];
  // public CategoryModel: Category = new Category;
  public categoryList: any = [];
  public subtosub: any = [];
  openSub: boolean = false;
  isLogged: boolean = false;
  carttotal: number = 0;
  subid: any;
  public uName = localStorage.getItem('Username');

  constructor(
    private navbaruserService: NavbaruserService,
    private router: Router,
    private apiservice: ApiService,
    private toaster: Toaster
  ) {
 
    if (localStorage.getItem('UserId') != undefined || localStorage.getItem('UserId') != null) {
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
    this.getCart();
    setInterval(() => this.getCart(), 3500);
    this.getWishList();
    setInterval(() => this.getWishList(), 3500);
    this.getCategoryList();
  }

  ngOnInit(): void {
  }
  openlink() {

    this.router.navigate(['contactus']);
  }
  getCart() {
    this.carttotal = 0;
    if (localStorage.getItem('UserId') != undefined) {
      this.navbaruserService.getCartList().subscribe((data: any) => {
        this.getCartList = data;
        this.getCartList.forEach(element => {
          this.carttotal = this.carttotal + element.productPrice;
        })
      });
    }
    else {
      
      this.test2=[];
    
      if (localStorage.getItem('iscart') != undefined) {
        
        // var test = localStorage.getItem('cart');
        // this.test2 = JSON.parse(test);
      
        for (let idx = 1; idx < 10; idx++) {
          var test = localStorage.getItem('cart'+idx);
          var test1 = JSON.parse(test);
          if(test1 != null){
            this.test2.push(test1);
          }  
        }
        
        if (this.getCartList.length == 0 && this.test2.length > 0) {
          this.test2.forEach(element => {
            if(this.getCartList.length >0){
              if(this.getCartList[0].id != element.id){
                this.getCartList.push(element);
              }
            }
            else{
              this.getCartList.push(element);
            }
           
          });
          for(let p=0;p<this.getCartList.length;p++){
            debugger
            if(p < this.getCartList.length-1){
              if(this.getCartList[p].id == this.getCartList[p+1].id){
                this.getCartList.splice(p,1);
              }
            }
         
            
          }
           this.carttotal = this.carttotal + this.getCartList[0].productPrice;
        }
        else {
          
          if(this.test2.length >0){
            debugger
            var i = 0;
            var j = 0;
            this.test2.forEach(element => {
              this.getCartList.forEach((element1 => {
               
                debugger
                if (element.id != element1.id) {
                  i++;
                }
                else {
                  j++;
                }
              }));
              if (i > 0 && j == 0) {
                i=0;
                j=0;
                this.getCartList.push(element);
                this.getCartList.forEach(element => {
                  this.carttotal = this.carttotal + element.productPrice;
                })
              }
              else {
                i=0;
                j=0;
                this.getCartList.forEach(element => {
                  this.carttotal = this.carttotal + element.productPrice;
                })
              }
            });
          }
        
        }
      



      }
     
    }

    }
    getWishList() {
      if (localStorage.getItem('UserId') != undefined) {
        this.navbaruserService.getWish().subscribe((data: any) => {
          this.wishList = data;
        });
      }
      else {
        if (localStorage.getItem('wish') != undefined) {
          var test = localStorage.getItem('wish');
          var test2 = JSON.parse(test);
          var i = 0;
          var j = 0;
          if (this.getCartList.length == 0) {
            this.wishList.push(test2);
          }
          else {
            this.wishList.forEach(element => {
              if (element.id == test2.id) {
                i++;
              }
              else {
                j++;
              }
            })
          }
          if (i > 0 && j == 0) {
            this.wishList.push(test2);

          }
        }

      }

    }
    Viewcart(){
      this.router.navigate(['usercart'], {
        queryParams: {
          data: JSON.stringify(this.getCartList)
        }
      });
    }
    removeWishItem(index, id) {

      this.navbaruserService.removeWish(id).subscribe((req) => {
        this.wishList.splice(index, 1);
        this.toaster.open({ text: 'Product remove from WishList Successfully.', caption: 'Product', type: 'dark', duration: 4000, position: 'bottom-center' });
      })
    }
    removeCartItem(index, id) {
      localStorage.removeItem('cart');
      this.carttotal = this.carttotal - this.getCartList[index].productPrice;
      this.navbaruserService.removeCart(id).subscribe((req) => {
        this.carttotal = this.carttotal - this.getCartList[index].productPrice;
        this.getCartList.splice(index, 1);
        this.toaster.open({ text: 'Product remove from Cart Successfully.', caption: 'Product', type: 'dark', duration: 4000, position: 'bottom-center' });
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


    }
    openSubToSub(mainid, subid, i, j) {
      this.subid = subid;
      this.categoryList[i].SubCategory[j].subtosub = [];
      if (this.openSub == false) {
        this.openSub = true;
        this.navbaruserService.getCategory(subid).subscribe((data: any) => {
          if (data) {
            this.subtosub = data;
            this.categoryList[i].SubCategory[j].subtosub = data;
            this.categoryList[i].SubCategory[j].isopen = true;
            if (data.length == 0) {
              this.getPoductToNavbar(this.categoryList[i].SubCategory[j].id);
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

      localStorage.clear();
      this.isLogged = false;
      this.toaster.open({ text: 'User Logout Successfully.', caption: 'Logout', type: 'dark', duration: 4000, position: 'bottom-center' });
    }
    getPoductToSubNavbar(id) {
      this.router.navigate(['/product/productlist'], {
        queryParams: {
          val: JSON.stringify({ subid: id, catid: this.subid })
        }
      })
    }
    getPoductToNavbar(id) {
      this.router.navigate(['/product/productlist'], {
        queryParams: {
          val: JSON.stringify({ catid: id })
        }
      })
    }
  }
