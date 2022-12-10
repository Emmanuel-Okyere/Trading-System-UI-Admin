import { Component } from '@angular/core';
import {ReportingServiceService} from "../service/reporting-service.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  displayedColumns: String [] = ['id', 'name', 'email', 'balance', 'createdAt', 'updatedAt'];
  dataSource: any;

  constructor(private reportingService: ReportingServiceService) {
  }

  getUsers(){
    this.reportingService.getUsers().subscribe(
      () => {

      }
    )
  }
}
