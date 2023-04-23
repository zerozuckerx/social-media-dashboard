localStorage.setItem("mode", "light-mode")
let mode = localStorage.getItem("mode"); //apparently not working
console.log(mode);

const toggleButton = document.querySelector("input[type=checkbox]");
const body = document.querySelector("body");

toggleButton.addEventListener("change", () => darkModeOn());

function darkModeOn() {
  if (localStorage.getItem("mode") === "light-mode") {
    localStorage.setItem("mode", "dark-mode")
    console.log("set to dark");
  } else {
    localStorage.setItem("mode", "light-mode")
    console.log("set to light");
  }
  body.classList.toggle("dark-mode");
};