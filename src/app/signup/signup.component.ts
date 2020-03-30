import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userSignUpForm: FormGroup;
  isLeftVisible = true;
  selectedCountry = '1';
  cities: Array<any> = [
    {value: 'Prishtine', viewValue: 'Prishtine'},
    {value: 'Podujeve', viewValue: 'Podujeve'},
    {value: 'Skenderaj', viewValue: 'Skenderaj'}
  ];


  constructor(private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userSignUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email_address: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      repeat_password: ['', [Validators.required, Validators.minLength(3)]],

      phone_number: ['', [Validators.required, Validators.minLength(3)]],
      personal_id: ['', [Validators.minLength(3)]],
      street: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', [Validators.required, Validators.minLength(3)]],
      zip_code: ['', [Validators.required, Validators.minLength(3)]],
      visit_country_date: [''],
    });
  }

  login() {
    console.log(this.userSignUpForm);
    // this.router.navigate(['/dashboard']);
  }
  back() {
      this.isLeftVisible = true;
  }
  next() {
      this.isLeftVisible = false;
  }


}
