import { Component, Input } from '@angular/core';
import { ProductType } from '../models/ProductType';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product:ProductType={};
  
}
