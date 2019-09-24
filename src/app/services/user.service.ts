import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { GEEK_API } from './geek.api';
import { Sale } from '../models/sale.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private toastr: ToastrService,
    private http: HttpClient
  ) { }

  createUser(user: User){
    return this.http.post(`${GEEK_API}/clients/new`, user)
  }

  getById(id:number) {
    return this.http.get<User>(`${GEEK_API}/clients/${id}`);
  }

  getRequests(clientId:number) {
    return this.http.get<Sale[]>(`${GEEK_API}/clients/${clientId}/sales`)
  }
}

