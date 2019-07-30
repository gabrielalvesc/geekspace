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
import { Sale } from '../models/sale.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ProductService {


  // tslint:disable-next-line: max-line-length
  store: Store = new Store(new User('admin@geek.com', 'admin123', 'Admin', 'Geek', 'admin', new Array<Cart>(), new Array<Product>(), new Array<Sale>(), 1), new Array<Product>());

  product1 = new Product(
    'Camisa Star Wars',
    'Camisa Stars wars edition limited',
    '100% algodão',
    99.99,
    'M',
    'Black',
    10,
    // tslint:disable-next-line: max-line-length
    'https://static.simplo7.net/static/9783/sku/presentes-dia-dos-pais-camiseta-dia-dos-pais-star-wars-darth-vader-e-luke-1500494040519.jpg',
    'camisa',
    this.store,
    14
  );

  product2 = new Product(
    'Caneca The Simpsons',
    'Caneca The Simpsons Bart Simpson',
    'Alça reforçada',
    69.99,
    '',
    'Branca',
    10,
    'https://cdn.awsli.com.br/400x400/510/510818/produto/2319915702db0aff56.jpg',
    'caneca',
    this.store,
    2
  );

  product3 = new Product(
    'Chaveiro Spider-Man',
    'Chaveiro Spider-Man aço inox',
    'Tamanho - 8cm',
    24.99,
    '',
    '',
    15,
    'https://images-americanas.b2w.io/produtos/01/00/oferta/52254/2/52254264_1GG.jpg',
    'action-figure',
    this.store,
    4
  );

  product4 = new Product(
    'Adesivo GOT',
    'Adesivo house Stark',
    'Cola super-bond',
    9.99,
    '',
    '',
    15,
    'http://www.ateliedepapelarroz.com.br/imagem/index/15455547/G/game_of_throne1.jpg',
    'sticker',
    this.store,
    5
  );

  products: Product[] = [this.product1, this.product2, this.product3, this.product4];
  id = 1000;

  constructor(
    private toastr: ToastrService,
    private router: Router
  ) {
   }

  getProducts() {
    // return this.http.get<any[]>(`${GEEK_API}/products`)
    return this.products;
  }

  getById(id: number): Product {
    return this.products.filter(todo => todo.idProduct === id).pop();
  }

  addProduct(product: Product) {
    const before = this.products.length;
    product.idProduct = this.id;
    this.products.push(product);
    this.id++;
    const after = this.products.length;
    if (after > before) {
      this.toastr.info('Seu produto foi anunciando com sucesso", "Produto anunciado');
      this.router.navigate(['novo-produto']);
    } else {
      this.toastr.error('Não foi possível anunciar este produto', 'Erro');
    }
  }

  getByFilter(filter: string): Product[] {
    const lista: Product[] = [];
    this.products.forEach(e => {
      if (e.type === filter) {
        lista.push(e);
      }
    });
    return lista;
  }

}
