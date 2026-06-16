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

// Back-to-top button: show after scrolling, smooth scroll up on click
const backToTop = document.getElementById("back-to-top");

if (backToTop) {
    const toggleBackToTop = () => {
        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    };

    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Reveal sections and cards as they scroll into view
const revealTargets = document.querySelectorAll(
    "section.section, .card, .stats-strip"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            }
        },
        { threshold: 0.12 }
    );

    for (const target of revealTargets) {
        target.classList.add("reveal");
        revealObserver.observe(target);
    }
}
