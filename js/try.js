
// const inputs = document.getElementById('signup').getElementsByTagName('input');
// let myvar= prompt("Your name")
// console.log(myvar)
let greet= document.querySelector("#greet")
let item= document.querySelector("ul#list>li:first-child")

item.innerHTML = "We're all mad here"
let mylist =document.querySelector("ul#list")
let newli = document.createElement('li')

newli.innerHTML = "someone new"
mylist.prepend(newli)
greet.classList.add("text-primary")
console.log(greet.classList)
