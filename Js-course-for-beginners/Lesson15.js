//Async/await
const add1 = async(a,b) =>{
    return a + b;
};
const res1 = await add1 (2,3);
console.log(res1)

//Пример обычной функции
const add = (a,b) => a + b;
const res = (2,3);
console.log(res) 

//Пример функции сallback
const add2 =(a,b,callback) => callback(a + b);
const res2 = add2(2,3,console.log)

//
const add3 = async(a,b) =>{
    return a + b
};

const main = async () =>{
    const res3 = add3(2,3);
    console.log(res3)
}
main();//5

const add4 = async(a,b) =>{
    return a + b;
}

add4(2,3).then((res4) =>{
    console.log(res4)
})

const step1 = async()=> console.log('step1')
const step2 = async()=> console.log('step2')
const step3 = async()=> console.log('step3')

await step1().then(step2).then(step3)

// await step1();
// await step2();
// await step3();