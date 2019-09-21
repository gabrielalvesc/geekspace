import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ShirtProduct } from 'src/app/models/shirt-product.model';
import { GenericProduct } from 'src/app/models/product.model';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

   @Input() tipo;

  productForm: FormGroup;
  productForm2:FormGroup;
  
  //Image
  image: string;
  file: File;
  sizeLimit:boolean;
  filestring: string;
  

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private imageService: ImageService
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

  getFile(event) {
    this.file = event.target.files[0];
    if (this.file.size > 2853074) {
      this.sizeLimit = true;
      return;
    } else {
      this.sizeLimit = false;
      var reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(this.file);
    }

  }

  handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.filestring = btoa(binaryString);  // Converting binary string data.
    this.image = `data:image/jpg;base64,${this.filestring}`
  }

  onSubmit(f:any){
    if (this.tipo == 'camisa') {
      let shirtProduct = new ShirtProduct(f.name, f.description, f.specification, f.price, f.quantity, this.image, this.tipo, f.color, f.genre, 'M');
      this.productService.createShirtProduct(shirtProduct).subscribe(res => {
        console.log(res);
      })
    } else {
      let genericProduct = new GenericProduct(f.name, f.description, f.specification, f.price, f.quantity, this.image, this.tipo);
      this.productService.createGenericProduct(genericProduct).subscribe(res => {
        console.log(res);
      })
    }
  }
}
