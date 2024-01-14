import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { share } from 'rxjs';

@Component({
  selector: 'app-form-array-test-demo',
  templateUrl: './form-array-test-demo.component.html',
  styleUrl: './form-array-test-demo.component.css',
})
export class FormArrayTestDemoComponent {
  testForm = new FormGroup({
    username: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
    }),
    skills: new FormArray([
      new FormControl('html'),
      new FormControl('js'),
      new FormControl('java'),
    ]),
    selectedSkills: new FormArray([]),
  });

  get skills() {
    return this.testForm.get('skills').value;
  }

  changeInput(event) {
    // console.log(event.target.value)
    //console.log(event.target.checked)
    //console.log(event.target.name)
    console.log(this.testForm.get('selectedSkills').value);
    let sk = this.testForm.get('selectedSkills') as FormArray;
    if (event.target.checked === true) {
      sk.push(new FormControl(event.target.value));
    } else {
      //remove FormControl by its index
      let index = (
        this.testForm.get('selectedSkills') as FormArray
      ).controls.findIndex((c) => c.value === event.target.value);

      sk.removeAt(index)
    }
  }

  onFormSubmit() {
    console.log(this.testForm.get('skills').value);
    console.log(this.testForm.value);
  }
}
