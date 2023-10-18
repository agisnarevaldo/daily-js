const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
  btn.classList.toggle("btn-dark");
  if (btn.innerHTML === "Dark 🌙") {
    btn.innerHTML = "Light ☀️";
    btn.style.backgroundColor = "white";
    btn.style.color = "black";
  } else {
    btn.innerHTML = "Dark 🌙";
    btn.style.backgroundColor = "#001AFF";
    btn.style.color = "white";
  }
});
