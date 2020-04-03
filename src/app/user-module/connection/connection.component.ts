import {Component, OnInit} from '@angular/core';
import {ConnectionService} from '../services/connection.service';
import {IUser} from '../../core/models/user.model';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  connections: Array<any>;
  familyMembers: Array<any>;
  isFeed = false;
  index: number;
  connection: Array<IUser>;
  family: Array<IUser>;

  constructor(private connectionService: ConnectionService) {
  }

  ngOnInit() {
    this.getConnection();
  }

  getConnection() {
    this.connectionService.getConnections().subscribe(
      data => {
        this.connection = data;
      },
      error => {
        alert(error.title + '' + error.status);
      }
    );
  }

  getFamily() {
    this.connectionService.getFamily().subscribe(
      data => {
        this.family = data;
      },
      error => {
        alert(error.title + '' + error.status);
      }
    );
  }

  getTabData(event) {
    if (event.index === 0) {
      this.getConnection();
    }
    if (event.index === 1) {
      this.getFamily();
    }

  }

}
