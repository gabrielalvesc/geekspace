import { Role } from './role.model';

export class User{
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public lastName: string,
        public role: Role[],
        public idUser?: number, 
    ){}
}
