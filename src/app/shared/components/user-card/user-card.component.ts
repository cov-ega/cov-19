import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() isFeed: boolean;
  @Input() user: any;

  @Output() isFamilyMemberEvent: EventEmitter<any> = new EventEmitter();
  @Output() hasMeetUserEvent: EventEmitter<any> = new EventEmitter();
  @Output() hasNotMeetUserEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  isFamilyMember(userID) {
    this.isFamilyMemberEvent.emit(userID);
  }
  hasMeetUser(userID) {
    this.hasMeetUserEvent.emit(userID);
  }
  hasNotMeetUser(userID) {
    this.hasNotMeetUserEvent.emit(userID);
  }


}
