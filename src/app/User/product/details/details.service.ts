import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'app/api.service';
import { Observable } from 'rxjs';
import { Productlist } from '../list/productlist.model';
import { Images } from './images.model';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getDetails(id): Observable<Productlist>{
    return this.httpClient.get<any>(ApiService.getProductDetailsURL+id);
  }
  getProductSizelist(id){
    let data={
      id:id
    }
    return this.httpClient.post(ApiService.getProductSizeListURL,data);
  }
  
  getImages(id): Observable<Images>{
    return this.httpClient.get<any>(ApiService.getProductImagesURL+id);
  }
 
}
