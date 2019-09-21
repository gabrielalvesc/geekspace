import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GEEK_API } from './geek.api';
import { userStorage } from '../models/user-storage.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userStorage: userStorage

  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  });

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient
  ) {

  }

  login(email: string, password: string) {
    return this.http.post(`${GEEK_API}/login`, JSON.stringify({ email, password }), { headers: this.headers }).pipe(map((response: Response) => localStorage.setItem('data', JSON.stringify(response))));
  }

  getUser() {
    this.userStorage = JSON.parse(localStorage.getItem('data'))
    if (this.userStorage != null) {
      return this.userStorage.login
    } else {
      return null;
    }
  }

  getRoles() {
    this.userStorage = JSON.parse(localStorage.getItem('data'))
    if (this.userStorage != null) {
      console.log(this.userStorage.roles)
      return this.userStorage.roles
    } else {
      return null;
    }
  }

  getToken() {
    this.userStorage = JSON.parse(localStorage.getItem('data'))
    if (this.userStorage != null) {
      return this.userStorage.accessToken
    } else {
      return null;
    }
  }

  isLoggedIn(): boolean {
    if (this.getToken() != null) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
  }
}
