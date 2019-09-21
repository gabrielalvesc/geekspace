import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { GenericProduct } from 'src/app/models/product.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  filter: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private favoriteService: FavoritesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.filter = params.filter;
    });
    // tslint:disable-next-line: no-unused-expression
    this.products;
  }

  get products() {
    return this.productService.getByFilter(this.filter);
  }

  addFavorite(product: GenericProduct) {
    const heart = document.getElementById('heart');

    if (heart.classList.contains('far')) {
      heart.classList.add('fas');
      heart.classList.remove('far');
      // this.favoriteService.addFavorite(product);
    } else if (heart.classList.contains('fas')) {
      heart.classList.add('far');
      heart.classList.remove('fas');
      // this.favoriteService.removeFavorite(product.id);
    }
  }

  setType(type: string) {
    this.filter = type;
    // tslint:disable-next-line: no-unused-expression
    this.products;
  }

}
