import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResquestModel } from '../models/request.model';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  requests: ResquestModel[] = [
  ];

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  getRequests() {
    return this.requests;
  }

  getRequestByUser(email: string): ResquestModel[] {
    const requests = new Array<ResquestModel>();

    this.requests.forEach(e => {
      if (e.userEmail === email) {
        requests.push(e);
      }
    });

    return  requests;
  }

  addRequest(request: ResquestModel) {
    const before: number = this.requests.length;
    this.requests.push(request);
    const after: number = this.requests.length;
    if (after > before) {
      this.router.navigate(['/confirmacao']);
    } else {
      this.toastr.error('Não foi possível realizar sua compra, entre em contato conosco', 'Compra não realizada');
    }
  }
}
