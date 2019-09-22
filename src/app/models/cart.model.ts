import { GenericProduct } from './product.model';
import { User } from './user.model';
import { Items } from './items.model';

export class Cart {
    constructor(
        public client: User,
        public items: Items[],
        public total: number,
        public id?: number
    ) {}
}