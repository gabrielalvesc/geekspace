import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private cartService: ShoppingCartService
  ) {

  }

  ngOnInit() {
  }

  getRole() {
    this.role = this.userService.getRole(this.authService.getUser());
    if (this.role == null) {
      this.role = '';
    }
  }

  items() {
    return this.cartService.items.length;
  }

}
