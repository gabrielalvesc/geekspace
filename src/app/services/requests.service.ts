import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  requests: any[] = [
      {
        "idProduct": 1,
        "name": "Camisa Star Wars",
        "description": "Camisa Stars wars edition limited",
        "specification": "100% algodão",
        "price": "99,99",
        "size": "M",
        "color": "Black",
        "idStore": "1",
        "picture":"https://static.simplo7.net/static/9783/sku/presentes-dia-dos-pais-camiseta-dia-dos-pais-star-wars-darth-vader-e-luke-1500494040519.jpg"
    }
  ]

  constructor(
    private http: HttpClient
  ) { }

  getRequests(){
    return this.requests;
  }
}
