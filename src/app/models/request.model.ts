import { Product } from './product.model';

export class ResquestModel {
    constructor(
        public product: Product,
        public quantity: number,
        public subTotal: number,
        public userEmail: string
    ) {}
}