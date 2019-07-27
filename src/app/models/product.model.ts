import { Store } from './store.model';

export class Product {
    constructor(
        public name: string,
        public description: string,
        public specification: string,
        public price: number,
        public size: string,
        public color: string,
        public stock: number,
        public picture: string,
        public type: string,
        public store: Store,
        public idProduct?: number,
    ){}
}