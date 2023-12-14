import { Component,inject, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-g',
  templateUrl: './g.component.html',
  styleUrl: './g.component.css'
})
export class GComponent implements OnInit {
  x:number=0;
  service=inject(TestService)
  ngOnInit(): void {
   // this.x=this.service.getData()
  }

}
