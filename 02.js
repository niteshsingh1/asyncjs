// callbacks ,callback hell and pyramid of doom
// asynchronous programing


const heading1=document.querySelector(".heading1")
const heading2=document.querySelector(".heading2")
const heading3=document.querySelector(".heading3")
const heading4=document.querySelector(".heading4")
const heading5=document.querySelector(".heading5")
// call back hell  
// pyramid of doom
// setTimeout(()=>{
//     heading1.textContent="Nitesh singh"
//     heading1.style.color="violet"
//     setTimeout(()=>{
//         heading2.textContent="Ritesh singh"
//         heading2.style.color="purple"
//         setTimeout(()=>{
//             heading3.textContent="Jannu,Babu, Sona"
//             heading3.style.color="red"
//             setTimeout(()=>{
//                 heading4.textContent="Vikash Rahiii"
//                 heading4.style.color="pink"
//                 setTimeout(()=>{
//                     heading5.textContent="Azim Ansari"
//                     heading5.style.color="green"
//                 },1000)
            
//             },1000)
        
//         },1000)
    
//     },1000)
// },1000)


// call back hell
//pyramid of doom


function changeText(element,text,color,time,onSuccessCallback,onFailureCallback){
    setTimeout(()=>{
        if(element){
     element.textContent=text;
     element.style.color=color;
     if(onSuccessCallback){
        onSuccessCallback()
     }else {
        if(onFailureCallback){
            onFailureCallback()
        }
    }
    }
    },time)

}


changeText(heading1,"Nitesh","red",1000,()=>{
console.log("hello world")
},()=>{
console.log("Heading1 does not exist")
})