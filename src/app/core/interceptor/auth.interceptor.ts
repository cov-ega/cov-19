import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jsonReq: HttpRequest<any> = req.clone({
      setHeaders: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true', Authorization: 'dasdasdas' + localStorage.getItem('access_token')}}
    );
    return next.handle(jsonReq);
    console.log('interceptor activated');
  }

}
