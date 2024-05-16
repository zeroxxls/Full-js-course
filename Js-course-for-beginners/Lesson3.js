//Функции
const sum = (a,b) =>{
    const result = a+b;
    return result;
};
const amount1 = sum (2,3)

//Function definition
const sum1 = (a,b) => {
    return a + b;
}
//Function expression
const sum3 = function (a,b){ 
    return a + b;
}
//Arrow function expression
const max = (a,b) =>{
    return a + b;
}
//Arrow function expression
const max1 =(a,b) => a +b;

//Default parameters
const max2 = (a = 0, b = 0) =>{
    return a + b;
};

max2(5,2) //returns 7
max2(5) // returns 5
max2() // returns 0

//If have't Default parameters
const max3 = (a,b) =>{
    return a + b;
}

max3(5,2) //returns 7
max3(5) //returns NaN
max3() //returns NaN

//Rest parameters
const max4 = (...args) =>{
    return args[0] + args[1]
}

const max5 = (a, ...args) =>{ //все аргументы кроме а попадают в массив данных . !!!! в начале писать аргс нельзя 
    return a + args[0];
}
//Функция и область видимости
const total = (prices) =>{
    let amount = 0;
    for(const price of prices){
        amount += price;
    }
    return amount;
};

const amount = total (goodsPrices);

let amount2 = 100;

const total1 = (prices) =>{
    let amount2 = 0;
    for(const price of prices){
        amount += price;
    }
    return amount2; // Мы задали две переменные amount2 но одна находится до функции ,а другая в функции,из за этого нет какого то правила какая именно переменная будет возвращаться 
};

//Блоки и функции
let level = 1;
console.log(level); //1
const f = () =>{
    let level =2;
    console.log(level); //2 
    {
        let level = 3;
        console.log(level); //3
    }
    console.log(level); //2
}

//Вложенные области видимости 
let level1 = 1;
console.log(level1); //1
const f1 = () =>{
    console.log(level1);//1
    {
        let level1 = 3;
        console.log(level1);//3
    }
    console.log(level1); //1
}
