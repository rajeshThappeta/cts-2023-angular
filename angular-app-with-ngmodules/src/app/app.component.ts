import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  eid:string|number=100;
  username:string='Suresh';
  mobile:number=999999; 
  status:boolean=true;
  buttonText:string='Hide'
  address:Address={
    city:'hyd'
  }

  skills:string[]=['js','react','angular','node','mongo']
  imagePath:string='https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8zMF9hbl9hYnN0cmFjdF92aXN1YWxpemF0aW9uX29mX2FfYmxvY2tjaGFpbl9uZV80ZWIwODVmNC0yODFlLTRkYTMtYjdlMS00MmY1ZTFkMDkyM2VfMS5qcGc.jpg'

  changeUsername(){
    this.username='Mahesh'
  }

  changeStatus(){
   this.status=!this.status;
   if(this.buttonText==='Show'){
    this.buttonText="Hide"
   }else{
    this.buttonText="Show"
   }
  }

}


//Create address type
interface Address{
  city:string;
}



