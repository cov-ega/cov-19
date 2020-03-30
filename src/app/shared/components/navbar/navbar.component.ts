import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() logo: string;
  //TODO: Implement menu after the user is logged in
  @Input() menu: Array<string>;
  @Input() rightButtons: Array<string>;
  constructor() { }

  ngOnInit() {
  }

}
