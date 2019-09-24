import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { ResquestModel } from 'src/app/models/request.model';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';
import { Cart } from 'src/app/models/cart.model';
import { Sale } from 'src/app/models/sale.model';
import { Items } from 'src/app/models/items.model';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  user: User;
  requests: Sale[];
  items: any[];

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
   }

  ngOnInit() {
    this.requests = [];
    this.userService.getRequests(this.authService.getUser()).subscribe(res => {
      this.requests = res;
      this.items = [];
      
      this.requests.forEach(e => {
        this.items.push(e.shoppingCart.items[0])
      });
      console.log(this.items)
    })
  }

  

}
