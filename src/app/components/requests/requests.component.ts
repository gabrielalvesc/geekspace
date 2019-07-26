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

}
