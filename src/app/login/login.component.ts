import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;

  // TODO: Validate Form and make http request
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.userLoginForm = this.formBuilder.group({
      userEmailAddress: ['', [Validators.required, Validators.email , Validators.minLength(3)]],
      userPassword: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  login() {
    this.userService.login(this.userLoginForm.value);
  }

}
