import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    new User("admin@geek.com", "geek123", "Admin", "", "admin", 1)
  ];
  id: number = 500;

  constructor(
    private toastr: ToastrService 
  ) { }

  addUser(user: User){
    let index = this.users.findIndex(val => val.email == user.email);
    if (index < 0) {
      user.idUser = this.id;
      this.users.push(user);
      this.id++;
    } else {
      this.toastr.error('Esqueceu sua senha? Entre em contato conosco', 'Usuário já existe')
    }

  }

  getByEmail(email: string):User {
    return this.users.filter(todo => todo.email === email).pop()
  }
}

