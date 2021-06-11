import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { NavbaruserService } from 'app/User/shared/navbaruser/navbaruser.service';
import { Toaster } from 'ngx-toast-notifications';
import { ProductlistService } from '../list/list.service';
import { Productlist } from '../list/productlist.model';
import { Wishlist } from '../list/wishlist.model';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.css']
})
export class WishComponent implements OnInit {
  public wishList: Wishlist[] = [];
  public ProductListModel: Productlist = new Productlist;
  wish: any;
  constructor(
    private navbaruserService: NavbaruserService,
    private productListService: ProductlistService,
    private router: Router,
    private apiservice: ApiService,
    private toaster:Toaster
  ) {
    this.getWishList();
  }

  ngOnInit(): void {
  }
  getWishList() {
    this.navbaruserService.getWish().subscribe((data: any) => {
      this.wishList = data;
    });
  }
  removeWishItem(index, id) {
    this.navbaruserService.removeWish(id).subscribe((req) => {
      this.wishList.splice(index, 1);
      this.toaster.open({text:'Product remove from WishList Successfully.',caption:'Product',type:'dark',duration:4000,position:'bottom-center'});
    })
  }
  addWishToCart(wish) {
     
    var data = {
      userid: localStorage.getItem('UserId'),
      productid: wish.productid
    }
    this.productListService.saveAddTocart(data).subscribe((response) => {
    
      this.removeWishToCart(wish.id);
    })
  }
  removeWishToCart(id) {
     
    this.navbaruserService.removeWish(id).subscribe((req) => {
      this.toaster.open({text:'Product remove from WishList Successfully.',caption:'Product',type:'dark',duration:4000,position:'bottom-center'});
      this.getWishList()
    })
  }
}
