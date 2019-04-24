import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const username = 'stefan';
    const password = 'dummy';
    const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    req = req.clone({
      setHeaders : {
        Authorization: basicAuthHeaderString
      }
    });
    return next.handle(req);
  }
}
