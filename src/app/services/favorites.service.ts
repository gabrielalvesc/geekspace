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
  }
}
