// Fetch
// Fetch api

const url='https://jsonplaceholder.typicode.com/posts'

fetch(url,{  method: 'POST',
body: JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1,
}),
headers: {
  'Content-type': 'application/json; charset=UTF-8',
},
}).then(response=>{
    if(response.ok){
    return response.json();
    }else{
        throw new Error("Somthing went Wrong")
    }
}).then(data=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
}) 