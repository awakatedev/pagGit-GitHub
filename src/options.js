//-------------MENU-------------

document.getElementById("menu_icon").addEventListener("click", show_menu);
document
  .getElementById("close-menu_icon")
  .addEventListener("click", close_menu);
document.getElementById("cover-ctn-menu").addEventListener("click", close_menu);

function show_menu() {
  let menu_block = document.getElementById("show-menu");
  let icon_close_menu = document.getElementById("close-menu_icon");
  let icon_menu = document.getElementById("menu_icon");
  let cover_ctn_menu = document.getElementById("cover-ctn-menu");

  menu_block.style.display = "block";
  cover_ctn_menu.style.display = "block";

  if ((menu_block.style.display = "block")) {
    icon_menu.style.display = "none";
    icon_close_menu.style.display = "block";
  }
}

function close_menu() {
  let menu_block = document.getElementById("show-menu");
  let icon_close_menu = document.getElementById("close-menu_icon");
  let icon_menu = document.getElementById("menu_icon");
  let cover_ctn_menu = document.getElementById("cover-ctn-menu");

  if ((menu_block.style.display = "block")) {
    menu_block.style.display = "none";
    cover_ctn_menu.style.display = "none";
    icon_close_menu.style.display = "none";
    icon_menu.style.display = "block";
  }
}

//CAROUSEL
let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;

document
  .getElementById("carousel__button--next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });
document
  .getElementById("carousel__button--prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel__item--visible");
    slide.classList.add("carousel__item--hidden");
  }

  slides[slidePosition].classList.add("carousel__item--visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}