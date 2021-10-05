// JavaScript Document
// Hieronder halen we de benodigde elementen op waar we later een class op gaan zetten.
var hamburgerMenu = document.querySelector("header button");
var deNav = document.querySelector("section:first-of-type");
var deHeader = document.querySelector("header");
var deContent = document.querySelector("section:nth-of-type(2)");
var deFooter = document.querySelector("footer");
var deArticle = document.querySelector("article")
var overviewDropdown = document.querySelector("article span");

// Hier zeggen we dat bij het klikken op de opgehaalde elementen, de onderstaande functies uit moeten worden gevoerd.
hamburgerMenu.addEventListener("click", toggleMenu);
overviewDropdown.addEventListener("click", toggleDropdown);

// Deze function zet bij klikken van het hamburgermenu de class 'toonMenu' op de bovenstaande met querySelector geselecteerde elementen aan- en uit.
function toggleMenu() {
    hamburgerMenu.classList.toggle("menuOpen");
    deNav.classList.toggle("toonMenu");
    deHeader.classList.toggle("toonMenu");
    deContent.classList.toggle("toonMenu");
    deFooter.classList.toggle("toonMenu");
    deArticle.classList.toggle("toonMenu")
}

// Deze function zorgt ervoor dat er een klass op de variable overviewDropdown word gezet.
function toggleDropdown() {
    overviewDropdown.classList.toggle("toonDropdown");
}
