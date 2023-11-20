let form=document.querySelector("form")
let inpFn=document.querySelector("#fn")
let inpSn=document.querySelector("#sn")
let result=document.querySelector(".result")

form.addEventListener('submit',(event)=>{
    event.preventDefault()

    //read values from inputs
    let first=inpFn.value;
    let second=inpSn.value;
    
    //let sum=Number(first)+Number(second);
    let sum=(+first)+(+second);
    result.textContent=sum

})