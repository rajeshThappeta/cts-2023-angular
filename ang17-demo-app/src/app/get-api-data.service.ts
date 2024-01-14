import { HttpClient } from '@angular/common/http';
import { Injectable ,inject} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetApiDataService {

  //inject HttpClient object from root injector
  httpClientObj=inject(HttpClient)

  //get data from an api
  getUsers(){
    return this.httpClientObj.get('https://jsonplaceholder.typicode.com/users?limit=5')
  }
  
}
