import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GEEK_API } from './geek.api';
import { Product } from '../models/product.model';
import { Store } from '../models/store.model';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';
import { Cart } from '../models/cart.model';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  store: Store = new Store(new User("admin@geek.com", "admin123", "Admin", "Geek", "admin", new Array<Cart>(), new Array<Product>(), 1), new Array<Product>());
  
  product1 = new Product(
    "Camisa Star Wars",
    "Camisa Stars wars edition limited",
    "100% algodão",
    99.99,
    "M",
    "Black",
    10,
    "https://static.simplo7.net/static/9783/sku/presentes-dia-dos-pais-camiseta-dia-dos-pais-star-wars-darth-vader-e-luke-1500494040519.jpg",
    this.store,
    14
  )

  product2 = new Product(
    "Caneca The Simpsons",
    "Caneca The Simpsons Bart Simpson",
    "Alça reforçada",
    69.99,
    "",
    "Branca",
    10,
    "https://cdn.awsli.com.br/400x400/510/510818/produto/2319915702db0aff56.jpg",
    this.store,
    2
  )

  product3 = new Product(
    "Chaveiro Spider-Man",
    "Chaveiro Spider-Man aço inox",
    "Tamanho - 8cm",
    24.99,
    "",
    "",
    15,
    "https://images-americanas.b2w.io/produtos/01/00/oferta/52254/2/52254264_1GG.jpg",
    this.store,
    4
  )

  product4 = new Product(
    "Adesivo GOT",
    "Adesivo house Stark",
    "Cola super-bond",
    9.99,
    "",
    "",
    15,
    "http://www.ateliedepapelarroz.com.br/imagem/index/15455547/G/game_of_throne1.jpg",
    this.store,
    5
  )

  products: Product[] = [this.product1, this.product2, this.product3, this.product4];

  constructor(
    private http: HttpClient,
    private userService: UserService,
    private authService: AuthService
  ) {
   }

  getProducts() {
    // return this.http.get<any[]>(`${GEEK_API}/products`)
    return this.products;
  }

  getById(id: number):Product {
    return this.products.filter(todo => todo.idProduct === id).pop()
  }

  addProduct(product:Product){
    this.products.push(product)
  }

}
