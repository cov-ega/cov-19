import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  constructor(private profileService: ProfileService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfileInfo();
  }


  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }

}
