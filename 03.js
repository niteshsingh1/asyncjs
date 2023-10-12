// promise
//

console.log("script start")

const bucket=['coffee','chips','vegetable','rice','salt']


// peomise produce

const friedRicePromise=new Promise((resolve,reject)=>{
    if(bucket.includes("coffee") && bucket.includes("vegetable") && bucket.includes("rice") && bucket.includes("salt")){
        resolve({value:"friedRice"})
    }else{
        reject(new Error("somthing missing from bucket"))
    }
})

// promise consume
// how to consume

// friedRicePromise.then(
//     //jab promise resolve hoga
//     (myFriedRice)=>console.log("let's eat" ,myFriedRice),
//     // jab promise reject hoga
//     (error)=>console.log(error)
// )
// friedRicePromise.then(
//     //jab promise resolve hoga
//     null,
//     // jab promise reject hoga
//     (error)=>console.log(error)
// )

// using catch function

friedRicePromise.then(
    //jab promise resolve hoga
    (myFriedRice)=>console.log("let's eat" ,myFriedRice),
    
).catch((error)=>console.log(error))

setTimeout(()=>{
    console.log("Inside setTimeOut funtion")
},0)

for(let i=0;i<100;i++){
    console.log(Math.random(),i)
}

console.log("script end!!!!")


// 1). script start
//2.)100 random number
//3.)script end
//4).then because it will come inside microtask que and and microtask que will first excute by web browser
//5).setTimeout bcz it will inside of que stack
