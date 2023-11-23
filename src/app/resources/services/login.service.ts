import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/RequestLogin';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ResponseLogin } from '../models/ResponseLogin';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public doLogin(requestLogin: RequestLogin) : Observable<ResponseLogin> {
    return this.httpClient.post<ResponseLogin>(
      'http://localhost:8080/api/login',
      requestLogin )
      .pipe(tap((loginresponse)=> this.authService.loginResponse = loginresponse));
  }

}
