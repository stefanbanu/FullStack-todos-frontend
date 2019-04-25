import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URL} from '../../app.constants';


export class HelloWorldBean {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private httpClient: HttpClient) {
  }

  executeHelloWorldBeanService() {
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldBeanServiceWithPathVariable(name) {
    // const basicAuthHeaderString = this.createBasicAuthHttpHeader();
    //
    // const header = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    //   });
    return this.httpClient.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`
      // {headers : header}
      );
  }
  //
  // createBasicAuthHttpHeader() {
  //   const username = 'stefan';
  //   const password = 'dummy';
  //   return 'Basic ' + window.btoa(username + ':' + password);
  // }

  // Access to XMLHttpRequest at 'http://localhost:8080/users/stefan/todos'
  // from origin 'http://localhost:4200' has been blocked by CORS policy:
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.
}
