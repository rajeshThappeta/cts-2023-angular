import { Component } from '@angular/core';
import {UserType} from './models/UserType'
// import {AComponent} from './a/a.component';
// import {BComponent} from './b/b.component';
// import {CComponent} from './c/c.component'
import {FormDemoComponent} from './form-demo/form-demo.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
//  providers:[TestService]
})
export class AppComponent {
  
  a:number=10;
  username:string='kiran'
  user:UserType={
    uid:100,
    name:'bhanu'
  }

}




