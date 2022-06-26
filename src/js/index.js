const burger = document.querySelector(".menu_burger");
const menu = document.querySelector(".menu");
burger.addEventListener("click", (e) => {
  e.preventDefault;
  menu.classList.toggle("menu_disable");
});
