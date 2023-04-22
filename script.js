const toggleButton = document.querySelector("input[type=checkbox]");
const body = document.querySelector("body");
const topCards = document.querySelector(".top-cards");

toggleButton.addEventListener("change", () => darkModeOn());

function darkModeOn() {
  body.classList.toggle("dark-mode");
  // topCards.classList.toggle("dark-mode");
};