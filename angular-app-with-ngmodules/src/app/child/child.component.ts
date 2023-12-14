import { Component, Input ,EventEmitter, Output, OnChanges, OnInit, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges,OnInit,OnDestroy {

  constructor(){
    console.log("Child-constructor")
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("Child-on changes")
      //console.log(changes)
      console.log("Previous value :",changes['dataFromParent'].previousValue)
      console.log("Current value :",changes['dataFromParent'].currentValue)
  }

  ngOnInit(): void {
    console.log("Child-on init")
  }

  ngOnDestroy(): void {
    console.log("Child-on destroy")
  }




  //state
  b:number=200;

  @Input() dataFromParent:number=0;

  @Output() myEvent1=new EventEmitter();

  sendDataToParent(){
    this.myEvent1.emit(this.b)
  }
}
