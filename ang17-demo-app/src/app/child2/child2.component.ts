import { Component, effect, inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})

export class Child2Component implements OnInit {

  child2Data:number;
  dataServiceObj=inject(DataService)

  constructor(){
    effect(()=>{
      this.child2Data=this.dataServiceObj.x();
    })
  }
  
  ngOnInit(): void {
    this.child2Data=this.dataServiceObj.x();
  }
}
