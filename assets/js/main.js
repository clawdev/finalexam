
history.pushState(null, "", location.href.split("?")[0]);
//window.location.href.split('#')[0];

/*var currentUrl = window.location.href;
var newUrl = currentUrl.replace(".html", "");
window.history.pushState({}, "", newUrl);*/


const hamburgerButton = document.querySelector("#hamburger-toggle");
const navbar = document.querySelector("#navbar-hamburger");

hamburgerButton.addEventListener("click", function() {
    hamburgerButton.classList.toggle("is-active");
    navbar.classList.toggle("hidden");
});

// Typewriter effect

//End typewriter effect


