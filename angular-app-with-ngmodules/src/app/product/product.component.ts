import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ProductType } from '../models/ProductType';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() product: ProductType = {};

  //create a custom event
  @Output() myEvent = new EventEmitter();
  sampleData:number=1234;

  sendDataToParent(){
    this.myEvent.emit(this.sampleData)
  }
}
