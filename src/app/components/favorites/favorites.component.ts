import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  // productForm: string = '';

  constructor(
    private favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    console.log(this.favoritesService.getFavorites().length);
  }

  get favorites(): Product[] {
    return this.favoritesService.getFavorites();
  }

  remove(id: number) {
    this.favoritesService.removeFavorite(id);
  }

}
