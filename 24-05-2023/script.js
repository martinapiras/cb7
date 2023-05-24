import {
  getList,
  createListItem,
  createNewTodoForm,
  postTodo,
  createNewTodo,
} from "./fn.js";

export const listWrapperEl = document.createElement("div");
export const listEl = document.createElement("ul");

listWrapperEl.className = "listWrapper";
listEl.className = "list";

listWrapperEl.appendChild(listEl);
document.body.appendChild(listWrapperEl);

/////////////////////////////////////
// APPENDS TO-DO LIST FROM DUMMYJSON
getList().then((listData) =>
  listData.todos.forEach((todo) => listEl.append(createListItem(todo)))
);

// APPENDS NEW TO-DO FORM
createNewTodoForm();
export const todoFormEl = document.querySelector(".addTodo");

// ADDS A NEW TO-DO
todoFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.target[0].value.length >= 1) {
    let newTodo = e.target[0].value;
    listEl.append(createNewTodo(`${newTodo}`));
    e.target[0].value = "";
    postTodo(`${newTodo}`);
  }
});

// DELETES A TO-DO
