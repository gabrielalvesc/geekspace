import { Product } from './product.model';

export class Cart {
    constructor(
        public product: Product,
        public quantity: number,
        public subTotal: number,
    ) {}
}