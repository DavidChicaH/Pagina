import burgerMenu from "./modules/burger_menu.js";
import scrollTopBtn from "./modules/scroll_top_btn.js";

document.addEventListener("DOMContentLoaded", e => {
  scrollTopBtn(".scroll-top-btn", ".icon");
})
burgerMenu(".hamburguer", ".navbar__ul");