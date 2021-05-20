import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'app/api.service';
import { HttpHeaders } from '@angular/common/http';
import { Address } from '../product/checkout/address.model';
import { Webbanners } from './webhome.model';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class UserHomeService {


  constructor(
    private httpClient: HttpClient,


  ) { }
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getWebSlider(): Observable<[Webbanners]>{
    return this.httpClient.get<any>(ApiService.getWebBannerURL);
  }
  getBestProduct(): Observable<Product[]>{
    return this.httpClient.get<any>(ApiService.getBestProductURL);
  }
  getNewArrival(): Observable<Product[]>{
    return this.httpClient.get<any>(ApiService.getNewArrivalURL);
  }
}
