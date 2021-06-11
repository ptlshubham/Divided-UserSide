import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'app/api.service';
import { RegisterUserModel } from './registeruser.model';
import { HttpHeaders } from '@angular/common/http';
import { State } from './manageuser/manageuser.model';
import { Address } from '../product/checkout/address.model';
import { Userorders } from '../product/checkout/orders.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {


  constructor(
    private httpClient: HttpClient,


  ) { }
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  saveUser(user: RegisterUserModel): Observable<any> {
    return this.httpClient.post<any>(ApiService.saveUserRegisterURL, user, this.httpOption);
  }
  login(credentials: RegisterUserModel): Observable<any> {
    const data = {
      email: credentials.email,
      password: credentials.password
    };
    return this.httpClient.post<any>(ApiService.loginURl, data);
  }

  authenticateSuccess(resp) {
    const bearerToken = resp.token;
    if (bearerToken) {
      localStorage.set('authenticationToken', bearerToken);
    }
  }
  getState(): Observable<State[]>{
    return this.httpClient.get<any>(ApiService.getStateListURL);
  }
  saveUserAddress(user: Address): Observable<any> {
    return this.httpClient.post<any>(ApiService.saveUserAddressURL, user);
  }
  getAddress(id): Observable<Address>{
     
    return this.httpClient.get<any>(ApiService.getUserAddressURL+id);
  }
  removeAddress(id){
     
    return this.httpClient.post<any>(ApiService.removeUserAddressURL,id);
  }
  updateAddress(user){
    return this.httpClient.post<any>(ApiService.updateUserAddressURL, user);
  }
  getUserOrders(id): Observable<Userorders[]>{
    let data={
      id:id
    }
    return this.httpClient.post<any>(ApiService.getOrdersForUserURL,data);
  }
}
