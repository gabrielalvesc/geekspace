import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { GenericProduct } from 'src/app/models/product.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FavoritesService } from 'src/app/services/favorites.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  category: string;
  products: GenericProduct[];
  genre: string = null;
  color: string = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.category = params.filter;
    });
    
    this.getProducts();
  }

  getProducts() {
    this.productService.getByCategory(this.category).subscribe(res => {
      this.products = res;
      console.log(this.products);
    })
  }


  setType(type: string) {
    
    this.category = type;
    
    this.getProducts();
  }

  

  filterColorGenre() {
    if(this.color != null && this.genre != null) {
      this.productService.getByColorGenre(this.color, this.genre).subscribe(res => {
        this.products = res;
      })
    } else if (this.color == null && this.genre != null) {
      this.productService.getByGenre(this.genre).subscribe(res => {
        this.products = res;
      });
    } else if (this.color != null && this.genre == null) {
      this.productService.getByColor(this.color).subscribe(res => {
        this.products = res;
      })
    }
  }

}
