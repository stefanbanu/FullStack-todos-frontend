import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'stefan'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  // Angular.give me router
  // dependency injection

  constructor(private router: Router) {}

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    if (this.username === 'stefan' && this.password === 'dummy') {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}



