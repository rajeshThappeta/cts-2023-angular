import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {
    console.log('data service onject created');
  }


  //state
  x = signal(100);
  //logic
  changeX(value: number) {
    this.x.set(value);
  }
}
