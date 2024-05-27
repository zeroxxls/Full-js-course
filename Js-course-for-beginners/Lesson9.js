 const items = [
    {price: 40},
    {price: 120},
    {price: '505'},
    {price: 350},
];

// for(const item of items){
//     console.log(`Price: ${item.price}`)
// }


const calculateSum = (items) => {
    let totalSum = 0
    for(const item of items){
        const price = item.price
        if(item !== typeof(number) && item < 0){
            throw new Error('Parameter is not a number!');
        }
        totalSum += price
    }
    return totalSum
}


try {
    const sum = calculateSum(items);
    console.log('Total sum:', sum);
} catch (error) {
    console.error(error.message);
}
