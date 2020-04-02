import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service';
import {AuthService} from '../../core/services/auth.service';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';



function passwordMatch(c: AbstractControl): { invalid: boolean } {
  if (c.get('user_password').value !== c.get('confirm_password').value) {
    return {invalid: true};
  }
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  userInfo: FormGroup;
  selectedCountry = 'Kosovo';
  cities: Array<any> = [
    {value: 'Prishtine', viewValue: 'Prishtine'},
    {value: 'Podujeve', viewValue: 'Podujeve'},
    {value: 'Skenderaj', viewValue: 'Skenderaj'}
  ];
  lagjet: Array<any> = [
    {value: 'Prishtine', viewValue: 'Prishtine'},
    {value: 'Podujeve', viewValue: 'Podujeve'},
    {value: 'Skenderaj', viewValue: 'Skenderaj'}
  ];
  constructor(
    private profileService: ProfileService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  // TODO: Validate form and implement http request
  ngOnInit() {
    this.userProfile = this.profileService.getUserProfileInfo();
    this.userInfo = this.formBuilder.group({
      user_name: ['Filan', [Validators.required, Validators.minLength(3)]],
      user_surname: ['Fisteku', [Validators.required, Validators.minLength(3)]],
      user_email_address: ['filanfisteku@gmail.com', [Validators.required, Validators.email, Validators.minLength(3)]],
      user_phone_number: ['045580909'],
      user_password: ['', [Validators.required]],
      user_birthday: ['', [Validators.required]],
      user_personal_id: ['1176291377'],
      address_country: ['', [Validators.required]],
      address_city: ['', [Validators.required]],
      address_street: ['', [Validators.required]],
      user_last_travel_date: [''],
      user_profile_image: [''],
    });
  }


  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }

}
