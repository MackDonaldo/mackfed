// JavaScript Document
var hamburgerMenu = document.querySelector("header i:first-of-type");
var deNav = document.querySelector("section:first-of-type");
var deHeader = document.querySelector("header");
var deContent = document.querySelector("section:nth-of-type(2)");
var deFooter = document.querySelector("footer");
var deArticle = document.querySelector("article")
var overviewDropdown = document.querySelector("article span");

hamburgerMenu.addEventListener("click", toggleMenu);
overviewDropdown.addEventListener("click", toggleDropdown);

function toggleMenu() {
    deNav.classList.toggle("toonMenu");
    deHeader.classList.toggle("toonMenu");
    deContent.classList.toggle("toonMenu");
    deFooter.classList.toggle("toonMenu");
    deArticle.classList.toggle("toonMenu")
}

function toggleDropdown() {
    overviewDropdown.classList.toggle("toonDropdown");
}

