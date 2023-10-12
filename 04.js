// funtion return promise
const bucket=['coffee','chips','vegetable','rice','salt']

function returnPromise(){
    return new Promise((resolve,reject)=>{
        if(bucket.includes("coffee") && bucket.includes("vegetable") && bucket.includes("rice") && bucket.includes("salt")){
            resolve({value:"friedRice"})
        }else{
            reject(new Error("somthing missing from bucket"))
        }
    })
    
}



returnPromise().then(
    (myFriedRice)=>console.log("let's eat" ,myFriedRice),

).catch((error)=>{
    console.log(error)
})
