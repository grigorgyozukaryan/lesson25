 const ulLiUppercase = document.querySelectorAll("span")
 console.log(ulLiUppercase)
 ulLiUppercase.forEach(function span(item){ 
    item.style = `
    text-transform: uppercase;
    `
 })
const title = document.querySelector("#title")
console.log(title)

title.textContent = "list".toUpperCase()

const li = document.querySelectorAll(".li")
console.log(li)

li.forEach(function li(item){

    if(item.innerText === "FACEBOOK"){item.style = `--i:6;--clr:#1877f2;`}
    else if(item.innerText === "WHATSAPP"){item.style = "--i:5;--clr:#25d366;"}
    else if(item.innerText === "TWITTER"){item.style = "--i:4;--clr:#1da1f2;"}
    else if(item.innerText === "INSTAGRAM"){item.style = "--i:3;--clr:#c32aa3;"}
    else if(item.innerText === "YOUTUBE"){item.style = "--i:2;--clr:#ff0000;"}
    else if(item.innerText === "VIBER"){item.style = "--i:1;--clr: #7360F2;"}
  
})

const name2 = document.querySelectorAll("p[name = 'text']")
console.log(name2)






const oldTitle = document.getElementById("title")
console.log(oldTitle)


const oldLi = document.getElementsByClassName("li")
console.log(oldLi)

const oldSpan = document.getElementsByTagName("span")
console.log(oldSpan)

const name1 = document.getElementsByName("text")
console.log(name1)
