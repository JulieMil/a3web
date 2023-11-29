//Alanah code starts here;
function NavbarHome() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
       x.className = "topnav";
    }
}

function NavbarSec() {
    var x = document.getElementById("SecTopNav");
    if (x.className === "topnav") {
         x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function NavbarThird() {
    var x = document.getElementById("ThirdTopNav");
    if (x.className === "topnav") {
         x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function NavbarFourth() {
    var x = document.getElementById("FourthTopNav");
    if (x.className === "topnav") {
         x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function NavbarFifth() {
    var x = document.getElementById("FifthTopNav");
    if (x.className === "topnav") {
         x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Functions for back to top buttom, inspried from: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp


let mybutton = document.getElementById("topbuton");
window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       mybutton.style.display = "block";
//     } else {
//       mybutton.style.display = "none";
//     }
//   }


function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
    panel.style.display = "none";
    } else {
    panel.style.display = "block";
    }
});
}