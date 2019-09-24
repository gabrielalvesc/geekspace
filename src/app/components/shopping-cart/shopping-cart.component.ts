import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Cart } from 'src/app/models/cart.model';
import { AuthService } from 'src/app/services/auth.service';
import { Items } from 'src/app/models/items.model';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  total: number;
  cart: Cart;
  items: Items[];

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.getItems();    
  }

  getItems() {
    this.shoppingCartService.getShoppingCart(this.authService.getUser()).subscribe(res => {
      this.cart = res;
      this.items = this.cart.items;
      this.shoppingCartService.getTotalItems();
    });
  }

  removeItem(itemId: number) {
    return this.shoppingCartService.removeItem(this.authService.getUser(), itemId).subscribe(res => {
      this.shoppingCartService.getTotalItems();
      this.ngOnInit();
    });
  }

  // addItem(item: any) {
  //   this.shoppingCartService.addItem(item);
  // }

  // get total() {
  //   return this.shoppingCartService.total();
  // }
  /*
  frete(frete:any){
    if(frete == 'pac') {
      this.valorFrete = 52.85;
    } else if (frete == 'sedex') {
      this.valorFrete = 72.85;
    }
  }*/


}
