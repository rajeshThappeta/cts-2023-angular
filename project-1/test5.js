let arr=[123,12,56,-56,67,1978];


//filter (element >200)

let result1=arr.filter(x=>x<200);
//between 500 and 1000
let result2=arr.filter(element=>element>30&&element<200)



let filteredData=element=>element+10

let result3=arr.filter(filteredData)

// let result=[];

// for(let element of arr){
//     if(element<200){
//         result.push(element)
//     }
// }
 console.log(result1)
 console.log(result2)
 console.log(result3)


 //map
 let result4=arr.map(element=>element+10)
 console.log(result4)

 //add 10 for elements lessthan 100 and add 20 for elements above 100 
 let result5=arr.map((element,index)=>{
    console.log(index)
    if(element<100){
        return element+10
    }else{
        return element+20
    }
 })

 console.log(result5)

//forEach
arr.forEach((element,index)=>{
    console.log('value at index ',index,' is ',element)
})


//find
let element=arr.find(element=>element===123)
console.log(element)

//findIndex

let arr1=[10,20,30,40]
//reduce
let sum=arr1.reduce((accumulator,element)=>accumulator+element)
                        // 10         20          30
                        // 30         30          60
                        // 60         40          100       
console.log(sum)

let small=arr.reduce((acc,element)=>acc<element?acc:element)
console.log(small)