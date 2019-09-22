export class userStorage {
    constructor (
        public id: number,
        public roles: any[],
        public login: string,
        public accessToken: string
    ){}
}