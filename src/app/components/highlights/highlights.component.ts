import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/models/product.model';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private cartService: ShoppingCartService,
  ) { }

  ngOnInit() {
    // this.getProducts();
  }

  get products(): Product[] {
    return this.productService.getProducts()
  }

  addItem(item: Product) {
    let itemCart = new Cart(item, 1, item.price * 1);
    this.cartService.addItem(itemCart);
  }



}
