const values ={
    name: 'Mouse',price: 25, stock: false, // 25 -Number ; 'Mouse' - string; false - boolean; const values typeOf === Object
    avg: (a,b) => (a+b) /2n, //2n - BigInt ; (a,b) => (a + b) /2n === Function
    reference:null,//null
    primitive: undefined,// undefined                
    numbers: [NaN, Infinity], // Number ; [NaN, Infinity] === Array 
};

for (const key in values){
    console.log(typeof values[key]);
}