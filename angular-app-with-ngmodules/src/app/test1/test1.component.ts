import {Component,Input} from '@angular/core'
import {UserType} from '../models/UserType'

@Component({
    selector:'app-test1',
    templateUrl:'./test1.component.html',
    styleUrl:'./test1.component.css'
})
export class Test1Component{
  @Input()  x:number=0;
  @Input()  y:string='';
  @Input() z:UserType={};
}