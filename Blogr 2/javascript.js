const arrow = document.querySelector(".arrow");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
const product = document.querySelector(".product");
const company = document.querySelector(".company");
const connect = document.querySelector(".connect");



product.addEventListener("click", productLinks);

function productLinks() {
    product.classList.toggle("active");
    arrow.classList.toggle("active");

}

company.addEventListener("click", companyLinks);

function companyLinks() {
    company.classList.toggle("active");
    arrow2.classList.toggle("active");
}


connect.addEventListener("click", connectLinks);

function connectLinks() {
    connect.classList.toggle("active");
    arrow3.classList.toggle("active");
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar_hidden");
const navBar = document.querySelector(".nav-bar")
const hero = document.querySelector(".hero")

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBar.classList.toggle("active");
    hero.classList.toggle("active");
}

const dropdown = document.querySelector(".dropbtn");

dropdown.addEventListener("click", moreLinks);

function moreLinks() {
dropdown.classList.toggle("active");
}

