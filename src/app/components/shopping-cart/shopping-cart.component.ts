import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Cart } from 'src/app/models/cart.model';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent implements OnInit {

  valorTotal: number;
  valorFrete = 52.85;

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
  }

  // get items(): Cart[] {
  //   return this.shoppingCartService.items;
  // }

  // total(): number {
  //   return this.shoppingCartService.total();
  // }

  // removeItem(item: Cart) {
  //   return this.shoppingCartService.removeItem(item);
  // }

  // addItem(item: any) {
  //   this.shoppingCartService.addItem(item);
  // }

  // quantity(qtd: any, id: any) {
  //   this.shoppingCartService.setQuantity(id, qtd);
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
