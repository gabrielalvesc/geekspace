import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Cart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { Sale } from 'src/app/models/sale.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,

  ) { }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  onSubmit(f: any) {
    // tslint:disable-next-line: prefer-const
    let user = new User(f.email, f.password, f.name, f.lastName, 'cliente', new Array<Cart>(), new Array<Product>(), new Array<Sale>());
    this.userService.addUser(user);
    this.authService.login(user.email, user.password);
  }

}
