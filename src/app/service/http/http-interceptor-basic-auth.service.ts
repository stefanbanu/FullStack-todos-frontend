import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BasicAuthenticationService} from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthenticationService: BasicAuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // const username = 'stefan';
    // const password = 'dummy';
    // const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    const basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    const authenticatedUser = this.basicAuthenticationService.getAuthenticatedUser();
    if (basicAuthHeaderString && authenticatedUser) {

      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(req);
  }
}
