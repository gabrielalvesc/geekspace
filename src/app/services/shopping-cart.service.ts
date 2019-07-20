import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items: Product[] = [];


  constructor() { }

  addItem(item: Product) {
    this.items.push(item);
    console.log(this.items);
  }

  removeItem(item: Product) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    let total = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price;
    }
    return total;
  }


}
