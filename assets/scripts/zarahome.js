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

//sidebar functionality
//1
let newIN = document.getElementById("newIn");
newIN.addEventListener("click", newInFun)

function newInFun(){
    var openCon = document.querySelector("#newOpen");
    if(openCon.style.display==="none"){
        openCon.style.display = "block";
    }
    else{
        openCon.style.display = "none";
    }
}
//2
let bedroom = document.getElementById("bedroom");
bedroom.addEventListener("click",bedroomOpen)
function bedroomOpen(){
    var openbedr = document.querySelector("#openRoom");
    if(openbedr.style.display==="none"){
        openbedr.style.display = "block";
    }
    else{
        openbedr.style.display = "none";
    }
}
//3
let cloth = document.getElementById("clothing");
cloth.addEventListener("click", clothOpen);
function clothOpen(){
    var openbedr = document.querySelector("#openClothing");
    if(openbedr.style.display==="none"){
        openbedr.style.display = "block";
    }
    else{
        openbedr.style.display = "none";
    }
}
//4
let livingRoom = document.getElementById("livingroom");
livingRoom.addEventListener("click", lrOpen)
function lrOpen(){
    var openbedr = document.querySelector("#openliving");
    if(openbedr.style.display==="none"){
        openbedr.style.display = "block";
    }
    else{
        openbedr.style.display = "none";
    }
}
//5
let dinning = document.getElementById("dinning");
dinning.addEventListener("click", dinningOpen)
function dinningOpen(){
    var openbedr = document.querySelector("#openDinning");
    if(openbedr.style.display==="none"){
        openbedr.style.display = "block";
    }
    else{
        openbedr.style.display = "none";
    }
}
//6
let bathroom = document.getElementById("bath")
bathroom.addEventListener("click", openBath)
function openBath(){
    var openbedr = document.querySelector("#openbathroom");
    if(openbedr.style.display==="none"){
        openbedr.style.display = "block";
    }
    else{
        openbedr.style.display = "none";
    }
}
//7
let kidsSection = document.getElementById("kidsSec")
kidsSection.addEventListener("click", openKidsSec)
function openKidsSec(){
    var openbedr = document.querySelector("#openkidsSec");
    if(openbedr.style.display==="none"){
        openbedr.style.display = "block";
    }
    else{
        openbedr.style.display = "none";
    }
}
//8
let infoSec = document.getElementById("information")
infoSec.addEventListener("click", openInfor)
function openInfor(){
    var openbedr = document.querySelector("#openInfo");
    if(openbedr.style.display==="none"){
        openbedr.style.display = "block";
    }
    else{
        openbedr.style.display = "none";
    }
}
