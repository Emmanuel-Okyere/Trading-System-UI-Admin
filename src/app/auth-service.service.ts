import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {loginUrl, registerUrl, getOrdersUrl, getUserPortfolioUrl, getStatisticsUrl} from 'src/constants/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) {}

  login(data: any):Observable<any>{
    console.log("In Login");
    return this.http.post(`${loginUrl}`, data);
  }

  register(data: any):Observable<any>{
    console.log("In Register");
    return this.http.post(`${registerUrl}`, data);
  }

  getOrdersService(){
    console.log("In Get Orders");
    return this.http.get(`${getOrdersUrl}`);
  }

  getStatistics(){
    return this.http.get(`${getStatisticsUrl}`)
  }

  tradeStock(){
    console.log("In Trade Stock");

    // This is wrong but will fix it.
    return this.http.get(`${getOrdersUrl}`);
  }

  getUserPortfolio(){
    console.log("In Get User Portfolio");

    const sessionData = sessionStorage.getItem('accessToken');
    console.log(sessionData);

    let headers = ({
      'Authorization': 'Bearer ' + sessionData,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    });

    console.log(";;;;;;;");
    console.log(headers);

    return this.http.get(`${getUserPortfolioUrl}`, { headers: headers });

  }

}
