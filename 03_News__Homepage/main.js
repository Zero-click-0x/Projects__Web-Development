let hamburger = document.querySelector(".hamberger");
let menu = document.querySelector(".navBar__list");
let cross = document.querySelector(".cross");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
  cross.classList.add("active");
  hamburger.classList.remove("active");
});

cross.addEventListener("click", () => {
  menu.classList.remove("active");
  cross.classList.remove("active");
  hamburger.classList.add("active");
});
