import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Productlist } from './productlist.model';
import { ApiService } from 'app/api.service';
import { Wishlist } from './wishlist.model';
import { Product } from 'app/User/home/product.model';
import { Category } from 'app/User/home/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getProduct(): Observable<Productlist[]>{
    return this.httpClient.get<any>(ApiService.getProductListURL);
  }
  getNavbarProduct(data): Observable<Productlist[]>{
   
    return this.httpClient.post<any>(ApiService.getNavbarRoutedProductURL,data);
  }
  saveAddTocart(admin: Productlist): Observable<any>{
    return this.httpClient.post<any>(ApiService.saveAddToCartURL, admin);
  }
  saveAddToWish(admin: Wishlist): Observable<any>{
    return this.httpClient.post<any>(ApiService.saveAddToWishURL, admin);
  }
  getMainCat(id): Observable<Category[]>{
    return this.httpClient.get<any>(ApiService.getCategoryListURL+id);
  }
  getPopular(): Observable<Product[]>{
    return this.httpClient.get<any>(ApiService.getPopularProductsURL);
  }
  getSimilar(id){
    let data={
      id:id
    }
    return this.httpClient.post<any>(ApiService.getSimilarProductURL, data);
  }

}
