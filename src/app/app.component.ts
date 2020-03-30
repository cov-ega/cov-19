import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid19';
  navbar = {
    logo: '../assets/covid-logo.png',
    menu: [],
    rightButtons: [{name: 'login', color: 'primary' , type: 'normal'}, {name: 'signup', color: 'primary', type: 'raised'}],
  };
}
