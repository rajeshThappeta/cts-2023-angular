
//syntax of function declaration or def or statement
function compareTwoValues(a, b) {
  if (a > b) {
    return "a is big";
  } else if (a === b) {
    return "both are equal";
  } else {
    return "b is big";
  }
}

//function expression
let compareAgain = function (a,b) {
  if (a > b) {
    return "a is big";
  } else if (a === b) {
    return "both are equal";
  } else {
    return "b is big";
  }
};

//call
let result1 = compareTwoValues(10, 20);
console.log(result1);

let result2 = compareAgain(10, 20);
console.log(result2);




let sum=function(a,b){
  return a+b;
}


//arrow function
let sum1=(a,b)=> a+b;


console.log(sum(12,13))
console.log(sum1(12,13))




let compareAgain1 =  (a,b)=> {
  if (a > b) {
    return "a is big";
  } else if (a === b) {
    return "both are equal";
  } else {
    return "b is big";
  }
};