import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../core/models/user.model';
import {APP_CONFIG, IAppConfig} from '../../app.config';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {
  }

  getNearbyUserList(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.config.apiEndpoint + 'api/v1/users/' + localStorage.getItem('userId') + '/feeds');
  }

  addConnection(id) {
    console.log('Added User' + id);
  }

  refuseUser(id) {
    console.log('Added User' + id);
  }

  addFamilyMember(id) {
    console.log('Family Member' + id);
  }
}
