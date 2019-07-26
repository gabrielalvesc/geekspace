import { Injectable } from '@angular/core';
import { Sale } from '../models/sale.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  sales: Sale[] = []

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  newSale(sale: Sale) {
    let a:number = this.sales.length;
    this.sales.push(sale)
    let b:number = this.sales.length;
    if (b > a) {
      // let user:User = this.userService.getByEmail(sale.user.email);
      // user.favorites
      this.router.navigate(['/confirmacao']);
    } else {
      this.toastr.error('Não foi possível realizar sua compra, entre em contato conosco', 'Compra não realizada')
    }
  }

  getSales() {
    return this.sales
  }
}
