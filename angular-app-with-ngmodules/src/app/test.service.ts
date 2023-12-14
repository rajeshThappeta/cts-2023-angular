import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  //data:number=100;
  data=new BehaviorSubject(100)
  constructor() { }

  getData(){
   // return this.data;
  return this.data.asObservable()
  }
  setData(v:number){
   // this.data=v;
   this.data.next(v)
    //console.log(this.data)
  }

}
