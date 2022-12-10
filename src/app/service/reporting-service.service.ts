import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Statistic} from "../model/Statistic";
import {getOrderUrl, getStatisticsUrl, getUserUrl} from "../../constants/environment";
import {OrderData} from "../model/OrderData";
import {User} from "../model/User";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReportingServiceService {

  constructor(private http: HttpClient) { }

  getStatistics() : Observable<Statistic>{
    return this.http.get<Statistic>(`${getStatisticsUrl}`)
  }

  getOrders() : Observable<OrderData>{
    return this.http.get<OrderData>(`${getOrderUrl}`)
  }

  getUsers() : Observable<User>{
    return this.http.get<User>(`${getUserUrl}`)
  }
}
