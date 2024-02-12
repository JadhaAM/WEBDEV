const heding=document.querySelector("h1")
const input1=document.getElementById("input1")
const input2=document.getElementById("input2")
const input3=document.getElementById("input3")
const subheding=document.querySelector("h3");
const button =document.querySelector(".btn")
console.log(button);
function changeContanent(params) {
    heding.textContent="Registration";
    button.textContent="Sign Up"
    subheding.textContent=" alredy have an count ?    Sign In";
    input1.placeholder="user name";
    input2.placeholder="user Email";
    input3.placeholder="user password";
   
}