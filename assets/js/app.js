// ----- meters counter logic
// const element = document.getElementById("counter__number");

// window.onload = () => {
//     setInterval(count, 100);
// };

// let counter = 0;
// function count() {
//     counter++;
//     //console.log(counter)
//     element.innerHTML = counter;
// }


// ----- NAV COLOR ON SCROLL 
const navbar = document.getElementById("navbar")
window.addEventListener("scroll", changeNavBg);

function changeNavBg() {
    if (window.scrollY >= 160) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
};

// ----- MOBILE MENU
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#navMenu");
const navLink = document.querySelectorAll(".nav-link");
const logo = document.querySelector('#logo');

hamburger.addEventListener("click", openMenu);

function openMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navbar.classList.add("active");
}

//closing logic
navLink.forEach((n) => n.addEventListener("click", closeMenu));
logo.addEventListener('click',closeMenu);

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("active");
}