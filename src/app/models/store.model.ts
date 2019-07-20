import { Product } from './product.model';

export class Store {
    constructor(
        public products: Product[],
        public name: string,
        public cnpj: string,
        public email: string,
        public phone: string,
        public idStore?: number
    ) {}
}