import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';

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
    console.log(this.favoritesService.getFavorites().length)
  }

  get favorites(): Product[] {
    return this.favoritesService.getFavorites();
  }

  add() {
    var store = new Store(new Array<Product>(), "Geek Shop", "222.222.222.222", "contato@geekshop.com", "(83) 981343105", 2);
    var picture = "https://a-static.mlcdn.com.br/618x463/caneca-star-wars-darth-vader-color-black-artgeek/artgeek/898854246/960438aa080b9f4967a2bdf15e4642e5.jpg"
    var product = new Product("Caneca Star Wars", "Caneca Star Wars Darth Vader", "300ml, haste reforçada", 34.99, "", "Preto", 10, picture, store, 10);
    this.favoritesService.addFavorite(product);
  }

  // product(tipo: any) {
  //   this.productForm = tipo;
  // }

}
