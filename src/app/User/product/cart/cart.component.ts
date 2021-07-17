import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbaruserService } from 'app/User/shared/navbaruser/navbaruser.service';
import { Toaster } from 'ngx-toast-notifications';
import { DetailsService } from '../details/details.service';
import { ProductlistService } from '../list/list.service';
import { Productlist } from '../list/productlist.model';
import { Cart } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  quantity: any;

  public CartModel: Cart[] = [];
  public cart: Cart[] = [];
  getCartList: any=[];
  getWish: any;
  GrandTotal:number=0;
  sizelist:any=[];
  sizeclassxxl="single-size";
  sizeclasss="single-size";
  sizeclassl="single-size";
  sizeclassm="single-size";
  sizeclassxs="single-size";
  sizeclassxl="single-size";
  isxxl:boolean=false;
  ism:boolean=false;
  isxl:boolean=false;
  isl:boolean=false;
  iss:boolean=false;
  isxs:boolean=false;
  test2:any=[];
  constructor(
    private navbaruserService: NavbaruserService,
    private productListService: ProductlistService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private detailsService: DetailsService,
    private toaster: Toaster,
    private activatedroute:ActivatedRoute
  ) {
 
    this.quantity = 1;
    this.activatedRoute.queryParams.subscribe((res:any)=>{
      if(res){
        // this.getCartList = JSON.parse(res.data);
        debugger
      }
    })
    this.getCart();
  }
  ngOnInit(): void {
  }
  getCart() {


    
    if(localStorage.getItem('UserId') != null || localStorage.getItem('userId') != undefined){
      this.navbaruserService.getCartList().subscribe((data: any) => {
        this.getCartList = data;
        this.getCartList.forEach(element => {
          this.detailsService.getProductSizelist(element.ProductId).subscribe(data=>{
            element.sizelist=data;
            element.sizelist.forEach(element => {
              element.sizeclass='single-size';
            });
           
          });
          element.quantity = 1;
          element.total = element.productPrice*element.quantity;
          this.GrandTotal = this.GrandTotal + element.total;

        });
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
            
            if(p < this.getCartList.length-1){
              if(this.getCartList[p].id == this.getCartList[p+1].id){
                this.getCartList.splice(p,1);
              }
            }
         
            
          }
          if(this.getCartList.length >1){
            this.getCartList.forEach(element=>{
              this.GrandTotal = this.GrandTotal + element.productPrice;
            })
          }
          else{
            this.GrandTotal = this.GrandTotal + this.getCartList[0].productPrice;
          }
          
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
                  this.GrandTotal = this.GrandTotal + element.productPrice;
                })
              }
              else {
                i=0;
                j=0;
                this.getCartList.forEach(element => {
                  this.GrandTotal = this.GrandTotal + element.productPrice;
                })
              }
            });
          }
        
        }
      



      }
     
    }
    
  }

 
  selectSize(ind,j,val){
    
    this.getCartList[ind].size ==val;
    this.getCartList[ind].sizelist[j].sizeclass='single-size active';

  }
  removeCartItem(index, id) {
    this.navbaruserService.removeCart(id).subscribe((req) => {
      this.getCartList.splice(index, 1);
      this.toaster.open({text:'Product remove from cart Successfully.',caption:'Product',type:'dark',duration:4000,position:'bottom-center'});
    })
  }
  decrementQty(indx){
    if(this.getCartList[indx].quantity ==1){
      this.GrandTotal = this.GrandTotal -this.getCartList[indx].productPrice;
      this.removeCartItem(indx , this.getCartList[indx].id);
    }
    else{
      this.getCartList[indx].quantity--;
      this.getCartList[indx].total=this.getCartList[indx].total-this.getCartList[indx].productPrice
      this.GrandTotal = this.GrandTotal -this.getCartList[indx].productPrice;
    }
  }
  // getWishToCartItem() {
  //    
  //   this.ProductListModel.userid = 1;
  //   this.ProductListModel.productid = this.wish.productid;
  //   this.productListService.saveAddTocart(this.ProductListModel).subscribe((response) => {
  //     this.removeWish();
  //   })
  // }
  // removeWish() {
  //    
  //   this.navbaruserService.removeWish(this.wish.id).subscribe((req) => {
  //   })
  // }
  incrementQty(indx) {
    
      this.getCartList[indx].quantity++;
      this.getCartList[indx].total=this.getCartList[indx].total+this.getCartList[indx].productPrice;
      this.GrandTotal = this.GrandTotal +this.getCartList[indx].productPrice;
    
  }

  
  viewProductDetails(id) {
     
    this.router.navigate(['/product/productdetails'], {
      queryParams: {
        val: id
      }
    })
  }
  getProductList(id) {
    this.router.navigate(['/product/productdetails'], {
      queryParams: {
        val: id
      }
    })
  }
}
