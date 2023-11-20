class A{
    constructor(x){
        this.x=x;
    }
}



class B extends A{
    constructor(x,y){
        super(x)
        this.y=y;
    }

    test1(){
        console.log("test1 called")
    }

    static test2(){
        console.log("test2 called")
    }
}


let obj=new B(10,20)



B.test2()





let testObj={
    a:10,
    b:20,
    c:30
}

let k=Object.keys(testObj)
console.log(k)

let v=Object.values(testObj)
console.log(v)

//freeze
Object.freeze(testObj)
//modify
testObj.x=200;
testObj.a=1234;
console.log(testObj)


let obj1={
    x:10
}

let obj2={
    x:20
}

let obj3={
    z:30
}


let r=Object.assign({},obj1,obj2,obj3)
console.log(r)

console.log(obj1)