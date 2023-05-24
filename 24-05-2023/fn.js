export const getList = async () => {
  const res = await fetch("https://dummyjson.com/todos");
  const listData = await res.json();

  return listData;
};

export const createListItem = (todos) => {
  const listItemEl = document.createElement("li");
  listItemEl.className = "todo";
  listItemEl.textContent = todos.todo;

  if (todos.completed) {
    listItemEl.classList.add("completed");
  }

  return listItemEl;
};

export const createNewTodoForm = () => {
  const addTodoEl = document.createElement("form");
  const labelEl = document.createElement("label");
  const inputEl = document.createElement("input");
  const submitEl = document.createElement("input");

  addTodoEl.className = "addTodo";
  labelEl.className = "newTodoLabel";
  labelEl.setAttribute("for", "newTodo");
  labelEl.textContent = "Add something else:";
  inputEl.className = "newTodo";
  inputEl.setAttribute("type", "text");
  submitEl.className = "newTodoSubmit";
  submitEl.setAttribute("type", "submit");
  submitEl.setAttribute("value", "Add to list");

  addTodoEl.append(labelEl, inputEl, submitEl);

  return document.body.appendChild(addTodoEl);
};

export const createNewTodo = (newTodo) => {
  const listItemEl = document.createElement("li");
  listItemEl.className = "todo";
  listItemEl.textContent = newTodo;

  return listItemEl;
};

export const postTodo = async (todoText) => {
  const res = await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: todoText,
      completed: false,
      userId: Math.floor(Math.random() * 100),
      id: Math.floor(Math.random() * (1500 - 31) + 31),
    }),
  });
  const data = await res.json();

  return console.log("POST successful");
};
