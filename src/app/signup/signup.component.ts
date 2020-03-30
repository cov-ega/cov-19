import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


function passwordConfirming(c: AbstractControl): { invalid: boolean } {

  if (c.get('password').value !== c.get('confirm_password').value) {
    return {invalid: true};
  }
}

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
  // TODO: Validate form and implement http request
  ngOnInit() {
    this.userSignUpForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email_address: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      passwordGroup: this.formBuilder.group({
        password: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]],
      }, {validator: passwordConfirming}),
      // password: ['', [Validators.required, Validators.minLength(3)]],
      // confirm_password: ['', [Validators.required, this.passwordConfirming , Validators.minLength(3)]],

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
    console.log(this.userSignUpForm.value);
    // this.router.navigate(['/dashboard']);
  }
  back() {
      this.isLeftVisible = true;
  }
  next() {
      this.isLeftVisible = false;
  }





}
