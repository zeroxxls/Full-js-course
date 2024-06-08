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
