//-------------MENU-------------
const menu_block = document.getElementById("show-menu");
const icon_close_menu = document.getElementById("close-menu_icon");
const icon_menu = document.getElementById("menu_icon");

icon_menu.addEventListener("click", function () {
  menu_block.style.display = "block";
  cover_ctn_carousel.style.display = "block";

  if ((menu_block.style.display = "block")) {
    icon_menu.style.display = "none";
    icon_close_menu.style.display = "block";
  }
});

icon_close_menu.addEventListener("click", close_menu);
document
  .getElementById("cover-ctn-slides")
  .addEventListener("click", close_menu);

function close_menu() {
  if ((menu_block.style.display = "block")) {
    menu_block.style.display = "none";
    cover_ctn_carousel.style.display = "none";
    icon_close_menu.style.display = "none";
    icon_menu.style.display = "block";
  }
}
