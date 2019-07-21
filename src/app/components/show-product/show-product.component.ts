import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

import { switchMap, debounceTime, catchError } from 'rxjs/operators';
import { FavoritesService } from 'src/app/services/favorites.service';


@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit, AfterViewInit {

  // public product:Product;
  id: number;
  product: Product;
  quantity: number = 1;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private elementRef: ElementRef,
    private favoriteService: FavoritesService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(switchMap((params: Params) => this.loadBook(+params['id']))).subscribe(res => {
        this.product = res;
      })
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F5F5F5';
  }

  loadBook(id: number): Promise<Product> {
    return new Promise((resolve) => resolve(this.productService.getById(id)));
  }

  less(){
    if (this.quantity == 1) {
      this.quantity = 1;
    } else {
      this.quantity--;
    }
  }

  more() {
    if(this.quantity == this.product.stock) {
      this.quantity = this.product.stock
    } else {
      this.quantity++;
    }
  }

  get subTotal(): number {
    return this.product.price * this.quantity;
  }

  addFavorite() {
    var heart = document.getElementById("heart")
    if(heart.classList.contains('far')) {
      heart.classList.add('fas');
      heart.classList.remove('far');
      this.favoriteService.addFavorite(this.product);
      this.router.navigate(['dashboard/meus-favoritos'])
    } else if (heart.classList.contains('fas')) {
      heart.classList.add('far');
      heart.classList.remove('fas');
      this.favoriteService.removeFavorite(this.product.idProduct);
    }
  }

}
