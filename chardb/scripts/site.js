window.onload = load_it();

function menu() {
    var x = document.getElementById("navmenu");
    if (x.className === "sidenav") {
        x.className += " responsive";
    } else {
        x.className = "sidenav";
    }
}

function linkclick(url) {
    jQuery(document).ready(function ($) {
        $("#container").load(url);
    });

}

function framerender(url) {
    jQuery(document).ready(function ($) {
        $("#container").load(url);
    });
}

function load_it() {
    jQuery(document).ready(function ($) {
        $("#container").load("home.html");
    });
}



function opennav() {
  document.getElementById("sidenav").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closenav() {
  document.getElementById("sidenav").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

window.onscroll = function() {scrolldo()};


function scrolldo() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("top").classList.add("w3-card-4", "w3-animate-opacity");
    document.getElementById("intro").classList.add("show-inline-block");
  } else {
    document.getElementById("intro").classList.remove("w3-show-inline-block");
    document.getElementById("top").classList.remove("w3-card-4", "w3-animate-opacity");
  }
}

function dropdown(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("show") == -1) {
    x.className += "show";
    x.previousElementSibling.className += " w3-theme";
  } else { 
    x.className = x.className.replace("show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace(" w3-theme", "");
  }
}