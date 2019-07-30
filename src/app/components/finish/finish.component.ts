import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/models/product.model';
import { Cart } from 'src/app/models/cart.model';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address } from 'src/app/models/address.model';
import { Sale } from 'src/app/models/sale.model';
import { SaleService } from 'src/app/services/sale.service';
import { ResquestModel } from 'src/app/models/request.model';
import { RequestsService } from 'src/app/services/requests.service';
import { CepService } from 'src/app/services/cep.service';
import { Cep } from 'src/app/models/cep';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  item: Cart;
  total: number;
  user: User;
  formFinishing: FormGroup;

  cep = new Cep();

  constructor(
    private cartService: ShoppingCartService,
    private userService: UserService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private saleService: SaleService,
    private requestService: RequestsService,
    private cepService: CepService
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
      complement:['', Validators.required],
      street:['', Validators.required]
    });


  }

  get itens() {
    return this.cartService.items;
  }

  onSubmit(f: any){
    // let user: User = this.userService.getByEmail(this.authService.getUser());
    // let address: Address = new Address(f.cep, f.street, f.city, f.state, f.number, f.neighborhood, f.complement);
    // let sale: Sale = new Sale(f.cpf, user, this.itens, "boleto", address);
    // this.user.sales.push(sale);
    this.itens.forEach(e => {
      let request = new ResquestModel(e.product, e.quantity, e.subTotal, this.user.email)
      this.requestService.addRequest(request);
    });
    // this.saleService.newSale(sale);

  }

  buscar() {
    this.cepService.buscar(this.cep.cep);
  }


}
