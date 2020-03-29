import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {
  }


}
