import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/models/product.model';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  products: any[];

  constructor(
    private productService: ProductService,
    private cartService: ShoppingCartService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => {
        this.products = products;
        console.log(this.products);
      }
    );
  }

  addItem(item: Product) {
    this.cartService.addItem(item);
  }

}
