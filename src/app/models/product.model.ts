export class GenericProduct {
    constructor(
        public name: string,
        public description: string,
        public specification: string,
        public price: number,
        public quantity: number,
        public image: string,
        public categoty: string,
        public id?: number,
    ){}
}