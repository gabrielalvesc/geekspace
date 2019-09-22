import { GenericProduct } from './product.model';

export class Items {
    constructor (
        public product: GenericProduct,
        public quantity: number,
        public subTotal: number,
        public subValue: number,     
        public id?: number,
    ) {}
}