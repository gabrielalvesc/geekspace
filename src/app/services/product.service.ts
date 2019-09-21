import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GEEK_API } from './geek.api';
import { GenericProduct } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ShirtProduct } from '../models/shirt-product.model';


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

  // getById(id: number) {
  //   return this.http.get<Product>(`${GEEK_API}/all-products/${id}`)
  // }

  createGenericProduct(product: GenericProduct) {
    return this.http.post(`${GEEK_API}/generic-product/new`, product);
  }

  createShirtProduct(shirtProduct: ShirtProduct){
    return this.http.post(`${GEEK_API}/shirt-product/new`, shirtProduct);
  }

  getByFilter(filter: string): GenericProduct[] {
    const lista: GenericProduct[] = [];
    
    return lista;
  }

}
