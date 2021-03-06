import { Injectable } from '@angular/core';
import { Cart } from '../models/cart.model';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { GEEK_API } from './geek.api';
import { Items } from '../models/items.model';
import { Total } from '../models/total.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  cart: Cart;
  totalItems: number

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.totalItems = 0; 
    this.getTotalItems()
  }

  createShoppingCart(id: number, cart:Cart) {
    return this.http.post(`${GEEK_API}/clients/${id}/create-cart`, cart);
  }

  getShoppingCart(clientId: number) {
    return this.http.get<Cart>(`${GEEK_API}/clients/${clientId}/shopping-cart`);
  }

  addItem(clientId:number, item: Items) {    return this.http.post(`${GEEK_API}/clients/${clientId}/add-item`, item);

  }

  removeItem(clientId: number, itemId:number) {
    return this.http.delete(`${GEEK_API}/clients/${clientId}/remove-item/${itemId}`);
  }

  editShoppingCart(clientId: number, shoppingCart: Cart) {
    console.log(this.cart)
    return this.http.put(`${GEEK_API}/clients/${clientId}/shopping-cart/edit`, shoppingCart)
  }

  getTotalItems(){
    return this.http.get<Cart>(`${GEEK_API}/clients/${this.authService.getUser()}/shopping-cart`).subscribe(res => {
      this.totalItems = res.items.length;
    })
  }

  decreaseQuantity(clientId:number, itemId: number){
    return this.http.put(`${GEEK_API}/clients/${clientId}/decrease-quantity/${itemId}`, null)
  }

  increaseQuantity(clientId:number, itemId: number){
    return this.http.put(`${GEEK_API}/clients/${clientId}/increase-quantity/${itemId}`, null)
  }

  setTotal(clientId:number, shoppingcartId:number, total:Total){
    console.log(clientId, shoppingcartId, total)
    return this.http.put(`${GEEK_API}/clients/${clientId}/shopping-cart/total`, total)
  }


  
  
  // setQuantity(id: number, quantity: number) {
  //   const item = this.items.filter(todo => todo.product.idProduct === id).pop();
  //   item.quantity = quantity;
  //   item.subTotal = item.product.price * item.quantity;
  // }

}
