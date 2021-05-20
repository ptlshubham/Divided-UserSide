import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ApiService } from 'app/api.service';
import { Productlist } from 'app/User/product/list/productlist.model';
import { Wishlist } from 'app/User/product/list/wishlist.model';
import { Category } from 'app/User/home/category.model';
@Injectable({
  providedIn: 'root'
})
export class NavbaruserService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getCartList(): Observable<Productlist[]> {

    return this.httpClient.get<any>(ApiService.getCartListURL);
  }
  removeCart(id) {

    return this.httpClient.get<any>(ApiService.removeCartListItemURL + id);
  }
  getCategory(id): Observable<Category[]> {
    return this.httpClient.get<any>(ApiService.getCategoryListURL+id);
  }
  getWish(): Observable<Wishlist[]> {

    return this.httpClient.get<any>(ApiService.getWishListURL);
  }
  removeWish(id){
    return this.httpClient.get<any>(ApiService.removeWishListItemURL + id);
    
  }

}