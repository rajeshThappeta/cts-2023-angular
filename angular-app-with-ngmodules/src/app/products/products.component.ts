import { Component } from '@angular/core';
import { ProductType } from '../models/ProductType';
import {ProductComponent} from '../product/product.component'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: ProductType[] = [
    {
      pid: 100,
      productName: 'Television',
      price: 300000,
      productImage:
        'https://m.media-amazon.com/images/I/81chspUvzHL._AC_UY436_FMwebp_QL65_.jpg',
    },
    {
      pid: 200,
      productName: 'Home theater',
      price: 500000,
      productImage:
        'https://m.media-amazon.com/images/I/61R5iFayDWL._AC_UY436_FMwebp_QL65_.jpg',
    },
    {
      pid: 300,
      productName: 'Headset',
      price: 20000,
      productImage:
        'https://m.media-amazon.com/images/I/61X+8csYlwL._AC_UY436_FMwebp_QL65_.jpg',
    },
    {
      pid: 400,
      productName: 'Washing machine',
      price: 80000,
      productImage:
        'https://m.media-amazon.com/images/I/6148W71OMfL._AC_UY436_FMwebp_QL65_.jpg',
    },
    {
      pid: 400,
      productName: 'Oven',
      price: 120000,
      productImage:
        'https://m.media-amazon.com/images/I/61fw7feCMyL._AC_UY436_FMwebp_QL65_.jpg',
    },
  ];

  x:number=0;
}
