import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: Product[] = []

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {
    // let user:User = this.userService.getByEmail(this.authService.getUser())
    // this.favorites = user.favorites
   }

  getFavorites() {
    return this.favorites;
  }

  addFavorite(product: Product) {
    if(this.authService.isLoggedIn()) {
      this.favorites.push(product);
      this.toastr.info('Este produto foi adicionado na sua lista de favoritos', 'Adicionado aos favoritos', {
        timeOut: 2000,
        positionClass: 'toast-top-left',
      });
    } else {
      this.router.navigate(['/conta'])
    }
    
    // let user:User = this.userService.getByEmail(this.authService.getUser())
    // user.favorites = this.favorites
  }

  removeFavorite(id:number) {
    this.favorites = this.favorites
    .filter(todo => todo.idProduct !== id);
    this.toastr.info("Produto removido da sua lista de favoritos", "Produto removido", {
      timeOut: 2000,
      positionClass: 'toast-top-left',
    });
  }
}
