import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  isFeed =  true;
  index: number;
  user = [{
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
    is_loading: false,
    has_been_changed: false,
    change_message: 'Ju keni thene qe keni takuar Filan Fistekun'

  },
    {
      id: 2,
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
      is_loading: false,
      has_been_changed: false,
      change_message: 'Ju keni thene qe keni takuar Filan Fistekun',
      response_color: ''

    }];
  constructor() { }

  ngOnInit() {
  }
  isFamilyMember(userId) {
    this.index = this.user.findIndex(obj => obj.id === userId)
    this.user[this.index].is_loading = true;
    setTimeout(() => {
      this.user[this.index].is_loading = false;
      this.user[this.index].has_been_changed = true;
      this.user[this.index].response_color = '#a2c9aa';
      this.user[this.index].change_message = 'Ky user eshte anetar i familjes tuaj';
    }, 1000);
  }
  hasMeetUser(userId) {
    this.index = this.user.findIndex(obj => obj.id === userId)
    this.user[this.index].is_loading = true;
    setTimeout(() => {
      this.user[this.index].is_loading = false;
      this.user[this.index].has_been_changed = true;
      this.user[this.index].response_color = '#909eb4';
      this.user[this.index].change_message = 'Ju keni thene qe keni takuar Filan Fistekun';
    }, 1000);
  }
  hasNotMeetUser(userId) {
    this.index = this.user.findIndex(obj => obj.id === userId)
    this.user[this.index].is_loading = true;
    setTimeout(() => {
      this.user[this.index].is_loading = false;
      this.user[this.index].has_been_changed = true;
      this.user[this.index].response_color = '#b06262';
      this.user[this.index].change_message = 'Ju keni thene qe nuk keni takuar Filan Fistekun';
    }, 1000);
  }

}
