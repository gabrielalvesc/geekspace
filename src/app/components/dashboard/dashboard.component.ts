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
    let email:string = this.authService.getUser();
    if(email != null) {
      let user:User = this.userService.getByEmail(email);
      console.log("Role: "+user.role)
      if (user.role == "admin") {
        this.isAdmin = true;
      } else {
        this.isAdmin = false
      }
    }
  }

  logout() {
    this.authService.logout();
  }


}
