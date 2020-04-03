import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../core/services/user.service';
import {IUser} from '../../core/models/user.model';
import {Observable} from 'rxjs';
import {APP_CONFIG, IAppConfig} from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user: IUser;

  constructor(
    private http: HttpClient,
    private userService: UserService,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {
  }

  getUserProfileInfo(): Observable<IUser> {
    return this.http.get<IUser>(this.config.apiEndpoint + 'api/v1/users/' + localStorage.getItem('userId'));
  }

  getUserAddress(addressId: number): Observable<any> {
    return this.http.get(this.config.apiEndpoint + 'api/v1/Addresses/' + addressId);
  }

  updateUserProfile(user): Observable<any>  {
    return this.http.patch<any>(this.config.apiEndpoint + 'api/v1/Users/' + localStorage.getItem('userId'),
      {userId: Number(localStorage.getItem('userId')), ...user});
  }
  updateImageProfile(fileUpload): Observable<any> {
    return  this.http.post(this.config.apiEndpoint +  '', fileUpload);
  }

  editProfileInfo() {
  }
}
