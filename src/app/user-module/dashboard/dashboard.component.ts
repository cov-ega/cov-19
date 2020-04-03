import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../services/dashboard.service';
import {IUser} from '../../core/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  nearByUserList: Array<IUser>;
  isFeed = true;
  index: number;
  user: any;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.initialize();

  }

  initialize() {
    this.dashboardService.getNearbyUserList().subscribe(
      data => {
        this.nearByUserList = data;
      },
      error => {
        alert(error.title + '' + error.status);
      }
    );
  }


  isFamilyMember(userId) {
    this.index = this.user.findIndex(obj => obj.id === userId);
    this.user[this.index].is_loading = true;
    setTimeout(() => {
      this.user[this.index].is_loading = false;
      this.user[this.index].has_been_changed = true;
      this.user[this.index].response_color = '#a2c9aa';
      this.user[this.index].change_message = 'Ky user eshte anetar i familjes tuaj';
    }, 1000);
  }

  hasMeetUser(userId) {
    this.index = this.user.findIndex(obj => obj.id === userId);
    this.user[this.index].is_loading = true;
    setTimeout(() => {
      this.user[this.index].is_loading = false;
      this.user[this.index].has_been_changed = true;
      this.user[this.index].response_color = '#909eb4';
      this.user[this.index].change_message = 'Ju keni thene qe keni takuar Filan Fistekun';
    }, 1000);
  }

  hasNotMeetUser(userId) {
    this.index = this.user.findIndex(obj => obj.id === userId);
    this.user[this.index].is_loading = true;
    setTimeout(() => {
      this.user[this.index].is_loading = false;
      this.user[this.index].has_been_changed = true;
      this.user[this.index].response_color = '#b06262';
      this.user[this.index].change_message = 'Ju keni thene qe nuk keni takuar Filan Fistekun';
    }, 1000);
  }


}
