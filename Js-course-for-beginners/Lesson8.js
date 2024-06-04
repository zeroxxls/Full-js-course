//Обьекты примеси и сериализация 
//Добавление поля Обьекта
const basket ={
    Laptop: 1500,
    Keyboard: 100,
    HDMI: 10,
}

basket['Mouse'] = 25;
console.log(basket);
//Добавление поля по имени
const basket ={
    Laptop: 1500,
    Keyboard: 100,
    HDMI: 10,
}
const key = 'Mouse';
basket[key] = 25;
//Удаление поля из обьекта
const basket ={
    Laptop: 1500,
    Keyboard: 100,
    HDMI: 10,
}
delete basket['Keyboard'];// delete basket.keyboard
console.log(basket) //будет без keyboard

//Объединение Объектов
const basket = { Laptop:1500, Mouse:20,};
const goods = {Keyboard:200, Headphones: 300,};
const result = {...basket, ...goods};
console.log(result)

//Объект из частей 
const basket ={
    Laptop: 1500,
    Keyboard: 100,
    HDMI: 10,
}
const order = {...basket, Mouse:20, Cabel: 30};
console.log(order)
//Примесь Mixin
const calculateTotal =(obj) =>{
    let total = 0;
    for(const key in total){
        total += obj[key]
    }
    return total
}
const basket = { Laptop:1500, Mouse:20,};
const mixTotal = (obj) => {
    obj.total = calculateTotal(obj);
}

mixTotal(basket);
console.log(basket)
//Новый объект вместо примеси
const basket = { Laptop:1500, Mouse:20,};

const addTotal = (obj) =>{
    return{...obj,total:calculateTotal(obj)};
}

const order1 = addTotal(basket);
console.log(order1)


const basket = { Laptop:1500, Mouse:20,};

const addTotal1 = (obj) =>{
    return{...obj,total:calculateTotal(obj)};
}

const order2 = addTotal(basket);
console.log(order1)