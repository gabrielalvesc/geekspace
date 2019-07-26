import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { Store } from 'src/app/models/store.model';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

   @Input() tipo;

  productForm: FormGroup;
  productForm2:FormGroup;
  
  

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    
      this.productForm = this.formBuilder.group({ 
        name: ['', Validators.required],
        quantity: ['', Validators.required],
        price: ['', Validators.required],
        color: ['', Validators.required],
        genre: ['', Validators.required],
        specification: ['', Validators.required],
        description: ['', Validators.required],
        picture:['',Validators.required],
 
      }) 

      this.productForm2 = this.formBuilder.group({ 
        name: ['', Validators.required],
        quantity: ['', Validators.required],
        price: ['', Validators.required],
        specification: ['', Validators.required],
        description: ['', Validators.required],
        picture:['',Validators.required],
 
      }) 
  }

  onSubmit(f:any){
    let user = this.userService.getByEmail(this.authService.getUser())
    let store = new Store(user, new Array<Product>())
    var product = new Product(f.name,f.description,f.specification,f.price,"",f.color,f.quantity,f.picture, store, 1000);
    this.productService.addProduct(product)
    console.log(this.productService.getProducts.toString)
  }
}
