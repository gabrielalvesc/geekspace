import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { GenericProduct } from 'src/app/models/product.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

import { switchMap, debounceTime, catchError } from 'rxjs/operators';
import { FavoritesService } from 'src/app/services/favorites.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Cart } from 'src/app/models/cart.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  id: number;
  product: GenericProduct;
  quantity = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => this.loadProduct(+params.id))).subscribe(res => {
        
      });
  }

  loadProduct(id: number): Promise<any> {
    return new Promise((resolve) => resolve(this.productService.getById(id).subscribe(res =>{
      this.product = res;
    })));
  }

  less() {
    if (this.quantity === 1) {
      this.quantity = 1;
      this.setQuantity();
    } else {
      this.quantity--;
      this.setQuantity();
    }
  }

  more() {
    if (this.quantity === this.product.quantity) {
      this.quantity = this.product.quantity;
      this.setQuantity();
    } else {
      this.quantity++;
      this.setQuantity();
    }
  }

  get subTotal(): number {
    return this.product.price * this.quantity;
  }

  addFavorite() {
    const heart = document.getElementById('heart');
    if (heart.classList.contains('far')) {
      heart.classList.add('fas');
      heart.classList.remove('far');
      // this.favoriteService.addFavorite(this.product);
    } else if (heart.classList.contains('fas')) {
      heart.classList.add('far');
      heart.classList.remove('fas');
      // this.favoriteService.removeFavorite(this.product.id);
    }
  }

  addCart() {
    const item = new Cart(this.product, this.quantity, this.product.price * this.quantity);
    // this.cartService.addItem(item);
    this.router.navigate(['/carrinho']);
  }

  buy() {
    const item = new Cart(this.product, this.quantity, this.product.price * this.quantity);
    // this.cartService.addItem(item);
    this.router.navigate(['/finalizar-pedido']);
  }

  setQuantity() {
    // this.cartService.setQuantity(this.product.idProduct, this.quantity);
  }

}
