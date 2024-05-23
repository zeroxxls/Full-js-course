//Структура из массивов и обьектов

const purchase = {
    Electronics: [ //purchase.Electronics - ссылка на массив
        {name: 'Laptop', price: 1500}, //purchase.Electronics[0] - читаем елемент
        {name: 'Keyboard', price: 100},//purchase.Electronics[2].price - читаем второй элемент в обьекте
        {name: 'HDMI cable', price: 10},//purchase.Electronics.length - возвращает длину массива(3)
    ],
    Textile: [
        {name: 'Bag', price: 50},
    ]
}

//Ключи объекта
const keys = Object.keys(purchase);
console.log(keys); //['Electronics', 'Textile']

//Ключи и значения 
const entries =  Object.entries(purchase);
console.log(entries) // Выведет весь массив с их значениями

//Элемент массива по индексу
console.log(purchase.Electronics[0]);
{name: 'Laptop', price: 1500}//нулевой элемент (можно еще использовать Electronics.at - тоже самое только позволяет перемещаться по массиву с конца в начало)

console.log(purchase.Electronics[1]);
{name: 'Keyboard', price: 100}//первый элемен 

console.log(purchase.Electronics[2]);
{name: 'HDMI cable', price: 10}//второй элемент

console.log(purchase.Electronics[3]);
undefined //это новый элемент который не будет создан(За пределами массива)

//Копирование массива
const items = [...purchase.Electronics];
console.log(purchase.Electronics) //выведет старый массива так как мы его скопировали в новую переменную

//Объединение массивов
console.log([
    ...purchase.Electronics,
    ...purchase.Textile,
]); //Объединение двух массивов в один (...) - распаковка массива

//добавление элемента в массив 
purchase.Electronics.push({name: 'Mouse', price: 25});
console.log(purchase.Electronics); //Метод push - добавление элемента в массив(тут мы добавили в массив новый элемент Mouse)

//Извлечение элемента их массива
const item = purchase.Electronics.pop();//извлекаем элемент из массива и добавляем в переменную item
console.log(item);
console.log(purchase.Electronics);//возвращаем оставшиеся элементы

//Поиск элементов в массиве
const prices = [10,1500,100,50]

const price = prices.find((item) => item > 100); //ищем первое значение которое больше 100 в массиве
console.log({price});

if(prices.includes(100))console.log('100 is there')//выводит '100 is there' если мы находим 100 в массиве
// {price: 1500}
// 100 is there
