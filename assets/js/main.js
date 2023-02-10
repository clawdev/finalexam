var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
    document.getElementById("logo").src = "https://i.ibb.co/V2j5kKJ/logo-white.png";
} else {
    themeToggleDarkIcon.classList.remove('hidden');
    document.getElementById("logo").src = "assets/images/logo.png";
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            document.getElementById("logo").src = "https://i.ibb.co/V2j5kKJ/logo-white.png";
            localStorage.setItem('color-theme', 'dark');
            localStorage.setItem('logo-src', 'https://i.ibb.co/V2j5kKJ/logo-white.png');

        } else {
            document.documentElement.classList.remove('dark');
            document.getElementById("logo").src = "/assets/images/logo.png";
            localStorage.setItem('color-theme', 'light');
            localStorage.setItem('logo-src', '/assets/images/logo.png');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            document.getElementById("logo").src = "/assets/images/logo.png";
            localStorage.setItem('color-theme', 'light');
            ocalStorage.setItem('logo-src', '/assets/images/logo.png');
        } else {
            document.documentElement.classList.add('dark');
            document.getElementById("logo").src = "https://i.ibb.co/V2j5kKJ/logo-white.png";
            localStorage.setItem('color-theme', 'dark');
            localStorage.setItem('logo-src', 'https://i.ibb.co/V2j5kKJ/logo-white.png');
        }
    }
    
});


history.pushState(null, "", location.href.split("?")[0]);

var currentUrl = window.location.href;
var newUrl = currentUrl.replace(".html", "");
window.history.pushState({}, "", newUrl);


const hamburgerButton = document.querySelector("#hamburger-toggle");
const navbar = document.querySelector("#navbar-hamburger");

hamburgerButton.addEventListener("click", function() {
    hamburgerButton.classList.toggle("is-active");
    navbar.classList.toggle("hidden");
});


window.location.href = "/contact";