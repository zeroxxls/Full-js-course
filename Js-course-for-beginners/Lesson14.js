//События в браузере AddEventlistener
const elem = document.querySelector("div");

elem.addEventListener("click",()=>{console.log("click")});
elem.addEventListener("dblclick", ()=>{console.log("dblclick")})

elem.addEventListener("mousedown",()=>{console.log("mousedown")});
elem.addEventListener("mouseup",()=>{console.log("mouseup")});

elem.addEventListener("contextmenu",()=>{console.log("contextmenu")})
elem.addEventListener("wheel",()=>{console.log("wheel")})

//

const element = document.querySelector("form");
element.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("submit")
})

const elem2 = document.querySelector("input");
elem2.addEventListener("input",(e)=>{
        console.log(e.target.value)
})

elem2.addEventListener("keypress",(e)=>{
    console.log("keypressed")
})

elem2.addEventListener("keydown",(e)=>{
    console.log("keydown")
})

elem2.addEventListener("keyup",(e)=>{
    console.log("keyup")
})

const elem3 = document.querySelector("div");
elem3.addEventListener("mousemove", ()=>{
    console.log("moved")
})
//
const button = document.querySelector('.btn');
const buttonTwo = document.querySelector('.btn2');
function handleClick(){
    console.log('click')
}

button.addEventListener('click', handleClick);
buttonTwo.addEventListener('click',handleClick)

buttonTwo.removeEventListener('click',handleClick)


const buttons = document.querySelectorAll('.btn');
console.log(buttons)

buttons.forEach(button =>{
    button.addEventListener('click',function(){
        console.log('clicked')
    })
})

//Event вспылтие и погружение
const buttons = document.querySelectorAll('.btn');

const handleClick = (event) =>{
    console.log("Target >",event.target);
    console.log("CurrentTarget >",event.currentTarget);
    console.log(event.target === event.currentTarget);
}

buttons.forEach(button =>{
    button.addEventListener('click', handleClick)
})