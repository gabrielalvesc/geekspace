import { Product } from './product.model';
import { User } from './user.model';
import { stringify } from 'querystring';

export class Store{
    constructor(
        public user: User,
        public products: Product[]
    ){}
}