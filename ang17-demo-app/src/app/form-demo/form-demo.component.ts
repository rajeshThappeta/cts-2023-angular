import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css',
})
export class FormDemoComponent {
  selectedState: string;
  districtsOfselectedState: string[] = [];

  statesData = [
    { state: 'state-1', districts: ['dist-1', 'dist-2'] },
    { state: 'state-2', districts: ['dist-1', 'dist-2', 'dist-3'] },
  ];

  statesInfoForm = new FormGroup({
    states: new FormArray([
      new FormControl('state-1'),
      new FormControl('state-2'),
      new FormControl('state-3'),
    ]),
    districts: new FormArray([]),
    selectedDistrictsOfSelectedState:new FormArray([])
  });

  get states() {
    return this.statesInfoForm.get('states') as FormArray;
  }

  get districts() {
    let d=this.statesInfoForm.get('districts') as FormArray
   // console.log(d.controls)
    return this.statesInfoForm.get('districts') as FormArray;
  }

  getDistictsOfSelectedState(e) {
    let dists = this.statesInfoForm.get('districts') as FormArray;
   // dists.clear();
   // console.log(e.target.value);
    this.selectedState = e.target.value;

    for (let s of this.statesData) {
      if (s.state === e.target.value) {
        for(let d of s.districts){
        dists.push(new FormControl(d));
        }
      }
    }
  }

  
  selectedDistrict(e){
    
    let d = this.statesInfoForm.get('selectedDistrictsOfSelectedState') as FormArray;
   // d.clear()
   console.log(e.target.checked)
   if(e.target.checked===true){
    d.push(new FormControl(e.target.value))
   }else{
   // d.clear()
   }
  }
  onFormSubmit() {
    //console.log(this.selectedState);
   // let x=this.statesInfoForm.get('selectedDistrictsOfSelectedState') as FormArray
    console.log(this.statesInfoForm.value)
  }
}


