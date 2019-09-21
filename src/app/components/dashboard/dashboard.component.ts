import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isAdmin: boolean;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.showAdminTemplate();
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  
  showAdminTemplate() {
    let role = this.authService.getRoles()[0];
    if(role == "ROLE_ADMIN"){
      this.isAdmin = true;
    } else if (role == "ROLE_USER") {
      this.isAdmin = false;
    } else {
      this.isAdmin = false;
    }
  }

  logout() {
    this.authService.logout();
  }


}
