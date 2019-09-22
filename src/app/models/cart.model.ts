import { GenericProduct } from './product.model';
import { User } from './user.model';
import { Items } from './items.model';

export class Cart {
    constructor(
        public client: User,
        public items: any[],
        public total: number,
        public id?: number
    ) {}
}