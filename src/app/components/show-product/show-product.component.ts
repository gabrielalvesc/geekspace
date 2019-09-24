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


@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  id: number;
  product: GenericProduct;
  quantity = 1;
  favoritos: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: ShoppingCartService,
    private authService: AuthService,
    private favoriteService: FavoritesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => this.loadProduct(+params.id))).subscribe(res => {

      });
    this.favoriteService.getFavorites(this.authService.getUser()).subscribe(res => {
      console.log(res);
      res.forEach(e => {
        if (this.product.id == e.id) {
          const heart = document.getElementById('heart');
          heart.classList.add('fas');
          heart.classList.remove('far');
        } else {
          const heart = document.getElementById('heart');
          heart.classList.add('far');
          heart.classList.remove('fas');
        }
      });
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

  addOrRemoveFavorite() {
    this.favoriteService.getFavorites(this.authService.getUser()).subscribe(res => {
      let bool: boolean = false;
      res.forEach(e => {
        if (e.id == this.product.id) {
          bool = true;
        }
      });
      if (bool) {
        this.favoriteService.removeFavorite(this.product.id);
        const heart = document.getElementById('heart');
        heart.classList.add('far');
        heart.classList.remove('fas');
      } else {
        this.favoriteService.addFavorite(this.product.id);
        const heart = document.getElementById('heart');
        heart.classList.add('fas');
        heart.classList.remove('far');
      }
    })
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
    if(this.authService.isLoggedIn()){
      let item = new Items(this.product, this.quantity, this.product.price * this.quantity, 0);
      this.cartService.addItem(this.authService.getUser(), item).subscribe(res => {
        console.log(res)
        this.router.navigate(['/finalizar-pedido']);
      }, error => {
        console.log(error)
      })
    }
  }

  setQuantity() {
    // this.cartService.setQuantity(this.product.idProduct, this.quantity);
  }

}
