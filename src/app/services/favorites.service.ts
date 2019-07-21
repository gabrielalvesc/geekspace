import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: Product[] = [

  ]

  constructor() { }

  getFavorites() {
    return this.favorites;
  }

  addFavorite(product: Product) {
    this.favorites.push(product);
    console.log(this.favorites);
  }

  removeFavorite(id:number) {
    this.favorites.forEach(e => {
      if (e.idProduct === id) {
        var index = this.favorites.indexOf(e)
        this.favorites.slice(index, 1);
      }
    });
  }
}
