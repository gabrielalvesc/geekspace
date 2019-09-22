import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { GEEK_API } from './geek.api';
import { Items } from '../models/items.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  cart: Cart;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  createShoppingCart(id: number, cart:Cart) {
    return this.http.post(`${GEEK_API}/clients/${id}/create-cart`, cart);
  }

  getShoppingCart(clientId: number) {
    return this.http.get<Cart>(`${GEEK_API}/clients/${clientId}/shopping-cart`).subscribe(res => {
      this.cart = res;
    })
  }

  addItem(clientId:number, item: Items) {
    return this.http.post(`${GEEK_API}/clients/${clientId}/add-item`, item);
  }

  removeItem(clientId: number, itemId:number) {
    return this.http.delete(`${GEEK_API}/clients/${clientId}/remove-item/${itemId}`);
  }

  editShoppingCart(clientId: number, shoppingCart: Cart) {
    return this.http.put(`${GEEK_API}/clients/${clientId}/shopping-cart/edit`, shoppingCart)
  }
  
  // setQuantity(id: number, quantity: number) {
  //   const item = this.items.filter(todo => todo.product.idProduct === id).pop();
  //   item.quantity = quantity;
  //   item.subTotal = item.product.price * item.quantity;
  // }

}
