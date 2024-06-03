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
