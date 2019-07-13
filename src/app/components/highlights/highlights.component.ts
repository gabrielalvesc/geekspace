import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  products: any[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  getProducts(){
    this.productService.getProducts().subscribe(products => {
        this.products = products;
        console.log(this.products)
      }
    )    
  }

}
