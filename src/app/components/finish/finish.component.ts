import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Cart } from 'src/app/models/cart.model';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SaleService } from 'src/app/services/sale.service';
import { RequestsService } from 'src/app/services/requests.service';
import { CepService } from 'src/app/services/cep.service';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private cartService: ShoppingCartService,
    private userService: UserService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private saleService: SaleService,
    private requestService: RequestsService,
    private cepService: CepService,
    private http: HttpClient
  ) {
    // this.total = this.cartService.total();
    // this.user = this.userService.getByEmail(this.authService.getUser());
  }


  ngOnInit() {
    // this.itens.forEach(e => {
    //   this.item = e;
    //   return;
    // });

    this.formFinishing = this.formBuilder.group({
      email: [this.user.email, Validators.required],
      name: [this.user.firstName, Validators.required],
      lastname: [this.user.lastName, Validators.required],
      cpf: ['', Validators.required],
      cep: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      number: ['', Validators.required],
      neighborhood: ['', Validators.required],
      complement: ['', Validators.required],
      street: ['', Validators.required]
    });


  }

  // get itens() {
  //   return this.cartService.items;
  // }

  onSubmit(f: any) {
    // let user: User = this.userService.getByEmail(this.authService.getUser());
    // let address: Address = new Address(f.cep, f.street, f.city, f.state, f.number, f.neighborhood, f.complement);
    // let sale: Sale = new Sale(f.cpf, user, this.itens, "boleto", address);
    // this.user.sales.push(sale);
    // this.itens.forEach(e => {
    //   const request = new ResquestModel(e.product, e.quantity, e.subTotal, this.user.email);
    //   this.requestService.addRequest(request);
    // });
    // this.saleService.newSale(sale);

  }

  consultaCEP(cep, form) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    this.resetaDadosForm(form);

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
        .subscribe(dados => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados, formulario) {
    formulario.form.patchValue({
      street: dados.logradouro,
      // cep: dados.cep,
      complement: dados.complemento,
      neighborhood: dados.bairro,
      city: dados.localidade,
      state: dados.uf
    });
  }

  resetaDadosForm(formulario) {
    formulario.form.patchValue({
      street: null,
      complement: null,
      neighborhood: null,
      city: null,
      state: null
    });
  }
}
