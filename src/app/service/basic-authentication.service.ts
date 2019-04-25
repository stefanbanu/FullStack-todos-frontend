import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HelloWorldBean} from './data/welcome-data.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticaterUser');
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
    return sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser');
    sessionStorage.removeItem('token');
  }

  executeAuthenticationService(username, password) {
  const basicAuthHeaderString =   'Basic ' + window.btoa(username + ':' + password);

    const header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    });
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,
      {headers : header}).pipe(
        map(
          data => {
            sessionStorage.setItem('authenticaterUser', username);
            sessionStorage.setItem('token', basicAuthHeaderString);
            return data;
          }
        )
    );
  }

}

export class AuthenticationBean {
  constructor(public message: string) {}
}
