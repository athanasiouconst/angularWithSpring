import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor() {
  }

  authedicate(username, password) {
    // console.log('before' + this.isUserLoggedIn());
    if (username === 'costas' && password === '1234') {
      sessionStorage.setItem('authedicatedUser', username);
      // console.log('after' + this.isUserLoggedIn());

      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authedicatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authedicatedUser');
  }
}
