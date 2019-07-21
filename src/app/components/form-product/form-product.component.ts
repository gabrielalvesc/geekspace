import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  @Input() tipo;

  constructor() { }

  ngOnInit() {
    console.log(this.tipo)
  }

}
