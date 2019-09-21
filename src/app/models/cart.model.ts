import { GenericProduct } from './product.model';

export class Cart {
    constructor(
        public product: GenericProduct,
        public quantity: number,
        public subTotal: number,
    ) {}
}