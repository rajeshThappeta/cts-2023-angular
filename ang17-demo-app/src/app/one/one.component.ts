import { Component, inject, OnInit } from '@angular/core';
import { UsernameService } from '../username.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent implements OnInit {
  username:string;
  usernameUserviceObj=inject(UsernameService)
  ngOnInit(): void {
    this.usernameUserviceObj.getUsername().subscribe({
      next:(username)=>{this.username=username},
      error:(err)=>{console.log(err)}
    })
  }
}
