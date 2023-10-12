console.log("hello");
const btn = document.getElementById("btn");
let h2 = document.getElementById("h2");

function showAge() {
  let age = document.getElementById("age").value;
  h2.innerText = age;

  if (age <= 45) {
    h2.innerText = "anda masih muda";
  } else {
    h2.innerText = "anda sudah tua";
  }
}

