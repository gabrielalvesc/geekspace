import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GEEK_API } from './geek.api';
import { GenericProduct } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ShirtProduct } from '../models/shirt-product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any[];

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient
  ) {
   }

  getProducts() {
    return this.http.get<GenericProduct[]>(`${GEEK_API}/all-product`).subscribe(res => {
      this.products = res;
    })
  }

  getById(id: number) {
    return this.http.get<GenericProduct>(`${GEEK_API}/all-product/${id}`)  
  }

  createGenericProduct(product: GenericProduct) {
    return this.http.post(`${GEEK_API}/generic-product/new`, product);
  }

  createShirtProduct(shirtProduct: ShirtProduct){
    return this.http.post(`${GEEK_API}/shirt-product/new`, shirtProduct);
  }

  getByCategory(category: string) {
    return this.http.get<GenericProduct[]>(`${GEEK_API}/all-product/category-filter?category=${category}`)
  }

  getByGenre(genre: string) {
    return this.http.get<GenericProduct[]>(`${GEEK_API}/shirt-product/genre-filter?genre=${genre}`)
  }
  
  getByColor(color: string) {
    return this.http.get<GenericProduct[]>(`${GEEK_API}/shirt-product/color-filter?color=${color}`)
  }


}
