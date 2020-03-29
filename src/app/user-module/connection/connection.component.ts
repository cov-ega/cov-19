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
  constructor(private connectionService: ConnectionService) { }

  ngOnInit() {
    this.connections = this.connectionService.getConnections();
    this.familyMembers = this.connectionService.getFamily();
  }

}
