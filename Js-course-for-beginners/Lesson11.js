//callback функции
const add = (a,b) => a + b;
const res = add (2,3);
console.log(res); //5

const add1 = (a,b,callback) => callback(a + b);
const res1 = add1(2,3,(res1)=>{
    console.log(res1)
})