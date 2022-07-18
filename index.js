const inputTodo = document.getElementById("input-todo");
const addbtn = document.getElementById("button-addon1");
const todolist = document.querySelector(".display");
const deleteAllTask = document.getElementById("deleteAllBtn");

inputTodo.onkeyup = () => {
  let input = inputTodo.value;
};
showTodo();

function addtodo() {
  let userTodo = inputTodo.value;
  let getTodoFromLS = localStorage.getItem("New Todo");
  if (getTodoFromLS === null) {
    todoArr = [];
  } else {
    todoArr = JSON.parse(getTodoFromLS);
  }
  todoArr.push(userTodo);
  localStorage.setItem("New Todo", JSON.stringify(todoArr));
  showTodo();
}

//code for show the todo which we added

function showTodo() {
  let getTodoFromLS = localStorage.getItem("New Todo");
  if (getTodoFromLS === null) {
    todoArr = [];
  } else {
    todoArr = JSON.parse(getTodoFromLS);
  }
  const pendingTask = document.querySelector(".pending-task");
  pendingTask.textContent = todoArr.length;

  let newh1Tag = "";
  todoArr.forEach((element, index) => {
    newh1Tag += `<h1 class="h5">${element} <span onclick = "deleteTask(${index})"><i class="fa-solid fa-trash"></i></span></h1>`;
  });

  todolist.innerHTML = newh1Tag;
  inputTodo.value = "";
}

//code for delete the particular todo

function deleteTask(index) {
  let getTodoFromLS = localStorage.getItem("New Todo");
  todoArr = JSON.parse(getTodoFromLS);
  todoArr.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(todoArr));
  showTodo();
}

//code for deleting all the todos

deleteAllTask.onclick = () => {
  todoArr = [];
  localStorage.setItem("New Todo", JSON.stringify(todoArr));
  showTodo();
};
