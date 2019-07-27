import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: Product[] = [

  ]

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
    // let user:User = this.userService.getByEmail(this.authService.getUser())
    // this.favorites = user.favorites
   }

  getFavorites() {
    return this.favorites;
  }

  addFavorite(product: Product) {
    this.favorites.push(product);
    let user:User = this.userService.getByEmail(this.authService.getUser())
    user.favorites = this.favorites
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
