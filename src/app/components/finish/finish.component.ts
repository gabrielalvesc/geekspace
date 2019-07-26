import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/models/product.model';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  item:Cart;
  total: number;

  constructor(
    private cartService: ShoppingCartService
  ) {
    this.total = this.cartService.total();
  }


  ngOnInit() {
    this.itens.forEach(e => {
      this.item = e
      return;
    });
  }

  get itens() {
    return this.cartService.items
  }



}
