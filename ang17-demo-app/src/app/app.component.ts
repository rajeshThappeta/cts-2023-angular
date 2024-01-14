import { Component, inject, OnInit ,effect} from '@angular/core';
import { DataService } from './data.service';
import { UsernameService } from './username.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[DataService]
})
export class AppComponent implements OnInit{

  username:string;
  parentData:number;
  //inject data service object
  dataServiceObj=inject(DataService)
  usernameUserviceObj=inject(UsernameService)

  constructor(){
    effect(()=>{
      this.parentData=this.dataServiceObj.x();
     // console.log("constructor executed")
    })
  }

    ngOnInit(): void {
      this.parentData=this.dataServiceObj.x();
      this.usernameUserviceObj.getUsername().subscribe({
        next:(username)=>{this.username=username},
        error:(err)=>{console.log(err)}
      })
    }
    
}
