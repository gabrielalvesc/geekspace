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

  // addOrRemoveFavorite(product: GenericProduct) {
  //   if(this.authService.isLoggedIn()){
  //     this.favoriteService.getFavorites(this.authService.getUser()).subscribe(res => {
  //       let bool: boolean = false;
  //       res.forEach(e => {
  //         if (e.id == product.id) {
  //           bool = true;
  //         }
  //       });
  //       if (bool) {
  //         this.favoriteService.removeFavorite(product.id);
  //         const heart = document.getElementById('heart');
  //         heart.classList.add('far');
  //         heart.classList.remove('fas');
  //       } else {
  //         this.favoriteService.addFavorite(product.id);
  //         const heart = document.getElementById('heart');
  //         heart.classList.add('fas');
  //         heart.classList.remove('far');
  //       }
  //     })
  //   } else {
  //     this.router.navigate(['/conta'])
  //   }
    
  // }

  setType(type: string) {
    console.log(type)
    this.category = type;
    console.log(this.category)
    this.getProducts();
  }

}
