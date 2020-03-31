import { Component, OnInit } from '@angular/core';
import {ConnectionService} from '../services/connection.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  connections: Array<any>;
  familyMembers: Array<any>;
  isFeed =  false;
  index: number;
  user: any
  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
    this.user = this.connectionService.getConnections();
    this.user = this.connectionService.getFamily();
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
