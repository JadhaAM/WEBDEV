let body =document.querySelector("body")

 let btn=document.querySelector(".btn");

 let colur=["red","orange","pink","grean","yellow"];

 btn.addEventListener("click",()=>{
     let random=Math.floor(Math.random() * colur.length);
    body.style.backgroundColor=colur[random];
    btn.style.backgroundColor=colur[random];
 })