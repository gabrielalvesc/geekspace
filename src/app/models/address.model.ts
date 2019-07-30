export class Address {
    constructor(
        public cep: string,
        public street: string,
        public city: string,
        public state: string,
        // tslint:disable-next-line: variable-name
        public number: number,
        public neighborhood: string,
        public complement: string
    ) {}
}
