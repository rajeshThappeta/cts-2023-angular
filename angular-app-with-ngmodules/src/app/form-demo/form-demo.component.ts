import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css'
})
export class FormDemoComponent {

  loginForm=new FormGroup({
    username:new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(6)]),
    password:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required])
  });

  //getter & setters
  get username(){
    //console.log(this.loginForm.get('username')?.errors)
    return this.loginForm.get('username')
  }

  get password(){
    return this.loginForm.get('password')
  }

  get email(){
    return this.loginForm.get('email')
  }

  onFormSubmit(){
   
    console.log(this.loginForm.value)
    
   
  }
}
