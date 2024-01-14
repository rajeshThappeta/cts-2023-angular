import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  username=new BehaviorSubject('kiran')

  //set new username
  setUsername(newUserName){
    this.username.next(newUserName)
  }

  //get current username
  getUsername(){
    return this.username.asObservable();
  }
}
