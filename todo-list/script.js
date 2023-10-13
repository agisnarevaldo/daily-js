const todos = [];

const ul = document.getElementById("todos");

function addTodo() {
  const todo = document.getElementById("todo").value;
  // const todoItem = document.getElementById("todo-item");

  console.info(todo);

  todos.push(todo);

  // todoItem.innerText = todo;
  
  console.info(todos);

  showTodo();
  
}

function showTodo() {
  for (const item of todos) {
    const li = document.createElement("li");
    li.innerText = item;

    ul.appendChild(li);
  }
}

// ❌
