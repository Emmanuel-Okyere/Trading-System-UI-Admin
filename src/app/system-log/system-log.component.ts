import {Component, ViewChild} from '@angular/core';
import {ReportingServiceService} from "../service/reporting-service.service";
import {SystemLog} from "../model/SystemLog";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-system-log',
  templateUrl: './system-log.component.html',
  styleUrls: ['./system-log.component.css']
})
export class SystemLogComponent {

  displayedColumns: String [] = ['id', 'title', 'service', 'event', 'description', 'createdAt', 'updatedAt'];
  dataSource: any;
  log: any;

  constructor(private reportingService: ReportingServiceService) {
  }

  ngOnInit() {
    this.getSystemLogs();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getSystemLogs(){
    this.reportingService.getSystemLog().subscribe(
      response => {
        this.log = response;
        this.dataSource = response;
      }
    )
  }
}
