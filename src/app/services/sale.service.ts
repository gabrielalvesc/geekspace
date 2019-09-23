import { Injectable } from '@angular/core';
import { Sale } from '../models/sale.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { GEEK_API } from './geek.api';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  sales: Sale[] = []

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private http: HttpClient
  ) { }

  newSale(sale: Sale, idCarrinho:number) {
    return this.http.post(`${GEEK_API}/sales/new/${idCarrinho}`, sale)
  }

  getSales() {
    return JSON.stringify(this.sales);
  }

  
}
