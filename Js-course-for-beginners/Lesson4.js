//Условия и ветвления
const calculateSubtotal = (goods) =>{
    let amount = 0;
    for(const item of goods){
        if (item.price < 0) throw 'Negative price';
        else amount += item.price
    }
    return amount
}
//выносим из ветвления
if (item.price < 0){
    warning.push(`Warning: negative value ${amount}`);
}else{
    basket.push(item);
    console.log(`Successfully added ${amount}`)
}
amount += item.price

//Вынос промежуточных переменных
const goods1 = order[groupName];
if(goods1 && goods1.length >0){
    total += calculateSubtotal(goods1);
    count += goods1.length
}

const goods2 = order[groupName];
if(goods2){
    const len = order[groupName].length
    if(len > 0){
        total += calculateSubtotal(goods2);
        count += len
    }
}

//Тернарный оператор
// Условие ? значение ? : значение

amount += item.price < 0 ? 0 : item.price;

amount += item.price >0 ? item.price : 0;  