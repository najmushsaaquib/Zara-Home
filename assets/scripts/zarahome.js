let art = document.getElementById("homepageimg");
art.addEventListener("click", artofliving)
function artofliving(){
    window.location.href = "/assets/pages/the-art-of-living.html"
}
//----------------------------------------------------------------


//sidebar code
let menuBtn = document.getElementById("menuopenDiv");
menuBtn.addEventListener("mouseover", menuOpen)
function menuOpen (){
var cMenu = document.getElementById("closemenu")
var menuSide = document.getElementById("menubar")
menuSide.classList.add("menuactive");

cMenu.style.display = "block";
}

var cMenu = document.getElementById("closemenu")
cMenu.addEventListener("mouseout", menuClose)
function menuClose(){
var menuSide = document.getElementById("menubar")
menuSide.classList.remove("menuactive")
cMenu.style.display = "none"
}