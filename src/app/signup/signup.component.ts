import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../core/services/user.service';
import {Title} from '@angular/platform-browser';


function passwordMatch(c: AbstractControl): { invalid: boolean } {
  if (c.get('userPassword').value !== c.get('confirm_password').value) {
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


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private title: Title
    ) {
  }

  // TODO: Validate form and implement http request
  ngOnInit() {
    this.title.setTitle('Sign Up')
    this.initialUserInfo = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      userSurname: ['', [Validators.required, Validators.minLength(3)]],
      userEmailAddress: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      userPhoneNumber: [''],
      userBirthday: ['', [Validators.required]],
      passwordGroup: this.formBuilder.group({
        userPassword: ['', [Validators.required]],
        confirm_password: ['', [Validators.required]],
      }, {validator: passwordMatch}),
    });
    this.otherUserInfo = this.formBuilder.group({
      userPersonalId: [''],
      addressCountry: ['', [Validators.required]],
      addressCity: ['', [Validators.required]],
      addressStreet: ['', [Validators.required]],
      userLastTravelDate: [''],
      // userProfileImage: [''],
    });
  }


  signUp() {
    let user = {...this.initialUserInfo.value, ...this.otherUserInfo.value, ...this.initialUserInfo.get('passwordGroup').value};
    this.userService.signup(user).subscribe(
      (data => {
        console.log(data);
        debugger;

      }),
      (error => console.log(error))
    );
    this.router.navigate(['/login']);
  }

  back() {
    this.isLeftVisible = true;
  }

  initialUInfo() {
    this.isLeftVisible = false;
    console.log(this.initialUserInfo.value);
  }


}
