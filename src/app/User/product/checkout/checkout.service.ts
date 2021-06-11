import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'app/api.service';
import { Observable } from 'rxjs';
import { Userorders } from './orders.model';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(
    private httpClient: HttpClient
  ) { }
  saveOrders(user: Userorders): Observable<any> {
     
    return this.httpClient.post<any>(ApiService.saveUserOrdersURL, user);
  }
  sendEmail(id) {
    return this.httpClient.post<any>(ApiService.sendEmailToUserURL, id)
  }


}
