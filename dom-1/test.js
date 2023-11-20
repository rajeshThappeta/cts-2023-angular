let main=document.querySelector(".main")
let btn=document.querySelector("button")

console.log(main.children)
console.log(main.firstElementChild)
console.log(main.lastElementChild)

console.log(main.parentElement)
console.log(main.previousElementSibling)
console.log(main.nextElementSibling)

btn.addEventListener('click',()=>{
    // main.hidden===true?main.hidden=false:main.hidden=true;
    // btn.textContent==='Hide'?btn.textContent='Show':btn.textContent='Hide'

    //using innerHTML
   // main.innerHTML+='<span class="span-style">This is span</span>'

    //create and add
    let span=document.createElement('span')
    span.textContent="This is another span"
    span.setAttribute("class","text-warning fs-1 bg-success")
    main.after(span)

   // main.firstElementChild.remove()
   main.removeChild(main.children[1])
})