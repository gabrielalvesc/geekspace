import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { GenericProduct } from 'src/app/models/product.model';
import { Cart } from 'src/app/models/cart.model';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private cartService: ShoppingCartService,
    private favoriteService: FavoritesService,
  ) { }

  ngOnInit() {
    this.productService.getProducts()
  }

  get products(): GenericProduct[] {
    return this.productService.products;
  }

  // addItem(item: Product) {
  //   let itemCart = new Cart(item, 1, item.price * 1);
  //   // this.cartService.addItem(itemCart);
  // }

  // addFavorite(product: Product) {
  //   var heart = document.getElementById(String(product.idProduct));
  //   if (heart.classList.contains('far')) {
  //     heart.classList.add('fas');
  //     heart.classList.remove('far');
  //     this.favoriteService.addFavorite(product);
  //   } else if (heart.classList.contains('fas')) {
  //     heart.classList.add('far');
  //     heart.classList.remove('fas');
  //     this.favoriteService.removeFavorite(product.idProduct);
  //   }
  // }


}
