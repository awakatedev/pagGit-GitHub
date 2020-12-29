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

//-----------BROWSER---------------

//Executing functions
document.getElementById("icon-search").addEventListener("click", show_browser);
document.getElementById("inputSearch").addEventListener("click", show_browser);
document
  .getElementById("cover-ctn-search")
  .addEventListener("click", ocultar_buscador);

//vars
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");
icon_search = document.getElementById("icon-search");
x = window.matchMedia("(max-width: 650px)".matches);

//-----Function show browser-------
function show_browser(x) {
  if (inputSearch.value === "") {
    box_search.style.display = "none";
  }
  if (x) {
    inputSearch.style.display = "block";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
  } else {
    inputSearch.style.dispaly = "block";
    cover_ctn_search.style.display = "none";
  }
}

//----Funcion para ocultar el buscador-----
function ocultar_buscador(x) {
  // inputSearch.style.display = "block";
  // cover_ctn_search.style.display = "none";
  //  box_search.style.display = "none";
  if (x) {
    inputSearch.style.display = "none";
    cover_ctn_search.style.display = "none";
    box_search.style.display = "none";
  }
}
//executing function filtrer options
document
  .getElementById("inputSearch")
  .addEventListener("keyup", internal_browser);

function internal_browser() {
  filter = inputSearch.value.toUpperCase();
  li = box_search.getElementsByTagName("li");

  //selection for filtrer "li"
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      box_search.style.display = "block";

      if (inputSearch.value === "") {
        box_search.style.display = "none";
      }
    } else {
      li[i].style.display = "none";
    }
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
