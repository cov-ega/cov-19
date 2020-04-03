import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {APP_CONFIG, IAppConfig} from '../../app.config';

const user = {
  id: 1,

  user_name: 'Ard',
  user_surname: 'Ademi',
  user_email_address: 'ardademi96@gmail.com',
  user_password: 'dadsadsa',
  confirm_password: 'dasdasda',
  user_birthday: new Date(),
  user_phone_number: '045580638',


  user_personal_id: '1176291377',
  address_street: 'Preng Doci',
  address_city: 'Prishtine',
  address_country: 'Kosova',
  user_profile_image: '../../../assets/profile-image.png',
  user_last_travel_date: new Date(),
  user_terms_agreement: true,

};

@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {
  }

  getUserData() {

    return user;
  }

  login(userData) {
    this.http.post(this.config.apiEndpoint + 'api/Authentication/tokens/users/generate', {
      applicationToken : this.config.applicationToken,
      emailAddress: userData.userEmailAddress,
      password: userData.userPassword,
      dateLogin: new Date().toISOString()
    }).subscribe({
      next: data => {
        this.authService.login(data);
        this.router.navigate(['user/dashboard']);
      },
      error: error => {
        alert(error.title + ' ' + error.status);
      }
    });


    // this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe({
    //   next: data => console.log(data),
    //   error: error => console.error('There was an error!', error)
    // });
  }


  signup(userData) {
    console.log(userData);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url: string) {
    if (this.authService.isLoggedInUser()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }


}
