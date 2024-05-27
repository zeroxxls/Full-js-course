const purchase = {
    Electronics: [
      { name: 'Laptop', price: 1500 },
      { name: 'Keyboard', price: 100 },
    ],
    Textile: [{ name: 'Bag', price: 50 }],
    Food: [
        {name: 'Potato', price: 10},
        {name: 'Carrot', price: 5},
        {name: 'Pineapple', price: 40},
    ],
  };

//   const find = (items,productName) =>{
//    for (const group of Object.values(items)){
//     for(const item of group){
//         if(item.name === productName){
//             return item
//         }
//     }
//    }
//    return null;
//   }

const find = (purchase, itemName) => {
    for (const category of Object.values(purchase)) {
        for (const item of category) {
            if (item.name === itemName) {
                return category; // Возвращаем весь массив, содержащий элемент
            }
        }
    }
    return null; // Возвращаем null, если элемент не найден
}



  const result = find(purchase, 'Laptop');
  console.log(result);
