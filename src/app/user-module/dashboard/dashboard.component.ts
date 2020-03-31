import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  nearByUserList: Array<any>;
  isFeed =  true;
  index: number;
  user: any
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    console.log(this.dashboardService.getNearbyUserList());
    this.user = this.dashboardService.getNearbyUserList()
    this.nearByUserList = this.dashboardService.getNearbyUserList();
  }

  isFamilyMember(userId) {
    this.index = this.user.findIndex(obj => obj.id === userId)
    this.user[this.index].is_loading = true;
    setTimeout(() => {
      this.user[this.index].is_loading = false;
      this.user[this.index].has_been_changed = true;
      this.user[this.index].response_color = '#a2c9aa';
      this.user[this.index].change_message = 'Ky user eshte anetar i familjes tuaj';
    }, 1000);
  }
  hasMeetUser(userId) {
    this.index = this.user.findIndex(obj => obj.id === userId)
    this.user[this.index].is_loading = true;
    setTimeout(() => {
      this.user[this.index].is_loading = false;
      this.user[this.index].has_been_changed = true;
      this.user[this.index].response_color = '#909eb4';
      this.user[this.index].change_message = 'Ju keni thene qe keni takuar Filan Fistekun';
    }, 1000);
  }
  hasNotMeetUser(userId) {
    this.index = this.user.findIndex(obj => obj.id === userId)
    this.user[this.index].is_loading = true;
    setTimeout(() => {
      this.user[this.index].is_loading = false;
      this.user[this.index].has_been_changed = true;
      this.user[this.index].response_color = '#b06262';
      this.user[this.index].change_message = 'Ju keni thene qe nuk keni takuar Filan Fistekun';
    }, 1000);
  }


}
