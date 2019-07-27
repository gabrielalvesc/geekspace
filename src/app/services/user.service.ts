import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Cart } from '../models/cart.model';
import { Product } from '../models/product.model';
import { Sale } from '../models/sale.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    new User("admin@geek.com", "admin123", "Admin", "Geek", "admin", new Array<Cart>(), new Array<Product>(), new Array<Sale>()),
    new User("rvillar@gmail.com", "rvillar123", "Rodrigo", "Villar", "Cliente", new Array<Cart>(), new Array<Product>(), new Array<Sale>(),2)
  ];
  id: number = 500;

  constructor(
    private toastr: ToastrService,
  ) { }

  addUser(user: User){
    let index = this.users.findIndex(val => val.email == user.email);
    if (index < 0) {
      user.idUser = this.id;
      this.users.push(user);
      this.id++;
    } else {
      this.toastr.error('Esqueceu sua senha? Entre em contato conosco', 'Usuário já existe')
    }

  }

  getByEmail(email: string):User {
    return this.users.filter(todo => todo.email === email).pop()
  }

  getRole(email: string){
    let user:User = this.getByEmail(email);
    return user.role
  }
}

