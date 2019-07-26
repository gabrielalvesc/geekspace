import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/models/product.model';
import { Cart } from 'src/app/models/cart.model';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  item:Cart;
  total: number;
  user: User;
  formFinishing: FormGroup

  constructor(
    private cartService: ShoppingCartService,
    private userService: UserService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.total = this.cartService.total();
    this.user = this.userService.getByEmail(this.authService.getUser())
  }


  ngOnInit() {
    this.itens.forEach(e => {
      this.item = e
      return;
    });

    this.formFinishing = this.formBuilder.group({
      email: [this.user.email, Validators.required],
      name:[this.user.name, Validators.required],
      lastname:[this.user.lastName, Validators.required],
      cpf:['', Validators.required],
      cep:['', Validators.required],
      state:['', Validators.required],
      city:['', Validators.required],
      number:['', Validators.required],
      neighborhood:['', Validators.required],
      complement:['', Validators.required]
    })
  }

  get itens() {
    return this.cartService.items
  }



}
