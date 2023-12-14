import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnChanges,OnInit,OnDestroy{
  constructor(){
    console.log("Parent-constructor")
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("Parent-on changes")
  }

  ngOnInit(): void {
    console.log("Parent-on init")
  }

  ngOnDestroy(): void {
    console.log("Parent-on destroy")
  }






  //state
  a:number=0;

  sendToChild(data:number){
    this.a=data;
  }

  toGetDataFromChild:number=0;
}
