// -----------------------------
// Part 2: Functions, Scope, Return Values
// -----------------------------

// Example: function with parameters and return
function calculateArea(width, height) {
  return width * height; // returns a value
}

// Example: global vs local scope
let globalMessage = "I am global!";

function scopeDemo() {
  let localMessage = "I am local!";
  console.log(globalMessage); // accessible
  console.log(localMessage);  // accessible only here
}
scopeDemo();
// console.log(localMessage); // ❌ Error: not defined

// -----------------------------
// Part 3: JS triggers CSS animations
// -----------------------------

// Animate box on button click
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  box.classList.add("animate");

  // remove class after animation ends (reusable)
  box.addEventListener("animationend", () => {
    box.classList.remove("animate");
  });
});

// Modal popup
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});
