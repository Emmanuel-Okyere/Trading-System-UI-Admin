import { Component } from '@angular/core';
import {AuthServiceService} from "../auth-service.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private authService: AuthServiceService, private dialogRef : MatDialog){}

  ngOnInit() {
    this.getStatistics();
  }

  getStatistics(){
    this.authService.getOrdersService().subscribe(results => {
      //this.orders = results;
      console.log(results);
    });
  }
}
