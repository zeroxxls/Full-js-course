//Множества 
const goods = ['Laptop','Mouse','Keyboard'];
const basket = new Set(goods);

console.log(basket)

//Цикл по множеству
const goods1 = new Set(['Laptop','Mouse','Keyboard']);

for(const name of goods1){
    console.log(`Element:${name}`)
}

//Добавление в множество (УДАЛЕНИЕ ИЗ МНОЖЕСТВО - точно также только метод delete)
const goods2 =['Laptop','Mouse','Keyboard'];
const basket1 = new Set(goods2);
basket1.add = ('Board');//метод add - добавление в множество
basket1.add = ('HDMI');//метод add - добавление в множество
console.log(basket1)

//Обьединение Множеств
const goods3 = new Set(['Laptop','Mouse','Keyboard']);
const added = new Set(['Bag','Keyboard']);

const basket2 = new Set( ...goods3, ...added);
console.log(basket2)

//Пересечение Множеств
const goods4 =['Laptop','Mouse','Keyboard'];
const stock = ['Bag','Keyboard'];

const basket3 = new Set(
    [...goods4].filter((item) => stock.has(item))
);
console.log(basket3)

//Разность множеств
const goods5 =['Laptop','Mouse','Keyboard'];
const stock1 = ['Bag','Keyboard'];

const basket4 = new Set(
    [...goods4].filter((item) => !stock.has(item))
);
console.log(basket3)

//Хэш таблица
const electronics = new Map();
electronics.set('Laptop',1500);
electronics.set('Mouse',50);

console.log(electronics);
//Цикл по Хэш таблице
const electronics1 = new Map();
electronics1.set('Laptop',1500);
electronics1.set('Mouse',50);

for(const[key,value] of electronics1){
    console.log(`Price of ${key} is ${value}`)
}

const electronics3 = new Map();
electronics1.set('Laptop',1500);
electronics1.set('Mouse',50);

for(const[key,value] of electronics1){
    console.log(`Price of ${key} is ${value}`)
}
//Проверка
const electronics2 = new Map();
electronics2.set('Laptop',1500);
electronics2.set('Mouse',50);

if(electronics.has ('Laptop')){
    console.log('We have a Laptop')
}
