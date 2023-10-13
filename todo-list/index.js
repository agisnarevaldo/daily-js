document.addEventListener("DOMContentLoaded", function () {
  const todo = document.getElementById("todo");
  const btnAdd = document.getElementById("btn-add");
  const todoList = document.getElementById("todo-list");

  btnAdd.addEventListener("click", function() {
    const task = todo.value.trim();
    if (task != 0) {
      const li = document.createElement("li");
      li.innerHTML = `
          <span class="item">${task}</span>
          <div class="btn-wrap">
            <button class="complete-button">
              <i class="fa-solid fa-check fa-lg"></i>
            </button>
            <button class="delete-button">
              <i class="fa-solid fa-x fa-lg"></i>
            </button>
          </div>
        `;
      todoList.appendChild(li);
      todo.value = "";

      // event listener untuk complete dan delelte
      const btnDone = li.querySelector(".complete-button");
      btnDone.addEventListener("click", function () {
        const item = li.querySelector(".item");
        item.classList.toggle("completed");
        // li.classList.toggle("completed");
      });

      const btnDel = li.querySelector(".delete-button");
      btnDel.addEventListener("click", function () {
        li.remove();
      })
    }
  });
  
});
