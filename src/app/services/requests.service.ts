import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResquestModel } from '../models/request.model';


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  requests: ResquestModel[] = [
    
  ]

  constructor(
    private http: HttpClient
  ) { }

  getRequests() {
    return this.requests;
  }

  addRequest(request:ResquestModel) {
    this.requests.push(request);
  }
}
