import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedUser:string;

  constructor() { }

  // Kollar/hämtar vilken användare som är inloggad
  checkIfLoggedIn() {
    return localStorage.getItem('user');
  }

  // Sparar användaren som loggar in
  public login(user) {
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }

  // Tar bort den sparade användaren
  public logout() {
    localStorage.clear();
    this.loggedUser = undefined;
  }
}
