import { Cart } from './cart.model';
import { Product } from './product.model';

export class User{
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public lastName: string,
        public role: string,
        public cartItems: Cart[],
        public favorites: Product[],
        public idUser?: number, 
    ){}
}