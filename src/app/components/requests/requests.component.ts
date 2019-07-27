import { Component, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';
import { Product } from 'src/app/models/product.model';
import { ResquestModel } from 'src/app/models/request.model';
import { Store } from 'src/app/models/store.model';
import { Sale } from 'src/app/models/sale.model';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Cart } from 'src/app/models/cart.model';
import { SaleService } from 'src/app/services/sale.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  user: User;
  sales: any[];

  constructor(
    private requestService: RequestsService,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.user = this.userService.getByEmail(this.authService.getUser())
   }

  ngOnInit() {
    this.sales = this.user.sales;
    // for (let i = 0; i < this.sales.length; i++) {
    //   this.items = this.sales[2][i];      
    // }
    console.log(this.sales)
  }

  // get requests(): ResquestModel[]{
  //   return this.requestService.getRequests()
  // }

  get requests(): ResquestModel[] {
    return this.requestService.getRequestByUser(this.user.email)
  }

}
