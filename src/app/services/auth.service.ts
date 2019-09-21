import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GEEK_API } from './geek.api';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
    // let user: User = this.userService.getByEmail(email);
    // if (user != null) {
    //   if (user.password == password) {
    //     localStorage.setItem('user', email)
    //     this.router.navigate(['/dashboard'])
    //   } else {
    //     this.toastr.error('Acesso negado', 'Tente novamente!')
    //   }
    // } else {
    //   this.toastr.error('Usuário inválido', 'Tente novamente!')
    // }

    // tslint:disable-next-line: max-line-length
    return this.http.post(`${GEEK_API}/login`, JSON.stringify({ email, password }), { headers: this.headers }).pipe(map((response: Response) => localStorage.setItem('data', JSON.stringify(response))));

  }

  getUser() {
    return localStorage.getItem('user');
  }

  isLoggedIn(): boolean {
    if (this.getUser() != null) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
  }
}
