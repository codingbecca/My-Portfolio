// Nav hamburgerburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

function showMenu() {
    ul.classList.toggle('show');
}

burger.addEventListener('click', showMenu);

// Close hamburger menu when a link is clicked

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

function hideMenu() {
    ul.classList.remove('show');
}

navLink.forEach((link) =>
    link.addEventListener('click', hideMenu));   