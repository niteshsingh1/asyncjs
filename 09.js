const url='https://jsonplaceholder.typicode.com/posts'


const xhr=new XMLHttpRequest();

xhr.open("Get",url)

xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<=300){
    const response=xhr.response;
    const data=JSON.parse(response)
    console.log(data)
    const id=data[3].id;
    const xhr2=new XMLHttpRequest()
    const url2=`${url}/${id}`
    xhr2.open("GET",url2)
    xhr2.onload=()=>{
        // const res2=xhr2.response
        const data2=JSON.parse(xhr2.response)
        console.log(data2)
        // xhr2.send()
    }
    xhr2.send()

    }else{
        console.log("somthing went wrong")
    }
}

xhr.onerror=()=>{
    console.log("network error")
}
xhr.send()
