import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favorites: any[] = [

  ]

  constructor() { }

  getFavorites() {
    return this.favorites;
  }
}
