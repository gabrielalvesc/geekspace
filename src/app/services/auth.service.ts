import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  name: string = "admin";
  password: string = "password";

  constructor() { }

  login (name: string, password: string){
    if (this.name == name && this.password == password) {
      localStorage.setItem('user', name);
    }
    else {
      console.log("Não logou")
    }
  }

  getUser() {
    var user = localStorage.getItem('user');
    console.log(user);
  }
}
