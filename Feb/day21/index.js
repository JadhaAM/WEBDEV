const inputtodo = document.querySelector(".todo-input");
const add = document.querySelector(".addicon");
const todoparent = document.querySelector(".todo__list");
const deleteAll = document.querySelector(".delateall");
const todolength = document.querySelector("#todolength");
add.addEventListener("click", () => {
  let inputValue = inputtodo.value;
  if (inputValue.length == 0) {
    alert(" Write Something in todo input box");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `  <p> ${inputValue} </p>
              <div class="icon__container">
                <i class="fa-solid fa-x remove"></i>
                <i class="fa-solid fa-pen-to-square"></i>
              </div>
      `;
    todoparent.appendChild(li);
    inputtodo.value = "";

    // remove todo
    let remove = li.querySelector(".remove");
    remove.addEventListener("click", () => {
      todoparent.removeChild(li);
    });
  }
  todolength.innerHTML = `<p> You have ${todoparent.childNodes.length}  todos </p>`;
});

deleteAll.addEventListener("click", () => {
  todoparent.innerHTML = " ";
});