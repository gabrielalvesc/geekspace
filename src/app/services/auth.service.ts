import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  login (email: string, password: string){
    let user:User = this.userService.getByEmail(email);
    if(user != null) {
      if (user.password == password) {
        localStorage.setItem('user', email)
        this.router.navigate(['/dashboard'])
      } else {
        this.toastr.error('Acesso negado', 'Tente novamente!')
      }
    } else {
      this.toastr.error('Usuário inválido', 'Tente novamente!')
    }
  }

  getUser() {
    return localStorage.getItem('user');
  }

  isLoggedIn():boolean {
    if(this.getUser() != null) {
      return true;
    } else {
      return false;
    }
  }

  logout(){
    localStorage.clear();
  }
}
