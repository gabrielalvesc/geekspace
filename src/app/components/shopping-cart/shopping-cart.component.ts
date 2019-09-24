import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
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

  total: number = 0;
  cart: Cart;
  items: Items[];
  quantidade: number;

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {

    this.items = [];
    
    this.getItems();
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("changes: "+changes)
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   if (this.items.length == 0) {
  //     this.total = 0
  //   } else {
  //     this.getTotal(this.items);
  //   }
  // }

  getItems() {
    this.shoppingCartService.getShoppingCart(this.authService.getUser()).subscribe(res => {
      this.cart = res;
      this.items = this.cart.items;
      this.shoppingCartService.getTotalItems();
      this.getTotal(res.items);
      console.log(res.items);
    });
  }

  removeItem(itemId: number) {
    return this.shoppingCartService.removeItem(this.authService.getUser(), itemId).subscribe(res => {
      this.shoppingCartService.getTotalItems();
      this.ngOnInit();
    });
  }
  
  getTotal (lista:Items[]) {
    this.total = 0;
    lista.forEach(e => {
      this.total += (e.product.price * e.quantity);      
    });
    console.log("total"+this.total);
  }

  increaseQuantity(itemId:number){
    this.shoppingCartService.increaseQuantity(this.authService.getUser(), itemId).subscribe(res => {
      this.getItems();
      this.getTotal(this.items);
    })
  }

  decreaseQuantity(itemId:number){
    this.shoppingCartService.decreaseQuantity(this.authService.getUser(), itemId).subscribe(res => {
      this.getItems();
      this.getTotal(this.items);
    })
  }

}
