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
  isLoading: boolean;

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.initialize();

  }

  initialize() {
    this.isLoading  = true
    this.dashboardService.getNearbyUserList().subscribe(
      data => {
        this.isLoading = false;
        this.nearByUserList = data;

      },
      error => {
        console.log(error.title + '' + error.status);
      }
    );
  }


  isFamilyMember(userId)  {
    this.index = this.nearByUserList.findIndex(obj => obj.userId === userId);
    this.nearByUserList[this.index].isLoading = true;
    this.dashboardService.addFamilyMember(userId).subscribe(
      (data => {
        this.nearByUserList[this.index].isLoading = false;
        this.nearByUserList[this.index].hasBeenChanged = true;
        this.nearByUserList[this.index].responseColor = '#a2c9aa';
        this.nearByUserList[this.index].changeMessage = this.nearByUserList[this.index].userName + ' ' + this.nearByUserList[this.index].userSurname + ' eshte anetar if familjes tuaj';
      }),
      (error => {
        console.log(error.title + ' ' + error.status);
      })
    );

  }

  hasMeetUser(userId) {
    this.index = this.nearByUserList.findIndex(obj => obj.userId === userId);
    this.nearByUserList[this.index].isLoading = true;
    this.dashboardService.addConnection(userId).subscribe(
      (data => {
        this.nearByUserList[this.index].isLoading = false;
        this.nearByUserList[this.index].hasBeenChanged = true;
        this.nearByUserList[this.index].responseColor = '#909eb4';
        this.nearByUserList[this.index].changeMessage = 'Ju keni thene qe keni takuar ' + this.nearByUserList[this.index].userName + ' ' + this.nearByUserList[this.index].userSurname;
      }),
      (error => {
        console.log(error.title + ' ' + error.status);
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
