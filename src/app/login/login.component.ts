import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BasicAuthenticationService} from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'costas';
  password = '';

  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Router
  // Dependency Injection

  constructor(private router: Router, private basicAuthenticationService: BasicAuthenticationService) {
  }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    // console.log(this.password);

    if (this.basicAuthenticationService.authedicate(this.username, this.password)) {
      this.invalidLogin = false;
      // redirect to welcome page
      this.router.navigate(['welcome', this.username]);
    } else {
      this.invalidLogin = true;
    }
  }

  // if (this.username === 'costas' && this.password === '1234') {
  //   this.invalidLogin = false;
  //   // redirect to welcome page
  //   this.router.navigate(['welcome', this.username]);
  // } else {
  //   this.invalidLogin = true;
  // }
}
