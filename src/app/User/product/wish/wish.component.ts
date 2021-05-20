import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { NavbaruserService } from 'app/User/shared/navbaruser/navbaruser.service';
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
    private apiservice: ApiService
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
    })
  }
  addWishToCart(wish) {
    debugger
    var data = {
      userid: localStorage.getItem('UserId'),
      productid: wish.productid
    }
    this.productListService.saveAddTocart(data).subscribe((response) => {
      this.apiservice.showNotification('top','right','Product successfully added in Wishlist.','success');
      this.removeWishToCart(wish.id);
    })
  }
  removeWishToCart(id) {
    debugger
    this.navbaruserService.removeWish(id).subscribe((req) => {
      this.getWishList()
    })
  }
}
