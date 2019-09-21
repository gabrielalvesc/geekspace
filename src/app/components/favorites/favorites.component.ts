import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { GenericProduct } from 'src/app/models/product.model';

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
    // console.log(this.favoritesService.getFavorites().length);
  }

  // get favorites(): GenericProduct[] {
  //   return this.favoritesService.getFavorites();
  // }

  remove(id: number) {
    // this.favoritesService.removeFavorite(id);
  }

}
