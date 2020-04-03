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
    debugger;
    this.index = this.nearByUserList.findIndex(obj => obj.userId === userId);
    this.nearByUserList[this.index].isLoading = true;
    this.nearByUserList[this.index].isLoading = false;
    this.nearByUserList[this.index].hasBeenChanged = true;
    this.nearByUserList[this.index].responseColor = '#a2c9aa';
    this.nearByUserList[this.index].changeMessage = this.nearByUserList[this.index].userName + ' ' + this.nearByUserList[this.index].userSurname + ' eshte anetar if familjes tuaj';
  }

  hasMeetUser(userId) {
    this.dashboardService.addConnection(userId).subscribe(
      (data => {
        this.index = this.nearByUserList.findIndex(obj => obj.userId === userId);
        this.nearByUserList[this.index].isLoading = true;
        this.nearByUserList[this.index].isLoading = false;
        this.nearByUserList[this.index].hasBeenChanged = true;
        this.nearByUserList[this.index].responseColor = '#909eb4';
        this.nearByUserList[this.index].changeMessage = 'Ju keni thene qe keni takuar ' + this.nearByUserList[this.index].userName + ' ' + this.nearByUserList[this.index].userSurname;
      }),
      (error => {
        alert(error.title + ' ' + error.status);
      })
    );

  }

  hasNotMeetUser(userId) {
    debugger;
    this.index = this.nearByUserList.findIndex(obj => obj.userId === userId);
    this.nearByUserList[this.index].isLoading = true;
    this.nearByUserList[this.index].isLoading = false;
    this.nearByUserList[this.index].hasBeenChanged = true;
    this.nearByUserList[this.index].responseColor = '#b06262';
    this.nearByUserList[this.index].changeMessage = 'Ju keni thene qe nuk keni takuar ' + this.nearByUserList[this.index].userName + ' ' + this.nearByUserList[this.index].userSurname;

  }


}
