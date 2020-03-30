import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../core/services/user.service';


function passwordMatch(c: AbstractControl): { invalid: boolean } {
  if (c.get('user_password').value !== c.get('confirm_password').value) {
    return {invalid: true};
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  initialUserInfo: FormGroup;
  otherUserInfo: FormGroup;
  isLeftVisible = true;
  selectedCountry = 'Kosovo';
  // tslint:disable-next-line:variable-name
  user_terms_agreement = false;
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

  // TODO: Add image uploader and checkbox for terms and agrements


  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
  }

  // TODO: Validate form and implement http request
  ngOnInit() {
    this.initialUserInfo = this.formBuilder.group({
      user_name: ['', [Validators.required, Validators.minLength(3)]],
      user_surname: ['', [Validators.required, Validators.minLength(3)]],
      user_email_address: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      user_phone_number: [''],
      user_birthday: ['', [Validators.required]],
      passwordGroup: this.formBuilder.group({
        user_password: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]],
      }, {validator: passwordMatch}),
    })
    this.otherUserInfo = this.formBuilder.group({
      user_personal_id: [''],
      address_country: ['', [Validators.required]],
      address_city: ['', [Validators.required]],
      address_street: ['', [Validators.required]],
      user_last_travel_date: [''],
      user_profile_image: [''],
    });
  }


  signUp() {
     let user = { ...this.initialUserInfo.value, ...this.otherUserInfo.value, ...this.initialUserInfo.get('passwordGroup').value}
     console.log(user);
  }

  back() {
    this.isLeftVisible = true;
  }

  initialUInfo() {
    this.isLeftVisible = false;
    console.log(this.initialUserInfo.value);
  }


}
