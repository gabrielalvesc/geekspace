import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { GenericProduct } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorites: GenericProduct[];

  constructor(
    private favoritesService: FavoritesService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.favoritesService.getFavorites(this.authService.getUser()).subscribe(res => {
      this.favorites = res;
      console.log(this.favorites)
    })
  }

  remove(id: number) {
    this.favoritesService.removeFavorite(id);
    this.getFavorites()
  }

}
