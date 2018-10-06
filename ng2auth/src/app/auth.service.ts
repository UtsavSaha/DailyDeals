import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    // Check if current date is before token
    // expiration and user is signed in locally
    return true;
  }

}
