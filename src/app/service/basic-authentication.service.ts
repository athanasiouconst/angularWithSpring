import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor() {
  }

  authedicate(username, password) {
    if (username === 'costas' && password === '1234') {
      return true;
    }
    return false;
  }
}
