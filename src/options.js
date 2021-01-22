//-------------MENU-------------

document.getElementById("menu_icon").addEventListener("click", function() {
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
});
document
  .getElementById("close-menu_icon")
  .addEventListener("click", close_menu);
document.getElementById("cover-ctn-menu").addEventListener("click", close_menu);


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

//SLIDES INFO
const cover_ctn_carousel = document.getElementById("cover-ctn-slides");
const slide_info_one = document.getElementById("slide-info_one");
const slide_info_two = document.getElementById("slide-info_two");
const slide_info_three = document.getElementById("slide-info_three");

document
  .getElementById("slides-info-carousel_one")
  .addEventListener("click", function() {
  cover_ctn_carousel.style.display = "block";
  slide_info_one.style.display = "block";
});

document
  .getElementById("slides-info-carousel_two")
  .addEventListener("click", function() {
  cover_ctn_carousel.style.display = "block";
  slide_info_two.style.display = "block";
});

document
  .getElementById("slides-info-carousel_three")
  .addEventListener("click", function() {
  cover_ctn_carousel.style.display = "block";
  slide_info_three.style.display = "block";
});

//---------------------------------------------------------------
document
  .getElementById("icon-close-slide-one")
  .addEventListener("click", close_what_is_github);
  document
  .getElementById("icon-close-slide-two")
  .addEventListener("click", close_what_is_github);
  document
  .getElementById("icon-close-slide-three")
  .addEventListener("click", close_what_is_github);
document
  .getElementById("cover-ctn-slides")
  .addEventListener("click", close_what_is_github);

function close_what_is_github() {
  if ((slide_info_one.style.display = "block")) {
    slide_info_one.style.display = "none";
    cover_ctn_carousel.style.display = "none";
  }
  if ((slide_info_two.style.display = "block")) {
    slide_info_two.style.display = "none";
    cover_ctn_carousel.style.display = "none";
  }
  if ((slide_info_three.style.display = "block")) {
    slide_info_three.style.display = "none";
    cover_ctn_carousel.style.display = "none";
  }
}
//-------------------------------------------------------------
//SLIDE REMOTE INFO
const slide = document.getElementById("commad-info_remote_config");
const cover_ctn_slide = document.getElementById("cover-ctn-slide");

document
.getElementById("blocks-commands-info_remote_config")
.addEventListener("click", function() {
cover_ctn_slide.style.display = "block";
slide.style.display = "block";
});

document
.getElementById("cover-ctn-slide")
.addEventListener("click", close_slide_remote);

document
.getElementById("icon-close-slides-remote")
.addEventListener("click", close_slide_remote);

function close_slide_remote() {
  if ((slide.style.display = "block")) {
    slide.style.display = "none";
    cover_ctn_slide.style.display = "none";
    console.log("hello");
  }
}
