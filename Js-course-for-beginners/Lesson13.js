//DOM Manipulation
const element = document.getElementById("text") //принимает строку с названием элемента по айди
const element2 = document.getElementsByClassName("test")//принимает строку с названием элемента по его имени класса
const element3 = document.querySelector(".test")//принимает строку с названием элемента по css селектору (можно просто считать что это упрощенный поиск по классу)
const element4 = document.querySelectorAll(".test")//Тоже самое что и обычный только принимает все значения на странице которые подходят по условию
console.log(element);
console.log(element2);
console.log(element3);
console.log(element4);

//
const element5 = document.querySelector("#text");
element5.innerHTML = "Hello Artist"
console.log(element5);

//
const element6 = document.querySelector(".test");

element6.style.backgroundColor = "#ff0000";
element6.style.color = "#ffff";

console.log(element6.style);

//
const element7 = document.querySelector(".test");

element7.classList.add("test1")

console.log(element7.classList);

//
const element8 = document.querySelector("ul");
const elemOrange = document.querySelector("ul :first-child")

const item = document.createElement("li");
item.innerHTML = "Arbuz"

element8.appendChild(item)
element8.removeChild(elemOrange)
console.log(item)