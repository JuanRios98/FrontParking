import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginRequest } from '../models/login.module';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private apiBase = environment.apiUrl + 'Auth/login';

  constructor(private _http: HttpClient) { }

  login(loginRequest: loginRequest): Observable<any>{
    return this._http.post<any>(this.apiBase, loginRequest);
  }

}
