import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Constants} from '../../constants';

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
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
  }

  getUserData() {

    return user;
  }

  login(userData) {

    debugger;

    this.http.post('https://api-anticov19.azurewebsites.net/api/Authentication/tokens/users/generate', {
      applicationToken: 'AntiCovClient',
      userEmailAddress: 'eneshoxha@outlook.com',
      userPassword: '12345678',
      dateLogin: '2020-04-02T14:47:55.938Z'
    }).subscribe({
      next: data => console.log(data),
      error: error => console.error('There was an error!', error)
    });
    //
    //
    // this.http.get('http://api-anticov19.azurewebsites.net/api/v1/Users').subscribe({
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
