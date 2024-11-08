"use strict"

const btn = document.querySelector(".add-icon-btn");
const links = document.querySelector(".links");

btn.addEventListener("click", () => {
    links.classList.toggle("active-links");
    btn.classList.toggle("active-btn");
})