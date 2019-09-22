import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { GenericProduct } from 'src/app/models/product.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

import { switchMap, debounceTime, catchError } from 'rxjs/operators';
import { FavoritesService } from 'src/app/services/favorites.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Cart } from 'src/app/models/cart.model';
import { ToastrService } from 'ngx-toastr';
import { Items } from 'src/app/models/items.model';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';


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
    private cartService: ShoppingCartService,
    private authService: AuthService,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => this.loadProduct(+params.id))).subscribe(res => {

      });
  }

  loadProduct(id: number): Promise<any> {
    return new Promise((resolve) => resolve(this.productService.getById(id).subscribe(res => {
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
    if (this.authService.isLoggedIn()) {
      let item = new Items(this.product, this.quantity, this.product.price * this.quantity, 0);

      this.cartService.addItem(this.authService.getUser(), item).subscribe(res => {
        this.toastr.info('Produto adicionado ao carrinho', 'Adicionado com sucesso');
        this.router.navigate(['/carrinho']);
      })
     
    } else {
      this.router.navigate(['/conta']);
    }

  }

  buy() {
    // const item = new Cart(this.product, this.quantity, this.product.price * this.quantity);
    // this.cartService.addItem(item);
    this.router.navigate(['/finalizar-pedido']);
  }

  setQuantity() {
    // this.cartService.setQuantity(this.product.idProduct, this.quantity);
  }

}
