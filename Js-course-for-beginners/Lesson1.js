let amount = 0; // Задается переменная
amount = 100; //перезначение значения переменной
amount += price; //оператор присвоения 
const MAX_PURCHASE = 2000; //Задается пременная (Константа) - задаем если знаем что не будем менять значение
const total = 1500; //локальная константа

//промежуточные переменные
const goods = order[groupName];
const amount1 = calculateSubtotal(goods);
expenses.set(groupName. amount1);

//Без промежуточных переменных
expenses.set(
    groupName,
    calculateSubtotal(order[groupName])
)

//Выносим одну
const amount2 = 
calculateSubtotal(order[groupName]);
expenses.set(groupName, amount2)

//Выносим вторую
const goods1 = order[groupName];
const amount3 = calculateSubtotal(goods1);
expenses.set(groupName,amount3)

//Bad Names                 //Good Names
Maximum                     MAX_PURCHASE
request_timeout             REQUEST_TIMEOUT
ERCODE                      ERROR_CODES
numbers                     prices
arrayOfGoods                goods
orderItemsInShopBasket      items
amt                         amount
grp_N                       groupName
itogo2                      total
tolalAndSubtotal            calculateSubtotal
BuyerCalculatins            calculateTotal
VE                          validateExpenses