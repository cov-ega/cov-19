import {Component} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {Observable} from 'rxjs';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid19';
  navbar: any;
  currentDate = new Date().toISOString();

  constructor(
    public authService: AuthService,
    private meta: Meta
  ) {
    this.addMetaData();
    this.initialize();
  }

  initialize() {
    this.authService.isLoggedIn().subscribe(value => {
      if (value === true) {
        this.navbar = {
          logo: '../assets/AntiCov_Logo_Dark.svg',
          menu: [{name: '/user/dashboard', icon: 'home'}, {name: '/user/connection', icon: 'supervisor_account'}, {
            name: '/user/profile',
            icon: 'person'
          }],
          rightButtons: [],
        };
      } else {
        this.navbar = {
          logo: '../assets/AntiCov_Logo_Dark.svg',
          menu: [],
          rightButtons: [{name: 'login', color: 'primary', type: 'normal'}, {name: 'signup', color: 'primary', type: 'raised'}],
        };
      }
    });
  }

  addMetaData() {
    this.meta.updateTag({name: 'title', content: 'AntiCov'});
    this.meta.updateTag({name: 'description', content: 'AntiCov Platform'});
    this.meta.updateTag({name: 'image', content: './assets/AntiCov_Logo_Dark.svg'});
    this.meta.updateTag({name: 'site', content: 'Covid Site'});
  }

  removeLocal() {
    this.authService.logout();
  }
}
