export class User{
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public lastName: string,
        public role: string,
        public idUser?: number, 
    ){}
}