import { Component ,effect,inject, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { GetApiDataService } from '../get-api-data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers:[DataService]
})
export class Child1Component implements OnInit {

  child1Data:number;
  dataServiceObj=inject(DataService)
  apiDataServiceObj=inject(GetApiDataService)

  constructor(){
    effect(()=>{
      this.child1Data=this.dataServiceObj.x();
    })
  }

  ngOnInit(): void {
    this.child1Data=this.dataServiceObj.x();
    let users$=this.apiDataServiceObj.getUsers()
    users$.subscribe({
      next:(usersList)=>{console.log("res is ",usersList)},
      error:(err)=>{console.log("err is ",err)}
    })
  }
}
