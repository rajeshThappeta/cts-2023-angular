import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-edit-demo2',
  templateUrl: './form-edit-demo2.component.html',
  styleUrl: './form-edit-demo2.component.css',
})
export class FormEditDemo2Component {
  user: User = {
    username: 'Test User',
    email: 'testuser@mail.com',
  };

  userEditStatus: boolean = false;

  userEditForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
  });

  onUserEdit() {
    this.userEditStatus = true;
    this.userEditForm.get('username').setValue(this.user.username);
    this.userEditForm.get('email').setValue(this.user.email);
  }

  onSaveUser() {
    this.userEditStatus = false;
    this.user = <User>this.userEditForm.value;
    console.log(this.userEditForm.value);
  }
}

interface User {
  username: string;
  email: string;
}
