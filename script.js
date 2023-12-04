//Alanah code starts here;
//Script for navbar when collasped, inprired from: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function Navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className === "navbar"
    }
}

//Functions for back to top buttom, inspried from: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp




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

//Jordan's code starts here
// submit alert function for contact us form
// alert function idea from https://www.w3schools.com/js/tryit.asp?filename=tryjs_alert
function submitalert() {
  alert("Your message has been submitted!");
}
//Jordan's code ends here
