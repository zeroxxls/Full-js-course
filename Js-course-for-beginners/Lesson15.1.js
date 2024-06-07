// fetch('api.github.com/users/zeroxxls').then(res=>{
//     return res.json()
// }).then(res =>{
//     console.log(res)
// }).catch(err=>{
//     console.log('Error=>',err)
// })

// async function getGitData(){
//     try{
//         const response = await fetch('https://api.github.com/users/zeroxxls');
//     const data = await response.json();
//     console.log(data);
//     }catch(err){
//         console.log('Error is here',err)
//     }
// }
// getGitData();

// const video = document.querySelector('video');

// const myVideo = navigator.mediaDevices.getUserMedia({video:true}).then(mediaStream =>{
//     video.srcObject = mediaStream;
// }).catch(err=>{
//     console.log('video.error=>',err);
// })
// console.log(myVideo)

// const getUserVideo = async()=>{
//    try{
//     const response = await navigator.mediaDevices.getUserMedia({video:true});
//     video.srcObject = response;
//    }catch(err){
//     console.log('Error is here',err)
//    }
// }
// getUserVideo();


function sleep (time){
    return new Promise((resolve,reject)=>{
        if(time<500){
            reject('Too little sleep')
        }
        setTimeout(()=>resolve(`Sleep${time}`),time)
    })
}

const sleepSession = async()=>{
    try{
    const sleep1 = await sleep(3500);
    console.log(sleep1)
    const sleep2 = await sleep(4500);
    console.log(sleep2)
    const sleep3 = await sleep(5500);
    console.log(sleep3)
    const sleep4 = await sleep(200);
    console.log(sleep4)
    }catch(err){
        console.log('Error is here',err)
    }
}

sleepSession();

// sleep(1500).then(res=>{
//     console.log(res)
//     return sleep(2000)
// }).then(res=>{
//     console.log(res);
//     return sleep(3000)
// }).then(res=>{
//     console.log(res);
//     return sleep(500);
// }).then(res=>{
//     console.log(res);
//     return sleep(200);
// }).then(res=>{
//     console.log(res)
// }).catch(err=>{
//     console.log('Error=>',err)
// })

// setInterval(()=> console.log(Date.now()),500)