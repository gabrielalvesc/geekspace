import { User } from './user.model';
import { Cart } from './cart.model';
import { Address } from './address.model';

export class Sale {
    constructor(
        public cep: string,
        public street: string,
        public city: string,
        public state: string,
        public number: number,
        public neighborhood: string,
        public complement: string,
        public payment: string
    ) {
        
    }
}

