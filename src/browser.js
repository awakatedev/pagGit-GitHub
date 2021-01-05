// GLOBAL
let cover_ctn_search = document.getElementById("cover-ctn-search");
let inputSearch = document.getElementById("inputSearch");
let box_search = document.getElementById("box-search");
let icon_search = document.getElementById("icon-search");

//-----------BROWSER---------------

//Executing functions
document.getElementById("icon-search").addEventListener("click", show_browser);
document.getElementById("inputSearch").addEventListener("click", show_browser);
document
  .getElementById("cover-ctn-search")
  .addEventListener("click", close_browser);

//-----Function show browser-------
function show_browser() {
  let x = window.matchMedia("(max-width: 650px)").matches;

  if (x) {
    inputSearch.style.display = "block";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
  } else {
    inputSearch.style.dispaly = "block";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
  }
}

//----Function close browser-----
function close_browser() {
  let y = window.matchMedia("(max-width: 650px)").matches;

  if (y) {
    inputSearch.style.display = "none";
    cover_ctn_search.style.display = "none";
    box_search.style.display = "none";
  } else {
    inputSearch.style.display = "block";
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
