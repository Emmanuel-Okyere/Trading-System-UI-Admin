import { Component } from '@angular/core';
import {AuthServiceService} from "../auth-service.service";
import {Statistic} from "../model/Statistic";
import {map, Observable} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Datum, OrderData} from "../model/OrderData";
import {UserList} from "../model/User";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  totalUsers: Number = 0;
  totalSystemLog: Number = 0;
  totalPortfolios: Number = 0;
  totalSellOrders: Number = 0;
  totalOrders: Number = 0;
  totalBuyOrders: Number = 0;
  order: Datum[] = [];
  user: any[] = [];

  displayedColumns: string[] = ['id', 'product', 'side', 'quantity', 'type', 'price', 'orderId', 'ticker', 'name', 'balance', 'email', 'createdAt'];
  dataSource: any;


  constructor(private authService: AuthServiceService){}

  ngOnInit() {
    this.getStatistics();
    this.getOrders();
  }

  getStatistics(){
    this.authService.getStatistics().subscribe(response => {
     this.totalUsers = response.data.users;
     this.totalSystemLog = response.data.systemLog;
     this.totalOrders = response.data.orders;
     this.totalBuyOrders = response.data.buyOrders;
     this.totalSellOrders = response.data.sellOrders;
     this.totalPortfolios = response.data.portfolios;
    });
  }

  getOrders(){
    this.authService.getOrders().subscribe(response => {
      this.order = response.data;
      this.dataSource = response.data;
    })
  }

  getUsers(){
    this.authService.getUsers().subscribe(response => {

    })
  }


}
