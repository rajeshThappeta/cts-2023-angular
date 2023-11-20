let emp={
    eno:100,
    name:'Ravi',
    skills:['js','react'],
    basic:10000,
    //method
    getSalary:function(){
        //logic to calculate salary
        let hra=0.15*this.basic;
        let da=0.10*this.basic;
        return this.basic+hra+da;
       
    }
}




//salary = basic+hra(15% of basic)+da (10% of basic)

let sal=emp.getSalary()
console.log(sal)




let product={
    pid:100,
    name:"TV",
    price:4000000,
    getDiscountPrince:function(discount){
        //calculate price after discount and return that value
    }
}


product.getDiscountPrince(18)