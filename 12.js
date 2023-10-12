// AYNC AWAIT

// fetch(url)
// .then(res=>{
//     const data=res.json()
//     return data;
// })
// .then(data=>{
//     console.log(data)
// })

const url='https://jsonplaceholder.typicode.com/posts'


async  function myPromise(){
    
   const response=await fetch(url)
   if(!response.ok){
    throw new Error("Somthing Went Wrong");
   }
   const data= await response.json()
    
   return data;
}

myPromise().then((Response)=>{
    console.log(Response)
}).catch((error)=>{
    console.log(error)
})