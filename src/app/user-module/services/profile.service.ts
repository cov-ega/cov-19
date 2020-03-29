import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient, private userService: UserService) {
  }

  // TODO:Implement Profile Service
  getUserProfileInfo() {
    return this.userService.getUserData();
  }

  editProfileInfo() {
  }
}
