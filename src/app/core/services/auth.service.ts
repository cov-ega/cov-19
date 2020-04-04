import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());


  /**
   *
   * @returns {Observable<T>}
   */
  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  //TODO: verify implementation of this method
  isLoggedInUser() {
    return this.isLoginSubject.getValue();
  }


  /**
   *  Login the user then tell all the subscribers about the new status
   */
  login(user): void {
    localStorage.setItem('token', 'Bearer ' + user.token);
    localStorage.setItem('userId', user.userId);
    this.isLoginSubject.next(true);

  }

  /**
   * Log out the user then tell all the subscribers about the new status
   */
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.isLoginSubject.next(false);
  }

  /**
   * if we have token the user is loggedIn
   * @returns {boolean}
   */
  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }


}
