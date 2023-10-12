// promise & setTimeout

// i want to resolve/reject promise after 2 second

console.log("hello world")


function myPromise(){
    return new Promise((resolve,reject)=>{
        let value=false;
        setTimeout(()=>{
            if(value){
                resolve("promise resolved")
            } else{
                reject("promise rejected")
            }
        },200)
    })
}

// consume

myPromise().then((res)=>{
    console.log(res)
}).catch((rej)=>{
    console.log(rej)
})