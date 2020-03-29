import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const nearByUserList = [
  {
    id: 1,
    name: 'Ard',
    surname: 'Ademi',
    username: 'ArdAdemi_ks',
    email_address: 'ardademi96@gmail.com',
    phone_number: '045580638',
    personal_id: '1176291377',
    street: 'Preng Doci',
    city: 'Prishtine',
    zip: 10000,
    country: 'Kosova',
    profile_image: '../../../assets/user_placeholder.png'
  },
  {
    id: 2,
    name: 'John',
    surname: 'Ademi',
    username: 'ArdAdemi_ks',
    email_address: 'ardademi96@gmail.com',
    phone_number: '045580638',
    personal_id: '1176291377',
    street: 'Preng Doci',
    city: 'Prishtine',
    zip: 10000,
    country: 'Kosova',
    profile_image: '../../../assets/user_placeholder.png'
  },
  {
    id: 3,
    name: 'Jim',
    surname: 'Ademi',
    username: 'ArdAdemi_ks',
    email_address: 'ardademi96@gmail.com',
    phone_number: '045580638',
    personal_id: '1176291377',
    street: 'Preng Doci',
    city: 'Prishtine',
    zip: 10000,
    country: 'Kosova',
    profile_image: '../../../assets/user_placeholder.png'
  },
  {
    id: 4,
    name: 'Alex',
    surname: 'Ademi',
    username: 'ArdAdemi_ks',
    email_address: 'ardademi96@gmail.com',
    phone_number: '045580638',
    personal_id: '1176291377',
    street: 'Preng Doci',
    city: 'Prishtine',
    zip: 10000,
    country: 'Kosova',
    profile_image: '../../../assets/user_placeholder.png'
  }
];

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  // TODO:Implement Dashboard Service
  getNearbyUserList() {
    return nearByUserList;
  }
  addConnectionById(id) {
    console.log('Added User' + id);
  }
  refuseUserById(id) {
    console.log('Added User' + id);
  }
}
