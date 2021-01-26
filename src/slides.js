const cover_ctn_carousel = document.getElementById("cover-ctn-slides");

//####SLIDES INSTALL GIT####
  const install_slide_one = document.getElementById("install-slide-one");
  const install_slide_two = document.getElementById("install-slide-two");
  const install_slide_three = document.getElementById("install-slide-three");
document
  .getElementById("install-button-one")
  .addEventListener("click", function() {
  cover_ctn_carousel.style.display = "block";
  install_slide_one.style.display = "block";
});

document
  .getElementById("install-button-two")
  .addEventListener("click", function() {
  cover_ctn_carousel.style.display = "block";
  install_slide_two.style.display = "block";
});

document
  .getElementById("install-button-three")
  .addEventListener("click", function() {
  cover_ctn_carousel.style.display = "block";
  install_slide_three.style.display = "block";
});

//---------------------------------------------------------------
document
  .getElementById("icon-close-slide")
  .addEventListener("click", close_install_window);
document
  .getElementById("cover-ctn-slides")
  .addEventListener("click", close_install_window);

function close_install_window() {
  if ((install_slide_one.style.display = "block")) {
    install_slide_one.style.display = "none";
    cover_ctn_carousel.style.display = "none";
  }
  if ((install_slide_two.style.display = "block")) {
    install_slide_two.style.display = "none";
    cover_ctn_carousel.style.display = "none";
  }
  if ((install_slide_three.style.display = "block")) {
    install_slide_three.style.display = "none";
    cover_ctn_carousel.style.display = "none";
  }
}
//###CAROUSEL####
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

//####SLIDES INFO WHAT IS GITHUB####
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
  .getElementById("icon-close-slide")
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
//####SLIDE CONFIGURE####
const slide_config = document.getElementById("slide-configure");

document
.getElementById("button-configure")
.addEventListener("click", function() {
cover_ctn_carousel.style.display = "block";
slide_config.style.display = "block";
});

document
.getElementById("cover-ctn-slides")
.addEventListener("click", close_slide_configure);
document
.getElementById("icon-close-slide")
.addEventListener("click", close_slide_configure);

function close_slide_configure() {
  if ((slide_config.style.display = "block")) {
    slide_config.style.display = "none";
    cover_ctn_carousel.style.display = "none";
  }
}
//####SLIDE REMOTE INFO#####
const slide_remote = document.getElementById("commad-info_remote_config");

document
.getElementById("blocks-commands-info_remote_config")
.addEventListener("click", function() {
cover_ctn_carousel.style.display = "block";
slide_remote.style.display = "block";
});

document
.getElementById("cover-ctn-slides")
.addEventListener("click", close_slide_remote);

document
.getElementById("icon-close-slide")
.addEventListener("click", close_slide_remote);

function close_slide_remote() {
  if ((slide_remote.style.display = "block")) {
    slide_remote.style.display = "none";
    cover_ctn_carousel.style.display = "none";
  }
}
