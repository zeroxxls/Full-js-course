//Цикл While
let a = 0;
while(a < 10){
    console.log(a++)
}

const sum = (...args)=>{
let value = 0;
while(args.length > 0){
    value += args.pop()
}
return value
}
sum(1,2,3,4,5)

//Цикл While do

let i = 0;
do{
    console.log(i++)
}while(i < 10);

//Перебор continue

let t = 0 
while( t < 10 ){
    t++;
    console.log('Hello',t)
    if(t===5)continue;//переносит в начало выполнения кода
    console.log('World')
}
console.log("End")

//Выход из цикла Break

//Перебор continue

let y = 0 
while( y < 10 ){
    y++;
    console.log('Hello',y)
    if(y===5)continue;//выходит из цикла (заканчивает выполнение кода)
    console.log('World')
}
console.log("End")

let hello = 0
while(hello < 20){
    hello++;
    console.log("Hello",hello)
    if(hello===5)continue;
    console.log("World")
}
console.log("End")