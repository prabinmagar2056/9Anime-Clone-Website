"use strict";


// sub-menu-responsive

const navigation_container = document.querySelector("#navigation-container");
const login_container = document.querySelector(".login-container");

navigation_container.addEventListener('click', e => {
    e.preventDefault();

    // main navigation display or hide 
    if(e.target.id === "toggle-icon-bar") {
        e.target.parentElement.nextElementSibling.classList.toggle("navigation_Show_Hide");
    }
    // navigation genere sub links display or hide
    if(e.target.id === "genere") {
        e.target.parentElement.firstElementChild.nextElementSibling.classList.toggle("genere-container-show-hide");
    }
    // navigation types sub links dispaly or hide
    if(e.target.id === "types") {
        e.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.classList.toggle("types-container-show-hide");
    }

    //search bar
    if(e.target.id === "toggle-search-icon") {
        e.target.parentElement.firstElementChild.firstElementChild.classList.toggle("show_hide_seach-bar");
    }

    // sign-in-register
    if(e.target.id === "sign-btn" || e.target.id === "sign-text" || e.target.id === "sign-icon") {
        login_container.style.visibility = "visible";
        login_container.firstElementChild.style.transform = "translateY(10%)";
    }

    login_container.addEventListener('click', e => {
        if(e.target.id === "crossbar") {
            e.target.parentElement.parentElement.style.visibility = "hidden";
            e.target.parentElement.style.transform = "translateY(-10%)";
        }
    });
    
});


// image slider function
const sliders = document.querySelectorAll('.slider');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
    currentIndex = index;
    sliders.forEach((slider, i) => {
        if (i === index) {
            slider.style.display = 'block';
        } else {
            slider.style.display = 'none';
        }
    });

    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= sliders.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = sliders.length - 1;
    }
    showSlide(currentIndex);
}

showSlide(currentIndex);