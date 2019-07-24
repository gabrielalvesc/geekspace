import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  id: number = 500;

  constructor() { }

  addUser(user: User){
    user.idUser = this.id;
    this.users.push(user);
    this.id++;

  }
}

