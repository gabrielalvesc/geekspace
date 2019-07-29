import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Store } from '../models/store.model';
import { Cart } from '../models/cart.model';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items: Cart[] = [

  ];


  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    private authService: AuthService
  ) {

   }

  addItem(item: Cart) {
    let index = this.items.findIndex(val => val.product.idProduct == item.product.idProduct);
    if (index < 0) {
      this.items.push(item);
    }
  }

  removeItem(item: Cart) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    let total = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.items.length; i++) {
      total += (this.items[i].product.price * this.items[i].quantity);
    }
    return total;
  }

  setQuantity(id: number, quantity:number) {
    let item = this.items.filter(todo => todo.product.idProduct === id).pop()
    item.quantity = quantity;
    item.subTotal = item.product.price * item.quantity
  }

  // cartItemUser(email: string){
  //   let user:User = this.userService.getByEmail(email);
  //   user.cartItems = this.items;
  // }

}
