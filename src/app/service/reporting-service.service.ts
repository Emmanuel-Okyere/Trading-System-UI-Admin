import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Statistic} from "../model/Statistic";
import {getOrderUrl, getPortfolioUrl, getStatisticsUrl, getStstemLogUrl, getUserUrl} from "../../constants/environment";
import {OrderData} from "../model/OrderData";
import {User} from "../model/User";
import {HttpClient} from "@angular/common/http";
import {Portfolio} from "../model/Portfolio";
import {SystemLog} from "../model/SystemLog";

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

  getPortfolios() : Observable<Portfolio>{
    return this.http.get<Portfolio>(`${getPortfolioUrl}`)
  }

  getSystemLog() : Observable<SystemLog>{
    return this.http.get<SystemLog>(`${getStstemLogUrl}`)
  }
}
