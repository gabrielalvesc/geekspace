import { User } from './user.model';
import { Cart } from './cart.model';
import { Address } from './address.model';

export class Sale {
    constructor(
        public cpf: string,
        public user: User,
        public items: Cart[],
        public payment: string,
        public address: Address
    ) {}
}