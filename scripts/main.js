//remove preloader once page has loaded
window.addEventListener("load", () => {
  document.querySelector(".loading-screen").style.display = "none";
});

//hamburger menu variables
const hamburger = document.querySelector(".hamburger");
const navOpenOverlay = document.querySelector(".nav-open-overlay");
const sideMenuBg = document.querySelector(".side-menu-bg");
const navMenu = document.querySelector(".nav-menu");

//close nav function
function closeNav() {
    hamburger.classList.remove("active");
    navOpenOverlay.classList.remove("active");
    navMenu.classList.remove("active");
    sideMenuBg.classList.remove("active");
}

//toggle nav menu when hamburger is clicked
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navOpenOverlay.classList.toggle("active");
    navMenu.classList.toggle("active");
    sideMenuBg.classList.toggle("active");
});

//close nav when background is clicked
navOpenOverlay.addEventListener("click", closeNav);

//close nav when a link is clicked
document.querySelectorAll(".nav-link").forEach(function(a) {
    a.addEventListener("click", closeNav);
});

//dark mode function
const darkModeSwitch = document.getElementById("checkbox");
const currentMode = localStorage.getItem("mode") ? localStorage.getItem("mode") : null;
const projectImg = document.querySelectorAll(".project-card-image img");

if (currentMode) {
    document.documentElement.setAttribute("mode", currentMode);

    if (currentMode === "dark") {
        darkModeSwitch.checked = true;
        projectImg.forEach(a => a.style.filter = "brightness(0.85)");
    }
}

function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("mode", "dark");
        localStorage.setItem("mode", "dark");
        projectImg.forEach(a => a.style.filter = "brightness(0.85)");
    } else {
        document.documentElement.setAttribute("mode", "light");
        localStorage.setItem("mode", "light");
        projectImg.forEach(a => a.style.filter = "brightness(1)");
    }
}

darkModeSwitch.addEventListener("change", switchMode, false);

//showcasesection, vector animations
const showcase = document.querySelectorAll(".showcase");
const avatar = document.getElementById("avatar");
const eyebrows = document.querySelector(".eyebrows");
const lightbulb = document.getElementById("lightbulb");

showcase.forEach(function(a) {
    a.addEventListener("mouseover", () => {
        avatar.style.filter = "brightness(1)";
        eyebrows.style.transform = "translateY(-0.2em)";
        lightbulb.classList.add("lightbulb-on");
        document.querySelector(".lightbulb-color").style.opacity = "1";
        document.querySelector(".lightbulb-shine").style.opacity = "1";
    });

    a.addEventListener("mouseleave", () => {
        avatar.style.filter = "brightness(0.93)";
        eyebrows.style.transform = "translateY(0)";
        lightbulb.classList.remove("lightbulb-on");
        document.querySelector(".lightbulb-color").style.opacity = "0";
        document.querySelector(".lightbulb-shine").style.opacity = "0";
    });
});

//filter projects when a filter is chosen
const projectCards = document.querySelectorAll(".project-card");

function filterProjects(className) {
    if (className == 'all') {
        projectCards.forEach(a => {
            a.classList.remove("hide");
        });
    } else {
        projectCards.forEach(a => {
            if (a.classList.contains(className) == false) {
                a.classList.add("hide");
            } else {
                a.classList.remove("hide");
            }
        });
    } 
}