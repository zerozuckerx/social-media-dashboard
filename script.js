//***** VARIABLES *****
const toggleBtn = document.querySelector("input[type=checkbox]");
const body = document.querySelector("body");
let darkMode = localStorage.getItem("dark-mode");

toggleBtn.addEventListener("change", () => darkModeSwitch());


//***** FUNCTIONS *****
if(localStorage.getItem("dark-mode") === "enabled") {
  toggleBtn.checked = true;
  body.classList.add("dark-mode-theme");
} //check if dark-mode is already on when visiting page

function darkModeSwitch() {
  darkMode = localStorage.getItem("dark-mode");
  if(darkMode === "disabled") {
    enableDarkMode();
    console.log("enable");
  } else {
    disableDarkMode()
    console.log("disable");
  }
}

function enableDarkMode() {
  body.classList.add("dark-mode-theme")
  localStorage.setItem("dark-mode", "enabled");
}

function disableDarkMode() {
  body.classList.remove("dark-mode-theme")
  localStorage.setItem("dark-mode", "disabled");
}