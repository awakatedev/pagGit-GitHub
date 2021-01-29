//-------------MENU-------------
const menu_block = document.getElementById("show-menu");
const icon_close_menu = document.getElementById("close-menu_icon");
const icon_menu = document.getElementById("menu_icon");

icon_menu.addEventListener("click", function() {

  menu_block.style.display = "block";
  cover_ctn_carousel.style.display = "block";

  if ((menu_block.style.display = "block")) {
    icon_menu.style.display = "none";
    icon_close_menu.style.display = "block";
  }
});

icon_close_menu.addEventListener("click", close_menu);
document.getElementById('cover-ctn-slides').addEventListener("click", close_menu);

function close_menu() {

  if ((menu_block.style.display = "block")) {
    menu_block.style.display = "none";
    cover_ctn_carousel.style.display = "none";
    icon_close_menu.style.display = "none";
    icon_menu.style.display = "block";
  }
}
//-_-_-_-_-_-_-###########-_-_-_-_-_-_-_-_-_
const show_telegram = document.getElementById("show-my-telegram");
const button_telegram = document.getElementById("icon-show_telegram");

const show_Email = document.getElementById("show-my-email");
const button_Email = document.getElementById("icon-show_Email");

button_telegram.addEventListener("click", function(){
show_telegram.style.display = "block"});

button_Email.addEventListener("click", function(){
show_Email.style.display = "block"});
