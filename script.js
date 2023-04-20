const toggleButton = document.querySelector("input[type=checkbox]");
const bigCards = document.querySelectorAll(".card-big");

toggleButton.addEventListener("change", () => {
  darkModeOn();
});

function darkModeOn() {
  bigCards.forEach(bigCard => {
    bigCard.classList.toggle("card-bg-light");
    bigCard.classList.toggle("card-bg-dark");
})};