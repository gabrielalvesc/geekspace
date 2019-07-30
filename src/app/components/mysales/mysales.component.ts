import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { ResquestModel } from 'src/app/models/request.model';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-mysales',
  templateUrl: './mysales.component.html',
  styleUrls: ['./mysales.component.css']
})
export class MysalesComponent implements OnInit {

  constructor(
    private requestService: RequestsService,
    private productService: ProductService
  ) { }

  ngOnInit() {

  }

  get requests(): ResquestModel[] {
    return this.requestService.getRequests();
  }

}
