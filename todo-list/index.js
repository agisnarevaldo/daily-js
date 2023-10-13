document.addEventListener("DOMContentLoaded", function () {
  const todo = document.getElementById("todo");
  const btnAdd = document.getElementById("btn-add");
  const todoList = document.getElementById("todo-list");

  btnAdd.addEventListener("click", function() {
    const task = todo.value.trim();
    if (task != 0) {
      const li = document.createElement("li");
      li.innerHTML = `
          <span>${task}</span>
          <button class="complete-button">☑️ </button>
          <button class="delete-button">❌</button>
        `;
      todoList.appendChild(li);
      todo.value = "";

      // event listener untuk complete dan delelte
      const btnDone = li.querySelector(".complete-button");
      btnDone.addEventListener("click", function () {
        li.classList.toggle("completed");
      });

      const btnDel = li.querySelector(".delete-button");
      btnDel.addEventListener("click", function () {
        li.remove();
      })
    }
  });
  
});
