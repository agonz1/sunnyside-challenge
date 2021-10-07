const menu = document.querySelector(".collapsible");
const btn = document.querySelector(".hamburguer");

btn.addEventListener("click", () => {
menu.classList.toggle("collapsible-active");
console.log(menu);
});

const ul = document.querySelector(".collapsible ul");

ul.addEventListener("click", () => {
menu.classList.toggle("collapsible-active");
});
