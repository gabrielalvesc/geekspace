import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

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

  get requests(): any[]{
    return this.requestsService.getRequests();
  }

}
