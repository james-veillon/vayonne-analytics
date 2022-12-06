/*
CONSTANTS
*/
var HEADER_2_STANDARD = "&nbsp;Timing Services for Active Traders";
var HEADER_2_MOBILE = "&nbsp;Market Timing Services";

/* 
All content is loaded as a SPA. This func is called to show the div 
selected by the menu bttn and hide all others
*/
function showDiv(idName) {
  var i;
  let x = document.getElementsByClassName("content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(idName).style.display = "block";
}

/*
When a nav bar bttn is clicked, add a white border around it and 
remove borders from all others.
*/
function addBorder(idName) {
  /* remove others */
  var i, e;
  let x = document.getElementsByClassName("menuBttn");
  for (i = 0; i < x.length; i++) {
    e = document.getElementById(x[i].id);
    e.classList.remove("w3-border", "w3-border-khaki");
  }
  /* add border to clicked bttn*/
  e = document.getElementById(idName);
  e.classList.add("w3-border", "w3-border-khaki");
}

/*
if window width < 725, switch from standard button menu to hamburger menu
*/
function setMenu() {
  var w = window.innerWidth;
  if (w < 725) {
    document.getElementById("bttn-menu").style.display = "none";
    document.getElementById("icon-menu").style.display = "block";
    document.getElementById("header2").innerHTML = HEADER_2_MOBILE;
  } else {
    document.getElementById("icon-menu").style.display = "none";
    document.getElementById("bttn-menu").style.display = "block";
    document.getElementById("header2").innerHTML = HEADER_2_STANDARD;
  }
}

/*
open and close sidebar
*/
function w3_open() {
  document.getElementById("side-menu").style.display = "block";
}

function w3_close() {
  document.getElementById("side-menu").style.display = "none";
}

function splashscreen() {
  document.getElementById('splashscreen').style.display = 'block';
}
