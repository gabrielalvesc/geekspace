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
import { Items } from 'src/app/models/items.model';
import { Sale } from 'src/app/models/sale.model';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  cart: Cart;
  items: Items[];
  user: User;
  formFinishing: FormGroup;

  public cpf = [/[1-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  public cep = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]

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

  }


  ngOnInit() {

    this.getItems();

    this.formFinishing = this.formBuilder.group({
      email: ['', Validators.required],
      name: [{value:'', disabled:true}, Validators.required],
      lastname: [{value:'', disabled:true}, Validators.required],
      cpf: ['', Validators.required],
      cep: ['', Validators.required],
      neighborhood: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: [{value:'', disabled:true}, Validators.required],
      complement: ['', Validators.required],
      number: ['', Validators.required]
    })

    this.userService.getById(this.authService.getUser()).subscribe(res => {

      this.formFinishing.setValue({
        email: res.email,
        name: res.firstName,
        lastname: res.lastName,
        cpf: '',
        cep: '',
        state: '',
        city: '',
        number: '',
        neighborhood: '',
        complement: '',
        street: ''
      })
    });


  }

  getItems() {
    this.cartService.getShoppingCart(this.authService.getUser()).subscribe(res => {
      this.cart = res;
      this.items = this.cart.items;
      console.log(this.items);
    })
  }

  onSubmit(f: any) {
    let sale = new Sale(f.cep, f.street, f.city, f.state, f.number, f.neighborhood, f.complement, 'BOLETO');
    this.saleService.newSale(sale, this.cart.id).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    });
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
