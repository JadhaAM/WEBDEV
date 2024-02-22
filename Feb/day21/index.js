let inputtodo = document.querySelector(".todo-input");
const add = document.querySelector(".addicon");
const todoparent = document.querySelector(".todo__list");
const deleteAll = document.querySelector(".delateall");
const todolength = document.querySelector("#todolength");
var inputValue ="";



add.addEventListener("click", () => {
inputValue = inputtodo.value;
  if (inputValue.length == 0) {
    alert(" Write Something in todo input box");
  } else {
    var li = document.createElement("li");
    li.innerHTML = `  <p> ${inputValue} </p>
              <div class="icon__container">
                <i class="fa-solid fa-x remove"></i>
                <i class="fa-solid fa-pen-to-square" onClick="update(this.parentElement.parentElement)"></i>
              </div>
      `;
    todoparent.appendChild(li);
    inputtodo.value = "";
  
  
    // remove todo
    let remove = li.querySelector(".remove");
    remove.addEventListener("click", () => {
      todoparent.removeChild(li);
      todolength.innerHTML = `<p> You have ${todoparent.childNodes.length}  todos </p>`;
    });

    

  }
  todolength.innerHTML = `<p> You have ${todoparent.childNodes.length}  todos </p>`;
});

deleteAll.addEventListener("click", () => {
  todoparent.innerHTML = " ";
});

// update todo
function update(id) {
   
//  let Toupdate=  document.querySelector("li") ;
//   console.log(Toupdate);
//    if ((Toupdate) &&(id)) {
//     Toupdate.innerHTML=`
//     <input class="update-todo-input todo-input" type="text"  />
//     <div class="icon__container">
//     <i class="fa-solid fa-plus addicon"></i>
//       <i class="fa-solid fa-pen-to-square" onClick="update()"></i>
//     </div>
//     `;
//    }
//    else{
//     Toupdate.innerHTML=`
//     <p> ${inputValue} </p>
//     <div class="icon__container">
//     <i class="fa-solid fa-plus addicon"></i>
//       <i class="fa-solid fa-pen-to-square" onClick="update()"></i>
//     </div>
//     `;
//    }

//   let addicon =Toupdate.querySelector(".addicon");
  
//   addicon.addEventListener("click",()=>{

//       let todoUpdateInput= Toupdate.querySelector(".update-todo-input").value ;
//       Toupdate.innerHTML=`
//       <p> ${inputValue}${todoUpdateInput} </p>
//       <div class="icon__container">
//       <i class="fa-solid fa-x remove"></i>
//         <i class="fa-solid fa-pen-to-square" onClick="update()"></i>
//       </div>
//       `;
//   })

    let todoText = liToUpdate.querySelector('p');
    let todoUpdateInput = liToUpdate.querySelector('.update-todo-input').value;

    if (todoUpdateInput.trim() !== '') {
        todoText.textContent = todoUpdateInput;
    } else {
        alert('Please enter a valid todo.');
    }



}