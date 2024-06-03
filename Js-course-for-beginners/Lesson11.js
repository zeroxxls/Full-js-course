//callback функции
const add = (a,b) => a + b;
const res = add (2,3);
console.log(res); //5

const add1 = (a,b,callback) => callback(a + b);
const res1 = add1(2,3,(res1)=>{
    console.log(res1)
})

//Контракты колбэков
const add2 = (a,b,callback) =>{
    if(!Number.isFinite(a) || !Number.isFinite(b)){
        callback(new Error('Invalid arguments'));
        return
    }
    callback(null,a+b)
};

const res2 =(2,3,(error,result) =>{
    if(error)console.error(error);
    console.log({result})
})

//Колбэки в методах массивах
const stock = [
    {name:'Laptop', quantity: 15,},
    {name:'Pad', quantity: 0,},
    {name:'Mouse', quantity: 10,},
];
const inStock = (item) => item.quantity > 0;
const available = stock.filter(inStock);
console.log(available)

//Таймеры одноразовое событие
setTimeout(() => {
    console.log('#callback1');},
    20);

setTimeout(() => {
    console.log('#callback2');},
 10);

setTimeout(() => {
    console.log('#callback3');},
15);

