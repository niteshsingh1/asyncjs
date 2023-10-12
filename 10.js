const url='https://jsonplaceholder.typicode.com/posts'



function sendRequest(method,url){
    return new Promise((resolve, reject) => {
        const xhr=new XMLHttpRequest()
        xhr.open(method,url)
        xhr.onload=()=>{
            if(xhr.status>=200 && xhr.status<=300){
          resolve(xhr.response)
        }else{
            reject(new Error("somthing went wrong"))
        }
    }
       xhr.send()
    })
}

sendRequest('GET',url).then((response)=>{
    const data=JSON.parse(response);
     return data;
}).then(data=>{
    const id=data[3].id
    return id;
}).then(id=>{
    const url2=`${url}/${id}`
    return sendRequest("GET", url2);
}).then(newResponse=>{
    const data2=JSON.parse(newResponse)
    console.log(data2)
})
