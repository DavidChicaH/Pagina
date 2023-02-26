const burgerMenu = (menu, menuList) => {
  const $hamburguer = document.querySelector(menu);
  const $navMenu = document.querySelector(menuList);
  
  $hamburguer.addEventListener("click", () => {
      $hamburguer.classList.toggle("active");
      $navMenu.classList.toggle("active");
  })
}

export default burgerMenu;
