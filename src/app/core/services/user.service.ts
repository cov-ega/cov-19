import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
  user_profile_image: '../../../assets/user_placeholder.png',
  user_last_travel_date: new Date(),
  user_terms_agreement: true,

};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUserData() {
    return user;
  }

  login(userData) {
    console.log(userData);
  }
  signup(userData) {
    console.log(userData)
  }


}
