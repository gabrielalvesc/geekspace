import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Product } from 'src/app/models/product.model';
import { ResquestModel } from 'src/app/models/request.model';
import { Store } from 'src/app/models/store.model';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(
    private requestsService: RequestsService
  ) { }

  ngOnInit() {

  }

  get requests(): ResquestModel[]{
    return this.requestsService.getRequests();
  }

  add (): void {
    var store = new Store(new Array<Product>(product), "Mundo Nerd", "111.111.111.1111","mundonerd@gmail.com", "(83) 98134-3105", 1 )
    var picture = "http://d26lpennugtm8s.cloudfront.net/stores/033/028/products/camisaben101-7a4af10a031a49921415121897865855-640-0.jpg"
    var product = new Product("Camisa Ben 10", "Camisa top", "100% algodão", 100.00, "P", "red", 10, picture, store) 
   
    var request = new ResquestModel(product, 1, product.price * 2)
    this.requestsService.addRequest(request);
    console.log(request)
  }

}
