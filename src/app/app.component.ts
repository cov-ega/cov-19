import {Component} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid19';
  navbar: any;
  currentDate = new Date().toISOString();

  constructor(public authService: AuthService) {
    this.initialize();
  }
  initialize() {
    this.authService.isLoggedIn().subscribe(value => {
      if (value === true) {
        this.navbar = {
          logo: '../assets/covid-logo.png',
          menu: [{name: '/user/dashboard', icon: 'home'}, {name: '/user/connection', icon: 'supervisor_account'}, {name: '/user/profile', icon: 'person'}],
          rightButtons: [],
        };
      } else {
        this.navbar = {
          logo: '../assets/covid-logo.png',
          menu: [],
          rightButtons: [{name: 'login', color: 'primary', type: 'normal'}, {name: 'signup', color: 'primary', type: 'raised'}],
        };
      }
    });
  }


  removeLocal() {
    this.authService.logout();
  }
}
