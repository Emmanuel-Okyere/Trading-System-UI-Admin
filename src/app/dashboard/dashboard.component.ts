import { Component } from '@angular/core';
import {ReportingServiceService} from "../service/reporting-service.service";

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
  order: any = [];
  user: any[] = [];

  displayedColumns: string[] = ['id', 'product', 'side', 'quantity', 'type', 'price', 'orderStatus', 'orderId', 'ticker', 'name', 'balance', 'email', 'createdAt'];
  dataSource: any;


  constructor(private reporting: ReportingServiceService){}

  ngOnInit() {
    this.getStatistics();
    this.getOrders();
  }

  getStatistics(){
    this.reporting.getStatistics().subscribe(response => {
     this.totalUsers = response.data.users;
     this.totalSystemLog = response.data.systemLog;
     this.totalOrders = response.data.orders;
     this.totalBuyOrders = response.data.buyOrders;
     this.totalSellOrders = response.data.sellOrders;
     this.totalPortfolios = response.data.portfolios;
    });
  }

  getOrders(){
    this.reporting.getOrders().subscribe(response => {
      this.order = response;
      this.dataSource = response;
    })
  }

}
