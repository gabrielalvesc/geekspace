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
    console.log(this.requestsService.getRequests().length)
  }

  get requests(): any[]{
    return this.requestsService.getRequests();
  }

  print() {
    console.log(this.requestsService.getRequests())
  }

}
