export class ShirtProduct {
    constructor (
        public name: string,
        public description: string,
        public specification: string,
        public price: number,
        public quantity: number,
        public image: string,
        public categoty: string,
        public color: string,
        public genre: string,
        public size: string,
        public id?: number,
    ) {}
}