//Цикл for..of
const basket = [
    {price: 1500},
    {price: 25},
    {price: 100},
    {price: 10},
];

for(const item of basket){
    console.log(`Price: ${item.price}`)
}

const basket1 = [
    {name: 'Laptop', price1: 1500 },
    {name: 'Mouse', price1: 25 },
    {name: 'Keyboard', price1: 100 },
    {name: 'HDMI', price1: 10 },
];

for(const{name, price1} of basket1){
    console.log(`Price of ${name} is ${price1}`);
}

//Цикл for..in по ключам обьекта - больше для прикладного кода
const basket2 = {
    Laptop: 1500,
    Mouse: 25,
    Keyboard: 100,
    HDMI: 10,
}

for(const key in basket2){
    const price = basket2[key];
    console.log(`Price of ${key} is ${price}`)
}

//Замена цикла for..in на for..of
const electronics = {
    Laptop: 1500,
    Mouse: 25,
    Keyboard: 100,
    HDMI: 10,
};

for (const name of Object.keys(electronics)){
    const price = electronics[name];
    console.log(`Price of ${name} is ${price}`)
}

const basket3 = {
    Laptop: 1500,
    Mouse: 25,
    Keyboard: 100,
    HDMI: 10,
}

for(const [name,price] of Object.entries(electronics)){
    console.log(`Price of ${name} is ${price}`)
}

//Цикл for
const names = ['Laptop','Mouse','Keyboard','HDMI',];
const prices = [1500,25,100,10];

for(let i = 0; i < names.length; i++){
    console.log(`Price of ${names[i]} is ${prices[i]}`);
}

