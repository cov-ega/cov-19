import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  nearByUserList: Array<any>;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    console.log(this.dashboardService.getNearbyUserList());
    this.nearByUserList = this.dashboardService.getNearbyUserList();
  }

}
