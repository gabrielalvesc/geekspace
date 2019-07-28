import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: Product[] = [

  ]

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private toastr: ToastrService
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
    this.favorites = this.favorites
    .filter(todo => todo.idProduct !== id);
    this.toastr.info("Produto removido da sua lista de favoritos", "Produto removido")
  }
}
