 const items = [
    {price: 40},
    {price: -120},
    {price: '505'},
    {price: 350},
];

// for(const item of items){
//     console.log(`Price: ${item.price}`)
// }


const calculateSum = (items) => {
    let total = 0
    for(const item of items){
        if(typeof item.price === 'number'){
            if(item.price >0){
                total += item.price
            }
        }
    }
    return total
}


try {
    const sum = calculateSum(items);
    console.log('Total sum:', sum);
} catch (error) {
    console.error(error.message);
}
