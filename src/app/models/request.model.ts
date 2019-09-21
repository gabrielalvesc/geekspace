import { GenericProduct } from './product.model';

export class ResquestModel {
    constructor(
        public product: GenericProduct,
        public quantity: number,
        public subTotal: number,
        public userEmail: string
    ) {}
}