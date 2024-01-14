import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-edit-demo',
  templateUrl: './form-edit-demo.component.html',
  styleUrl: './form-edit-demo.component.css',
})
export class FormEditDemoComponent {
  usersList: User[] = [
    {id:1,name:"Ravi",email:'ravi@mail.com'},
    {id:2,name:'Vikas',email:'vikas@mail.com'},
    {id:3,name:"Bhanu",email:"bhanu@mail.com"}
  ];

  userEditForm=new FormGroup({
    name:new FormControl(''),
    email:new FormControl('')

  })
  userEditStatus:boolean=false;
  userToEdit:User;
  indexOfUserToEdit:number;

  onUserEdit(user:User,ind:number){
    this.userEditStatus=true;
    this.indexOfUserToEdit=ind;
    //this.userToEdit=user;
    //console.log(this.userToEdit)
    this.userEditForm.get('name').setValue(user.name)
    this.userEditForm.get('email').setValue(user.email)
  }

  onUserSave(ind,id:number){
    this.userEditStatus=false;
   

    let newUser:User=<User>{id,...this.userEditForm.value}
    this.usersList.splice(ind,1,newUser)
  }
}




interface User {
  id:number;
  name: string;
  email: string;
}
