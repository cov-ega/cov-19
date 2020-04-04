import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../../core/models/user.model';
import {APP_CONFIG, IAppConfig} from '../../app.config';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  userId = localStorage.getItem('userId');
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {
  }

  getNearbyUserList(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.config.apiEndpoint + 'api/v1/users/' + localStorage.getItem('userId') + '/feeds');
  }

  addConnection(id): Observable<any> {
    debugger;
    return this.http.post(this.config.apiEndpoint + 'api/v1/users/' +  localStorage.getItem('userId')  + '/connectionRequests', {
      connectionRequestUserIdSender: Number(this.userId),
      connectionRequestUserIdReceiver: id,
      connectionRequestConnectionStatusId: 4
    });
  }

  refuseUser(id) {
    // this.http.post('api/v1/users/' +  localStorage.getItem('userId')  + '/connectionRequests',{
    //   connectionRequestUserIdSender: localStorage.getItem('userId'),
    //   connectionRequestUserIdReceiver: id,
    //   connectionRequestConnectionStatusId: 0
    // });
  }

  addFamilyMember(id): Observable<any> {
    return this.http.post(this.config.apiEndpoint + 'api/v1/users/' +  localStorage.getItem('userId')  + '/connectionRequests', {
      connectionRequestUserIdSender: Number(this.userId),
      connectionRequestUserIdReceiver: id,
      connectionRequestConnectionStatusId: 3
    });
  }
}
