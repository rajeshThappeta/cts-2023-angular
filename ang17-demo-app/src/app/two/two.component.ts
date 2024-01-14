import { Component, inject, OnInit } from '@angular/core';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit {
  username:string;
  usernameUserviceObj=inject(UsernameService)
  ngOnInit(): void {
    this.usernameUserviceObj.getUsername().subscribe({
      next:(username)=>{this.username=username},
      error:(err)=>{console.log(err)}
    })
  }
}
