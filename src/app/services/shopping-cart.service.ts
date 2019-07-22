import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Store } from '../models/store.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  store: Store = new Store(new Array<Product>(), "Nerd Shop", "111.111.111.1111", "contato@nerdshop.com", "(83) 91829-1280", 99);
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

  item = new Cart(this.product1, 1, this.product1.price * 1)
  item2 = new Cart(this.product3, 1, this.product3.price * 1)

  items: Cart[] = [this.item, this.item2];


  constructor() { }

  addItem(item: Cart) {
    this.items.push(item);
    console.log(this.items);
  }

  removeItem(item: Cart) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    let total = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.items.length; i++) {
      total += (this.items[i].product.price * this.items[i].quantity);
    }
    return total;
  }

  setQuantity(id: number, quantity:number) {
    let item = this.items.filter(todo => todo.product.idProduct === id).pop()
    item.quantity = quantity;
    item.subTotal = item.product.price * item.quantity
  }


}
