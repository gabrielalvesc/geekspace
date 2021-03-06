import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {

  role: string;
  items: number;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private cartService: ShoppingCartService
  ) {

  }

  ngOnInit() {
    if(this.authService.isLoggedIn()){
      this.getItems();
      this.getRole();
    } else {
      this.items = 0
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.authService.isLoggedIn()){
      this.getItems();
    } else {
      this.items = 0
    }
  }

  getRole() {
    this.role = this.authService.getRoles()[0];
    console.log(this.role);
    if (this.role == null) {
      this.role = '';
    }
  }

  getItems(){
    this.cartService.getShoppingCart(this.authService.getUser()).subscribe(res => {
      this.items = res.items.length;
    })
  }

  get totalItems(){
    return this.cartService.totalItems
  }

}
