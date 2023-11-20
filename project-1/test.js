//Non-primitives
//Array
let arr = [1, 2, 3, 4];
let names = ["ravi", "kiran", "manasa"];
console.log(typeof arr);

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

for (let x of arr) {
  console.log(x);
}

//Object
let student = {
  sno: 100,
  name: "ravi",
  mobile: 9999999,
};

student = {
  sno: 200,
  name: "bhanu",
  mobile: 88888,
};

let person = {
  pid: 1,
  designation: "manager",
};
console.log(typeof student);
console.log(student.sno);
console.log(student.name);
console.log(student.city);

console.log(student);
console.log(arr);
for (let key in student) {
  console.log("value of ", key, " is ", student[key]);
}
//Function

//complex array
let students = [
  { sno: 100, name: "ravi", age: 21 },
  { sno: 200, name: "bhanu", age: 23 },
  { sno: 300, name: "vikas", age: 43 },
];

for(let stdObj of students){
    for(let k in stdObj){
        console.log(k, ' is ',stdObj[k])
    }
}


//complex object
let emp={
    eno:100,
    name:'bhanu',
    skills:['js','react','nodejs'],
    address:{
        city:'hyd',
        pincode:34343434,
        streetDetails:{
            streetName:'kphb',
            laneNo:12
        }
    }
}

console.log(emp.skills.length)
console.log(emp.address.city)
console.log(emp.address.streetDetails.laneNo)