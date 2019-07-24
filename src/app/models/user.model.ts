export class User{
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public lastName: string,
        public idUser?: number, 
    ){}
}