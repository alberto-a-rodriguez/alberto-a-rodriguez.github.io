"use strict";

const links = document.querySelectorAll(".nav-links a");

for (const link of links) {
    link.addEventListener("click", () => {
        for (const item of links) {
            item.classList.remove("active");
        }
        link.classList.add("active");
    });
}
