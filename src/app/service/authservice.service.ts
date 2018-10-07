import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  login(login){
    localStorage.setItem('token',"djdjdjdjdjdjddjdjdjdjd")
  }

  isloggedIn(){
    let token = localStorage.getItem('token');
    if(!token) return false;

    return true;
  }

  logout()
  {
    localStorage.removeItem('token');

  }
}
