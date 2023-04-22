const toggleButton = document.querySelector("input[type=checkbox]");
const body = document.querySelector("body");

toggleButton.addEventListener("change", () => darkModeOn());

function darkModeOn() {
  body.classList.toggle("dark-mode");
};