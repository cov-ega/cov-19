import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../core/services/user.service';
import {AuthService} from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;

  // TODO: Validate Form and make http request
  constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService, private authService: AuthService) {
  }

  ngOnInit() {
    this.userLoginForm = this.formBuilder.group({
      user_email_address: ['', [Validators.required, Validators.email , Validators.minLength(3)]],
      user_password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  login() {
    this.authService.login(this.userLoginForm.value)
    this.userService.login(this.userLoginForm.value);
    this.router.navigateByUrl('/user/dashboard');
  }

}
