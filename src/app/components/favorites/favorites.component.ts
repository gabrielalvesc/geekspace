import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(
    private favoritesService: FavoritesService
  ) { }

  ngOnInit() {
    console.log(this.favoritesService.getFavorites().length)
  }

  get favorites(): any[] {
    return this.favoritesService.getFavorites();
  }

}
