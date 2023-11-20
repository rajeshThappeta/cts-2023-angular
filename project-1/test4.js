
let numbers=[12,14,25,30]

//access elements
    console.log(numbers[1])

    //dynamic insert
        //at begining
        numbers.unshift(100,200,300,400)
        console.log(numbers)

        //at end
        numbers.push(111,222)
        console.log(numbers)

        //index based (in between)
        numbers.splice(1,0,1234,2345)
        console.log(numbers)

    //dynamic delete
        //from begining
        let rm1=numbers.shift()
        console.log(numbers)
        console.log(rm1)

        //from ending
        let rm2=numbers.pop()
        console.log(numbers)
        console.log(rm2)

        //index based(in between)
        let rm3=numbers.splice(2,2)
        console.log(numbers)
        console.log(rm3)

    //dynamic update
        numbers.splice(2,1,999)
        console.log(numbers)