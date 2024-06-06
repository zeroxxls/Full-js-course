//Замыкания 
function add(x){
    function closure(y){
        const z = x + y;
        console.log(`${x} + ${y} = ${z}`);
        return z
    }
    return closure;
}

const result = add(3) (5);
console.log(result);

function price (x){
    function quantity (y){
        const sum = x + y;
        console.log(`${x} + ${y} = ${sum}`)
        return sum
    }
    return quantity
}

const result1 = price (4) (8);
console.log(result1)


const logger = (kind) =>{
    const colors = {
        warning: '\x1b[1;33m',
        error: '\x1b[0;31m',
        info: '\x1b[1;37m',
    }
    const color = colors[kind] || colors.info;
    return(s) =>{
        const date = new Date().toISOString();
        console.log(color + date + '\t' + s)
    }
}

const warning = logger('warning');
const error = logger('error');
const slow = logger('slow');

slow('i am slow logger');
warning('hello');
error('World')

//Замыкания в function expresion
const add1 = (x) => (y) =>{
    const z = x + y;
    console.log(`${x} + ${y} = ${z}`);
    return z
}

const result2 = add1(5)(6);
console.log(result2)



//Лексическое окруженик
const x = 1 //глобальное окружение ссылка на null

const y = function(){ //глобальное окружение  ссылка на null
    const i = 'Hi' //локальное окружение  ссылка на глоб лекс окр
    console.log(i)
}

const ivent = 1

const price = function(){
    const z = '2'
    console.log(z)
}


//Определение Замыканий
//Замыкания это способность функции в js запоминать лексическое окружение в котором она была создана
// *тоесть хранить в себе ссылку на это окружение

function makeCounter(count){
    return function(){
        return count++;
    }
}

let counter = makeCounter(0);
let counter2 = makeCounter(0);

alert(counter()); //0
alert(counter()); //1

alert(counter2()); //0
alert(counter2()); //1


function createIncrement (){
    let count = 0;
    function increment (){
        count ++;
    }
    function log(){
        let message = `Count is ${count}`
        console.log(message)
    }

    return [increment,log]
}

const [increment,log] = createIncrement();
increment(); //0
increment(); //1
increment(); //2
log(); //Count is 3


function external(){
    const externalVar = 'Я - внешняя функция';

    function internal(){
        const internalVar = 'Я - внутрення функция'
        console.log('internalVar >', internalVar);
        console.log('externalVar >', externalVar);
    }
    return internal;
}
const internalFN = external();
internalFN();

function createAddress(type){
    const address = type.toUpperCase();
    return function(name){
        return `${address} ${name}`
    }
}

const addressGrazhdanin = createAddress('Гражданин');
const addressGrazhdanka = createAddress('Гражданка');

console.log(addressGrazhdanin('Василий'))
console.log(addressGrazhdanka('София'))


function createPlayer(name){
    let score = 0;
    return function scoreCount(){
        score++;
        return `${name} - ${score} баллов!`
    }
}

const playerOne = createPlayer('Василий')
const playerTwo = createPlayer('София');