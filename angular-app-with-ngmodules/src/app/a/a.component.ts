import { Component ,inject, OnInit,ChangeDetectorRef, DoCheck, ChangeDetectionStrategy} from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrl: './a.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AComponent implements OnInit {
   
  x:number=0
  //inject service using constructor
  constructor(public service:TestService,public ref:ChangeDetectorRef){}
 //inject using inject()\
 //service=inject(TestService)

 ngOnInit(): void {
 
  this.service.getData().subscribe(x=>this.x)
  console.log(this.x)
 // this.ref.detectChanges()
 }
//  ngDoCheck(): void {

//   if(this.x!==this.service.getData()){
//     console.log("do check executed")
//   this.x= this.service.getData()
//   }
//  }
 changeValueOfData(){
  this.service.setData(200)
 // this.x=this.service.getData()
 }
}
