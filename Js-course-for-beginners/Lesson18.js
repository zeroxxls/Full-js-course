console.log("Hello");
setTimeout(()=>{ //Вызывает функцию через заданное количество времени
    console.log("Hello2")
}, 5000);

const id = setInterval(()=>{ //Вызывает функцию каждые две секунды
    console.log("Hello3")
}, 2000) 


setTimeout(()=>{
    clearInterval(id)
},6500)

//Fetch


const func = async ()=>{
    const result = await fetch("https://cat-fact.herokuapp.com/facts");
    const resultJSON = await result.json();
    console.log(resultJSON[0].text)
}

func()
    // .then((response)=>{
    // return response.json;
    // })
    // .then((result)=>{
    // console.log(result[0])
    // });
