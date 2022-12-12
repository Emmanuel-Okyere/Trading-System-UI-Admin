import { Component } from '@angular/core';
import {ReportingServiceService} from "../service/reporting-service.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  displayedColumns: String [] = ['id', 'ticker', 'name', 'email', 'balance'];
  dataSource: any;
  portfolio: any;

  constructor(private reportingService: ReportingServiceService) {
  }

  ngOnInit() {
    this.getPortfolios();
  }

  getPortfolios(){
    this.reportingService.getPortfolios().subscribe(
      response => {
        this.portfolio = response;
        this.dataSource = response;
      }
    )
  }
}
