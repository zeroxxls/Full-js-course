//Error and exception handling
//Throw exception
// const calculateTotal = (order)=>{
//     throw 'Always throws'
// };

// const prices = [100,10,1000];
// console.log(calculateTotal(prices));

//Handle exception
// const calculateTotal1 = (order)=>{
//     throw new Error ('Always throws') //class Error
// };

// try{
//     const prices = [100,10,1000];
//     console.log(calculateTotal1(prices));
// }catch (err){
//     console.error(err)
// }

try{
    console.log(1);
    console.log(2);
    const user = {};
    console.log(user.name);
    if(!user.name){
        throw new Error("Fucking err")
    }
    console.log(3);
}catch(error){
    console.error('error is here',error)
}