sessionStorage.setItem("name","artist");
localStorage.setItem("name","artist");//задает элемент, сначала пишем ключ,а потом его значение
// localStorage.removeItem("name") удаляет значение по ключу- будет null
sessionStorage.clear(); //очищает весь массив данных - будет null

const local = localStorage.getItem("name");//получает элемент по ключу
const session = sessionStorage.getItem("name");
console.log(local,session)//artist artist

//Cookie

document.cookie = "Name= Kirill";
document.cookie = "SecondName= Khoroshun; max-age=400";
document.cookie = "Name= Katya"//Браузер сам поменяет ключ Имя на более новое,в консоле будет выводиться - Name= Katya,а не Name= Kirill
document.cookie = `Example = ${encodeURIComponent("Test text")}`;//кодирует пробел между элементами специальными символами
document.cookie = "SecondName= Khoroshun; max-age=-1";//Чтобы удалить куки сразу надо чтобы оно было отрицательным числом
console.log(document.cookie)