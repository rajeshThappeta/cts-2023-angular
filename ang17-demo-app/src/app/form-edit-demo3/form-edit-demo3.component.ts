import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-edit-demo3',
  templateUrl: './form-edit-demo3.component.html',
  styleUrl: './form-edit-demo3.component.css',
})
export class FormEditDemo3Component {
  //user state
  user: User = {
    username: 'kiran',
    email: 'kiran@mail.com',
  };

  userEditForm=new FormGroup({
    username:new FormControl(''),
    email:new FormControl('')
  })

  userEditStatus: boolean = false;

  onUserEdit() {
    this.userEditStatus = true;
    this.userEditForm.get('username').setValue(this.user.username)
    this.userEditForm.get('email').setValue(this.user.email)
  }

  onUserSave() {
    this.userEditStatus = false;
    this.user=<User>this.userEditForm.value
  }
}

interface User {
  username: string;
  email: string;
}
