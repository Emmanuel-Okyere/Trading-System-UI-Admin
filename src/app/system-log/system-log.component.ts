import { Component } from '@angular/core';
import {ReportingServiceService} from "../service/reporting-service.service";

@Component({
  selector: 'app-system-log',
  templateUrl: './system-log.component.html',
  styleUrls: ['./system-log.component.css']
})
export class SystemLogComponent {

  displayedColumns: String [] = ['id', 'title', 'service', 'event', 'description', 'createdAt', 'updatedAt'];
  dataSource: any;
  log: any[] = []

  constructor(private reportingService: ReportingServiceService) {
  }

  ngOnInit() {
    this.getSystemLogs();
  }

  getSystemLogs(){
    this.reportingService.getSystemLog().subscribe(
      response => {
        this.log = response.data;
        this.dataSource = response.data;
      }
    )
  }
}
