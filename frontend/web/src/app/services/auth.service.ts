import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_LOGIN, URL_REGISTER } from '../shared/constants/url.constants';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(URL_LOGIN, { username, password });
  }

  register(username: string, password: string) {
    return this.http.post(URL_REGISTER, { username, password });
  }

}
