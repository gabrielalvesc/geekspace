import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GEEK_API } from './geek.api';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(){
    return this.http.get<any[]>(`${GEEK_API}/products`)
  }
}
