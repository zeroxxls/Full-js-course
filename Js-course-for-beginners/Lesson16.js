//async/await - practice
// function sleep(time){
//     return new Promise((resolve,reject)=>{
//         if(time < 500){
//             reject('too little sleep')
//         }
//         setTimeout(()=>resolve(`Sleep ${time}`),time)
//     })
// }

// const sleepSession = async()=>{
//     try{
//         const sleep1 = await sleep(1500);
//         console.log(sleep1);
//         const sleep2 = await sleep(1000);
//         console.log(sleep2);
//         const sleep3 = await sleep(500);
//         console.log(sleep3);
//         const sleep4 = await sleep(200);
//         console.log(sleep4);
//     }catch(err){
//         console.log('Error is here',err)
//     }
// }

// sleepSession();

//DOM
const div = document.createElement('div');
div.classList.add('wrapper');
const body = document.querySelector('body');
body.appendChild(div);
console.log(body);

const header = document.createElement('H1');
header.textContent='DOM(Document Object Model)';
div.insertAdjacentElement('beforebegin',header);

const ul = `<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>`

div.innerHTML = ul;

const img = document.createElement('img');
img.src= 'https://picsum.photos/240';
img.width=240;
img.classList.add('super');
img.alt = 'super man';
div.appendChild(img);

const elemHTML= `<div class="pDiv">
    <p>Параграф 1</p>
    <p>Параграф 2</p>
</div>`

const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin',elemHTML);

const pDiv= document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');
pDiv.firstElementChild.remove();
const curDate = new Date();
const curYear = curDate.getFullYear()

const generateAutoCard =(brand,color,year)=>{
    return `<div class = "autoCard">
        <h2>${brand} ${year}</h2>
        <p>Автомобиль ${brand} - ${year} года. Возраст авто - ${curYear - year} лет.</p>
    </div>`
}
const carsDiv = document.createElement('div')
carsDiv.classList.add('autos')


const carsList =[
    {brand: 'Tesla', year: 2015, color:'red'},
    {brand: 'Lexus', year: 2016, color:'White'},
    {brand: 'Nissan', year: 2012, color:'Black'},
]

const carsHTML = carsList.map(car =>{
    return generateAutoCard(car.brand, car.color, car.year);
}).join('');

carsDiv.innerHTML = carsHTML;
div.insertAdjacentElement('beforebegin',carsDiv);




