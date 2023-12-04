//Alanah code starts here;
//Script for navbar when collasped, inprired from: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function Navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className === "topnav"
    }
}

//Functions for back to top buttom, inspried from: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp


let mybutton = document.getElementById("topbutton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

//Code for review button accordions style 
//Done on Dec 3,2023
//From https://www.w3schools.com/w3css/w3css_accordions.asp 
function Accordion(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("panel-show") == -1) {
    x.className += " panel-show";
  } else { 
    x.className = x.className.replace("panel-show", "");
  }
}
