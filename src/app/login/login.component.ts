import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;


  constructor(private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.userLoginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      userPassword: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  login() {
    console.log(this.userLoginForm);
    // this.router.navigate(['/dashboard']);
  }

}
