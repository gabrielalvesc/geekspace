import { User } from './user.model';
import { Cart } from './cart.model';
import { GenericProduct } from './product.model';

export class Client {
    constructor(
        public user:User,
        public cartItems: Cart,
        public favorites: GenericProduct[]
    ){}
}