import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const user = {
  id: 1,
  name: 'Ard',
  surname: 'Ademi',
  password: 'dadsadsa',
  email_address: 'ardademi96@gmail.com',


  phone_number: '045580638',
  personal_id: '1176291377',
  street: 'Preng Doci',
  city: 'Prishtine',
  // zip: 10000,
  country: 'Kosova',
  profile_image: '../../../assets/user_placeholder.png'
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


}
