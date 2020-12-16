//-------------MENU-------------

document.getElementById("icon-menu").addEventListener("click", show_menu);

function show_menu() {
  document
    .getElementById("move-content")
    .classList.toggle("move-container-all");
  document.getElementById("show-menu").classList.toggle("show-lateral");
}

//-----------BROWSER---------------

//Executing functions
document.getElementById("icon-search").addEventListener("click", show_browser);
document
  .getElementById("cover-ctn-search")
  .addEventListener("click", ocultar_buscador);

//vars
cover_ctn_search = document.getElementById("cover-ctn-search");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");
icon_search = document.getElementById("icon-search");

//-----Function show browser-------
function show_browser() {
  inputSearch.style.display = "block";
  cover_ctn_search.style.display = "block";
  inputSearch.focus();

  if (inputSearch.value === "") {
    box_search.style.display = "none";
  }
}

//----Funcion para ocultar el buscador-----
function ocultar_buscador() {
  inputSearch.style.display = "none";
  cover_ctn_search.style.display = "none";
  inputSearch.value = "";
  box_search.style.display = "none";
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
