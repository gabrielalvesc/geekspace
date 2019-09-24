import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { GenericProduct } from 'src/app/models/product.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
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

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private favoriteService: FavoritesService,
    private authService: AuthService
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

  filterGenre(genre: string){
    this.productService.getByGenre(genre).subscribe(res => {
      this.products = res;
    })
  }

  setType(type: string) {
    console.log(type)
    this.category = type;
    console.log(this.category)
    this.getProducts();
  }

  color(color:string) {
    this.productService.getByColor(color).subscribe(res => {
      this.products = res;
    })
  }

}
