import { Injectable } from '@angular/core';
import { GenericProduct } from '../models/product.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GEEK_API } from './geek.api';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: GenericProduct[];
  clientId: number;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient
  ) {
    
  }

  getFavorites(clientId: number) {
    return this.http.get<GenericProduct[]>(`${GEEK_API}/clients/${clientId}/favorites`)
  }

  addFavorite(productId: number) {
    if (this.authService.isLoggedIn()) {
      this.http.post(`${GEEK_API}/clients/${this.authService.getUser()}/favorites/new/${productId}`, null).subscribe(res => {
        console.log(res);
        this.getFavorites(this.authService.getUser());
        this.toastr.info('Este produto foi adicionado na sua lista de favoritos', 'Adicionado aos favoritos', {
          timeOut: 2000,
          positionClass: 'toast-top-left',
        });
      })
    } else {
      this.router.navigate(['/conta'])
    }
  }

  removeFavorite(id:number) {
    this.http.delete(`${GEEK_API}/clients/${this.authService.getUser()}/favorites/${id}`).subscribe(res =>{
      this.toastr.info('Produto foi removido da sua list de favoritos', 'Removido')
    })
  }
}
