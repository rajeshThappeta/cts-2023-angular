import { Component } from '@angular/core';
import {UserType} from './models/UserType'
import {ProductsComponent} from './products/products.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  a:number=10;
  username:string='kiran'
  user:UserType={
    uid:100,
    name:'bhanu'
  }

}




