/*==================================================
BSGA CONSULTING
MAIN.JS
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*==============================================
    HEADER SCROLL
    ==============================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /*==============================================
    SCROLL PROGRESS BAR
    ==============================================*/

    const progressBar = document.getElementById("scroll-progress");

    window.addEventListener("scroll", function () {

        if (!progressBar) return;

        const scrollTop = window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / height) * 100;

        progressBar.style.width = progress + "%";

    });

    /*==============================================
    BACK TO TOP
    ==============================================*/

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {

        if (!backToTop) return;

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    if (backToTop) {

        backToTop.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*==============================================
SMOOTH SCROLL
==============================================*/

document.querySelectorAll('a[href^="#"]').forEach(function(link){

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        const headerHeight = document.querySelector("header").offsetHeight;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

        window.scrollTo({

            top: targetPosition,

            behavior:"smooth"

        });

    });

});
    /*==============================================
    SCROLL ANIMATIONS
    ==============================================*/

    const animated = document.querySelectorAll(

        ".fade-up,.fade-left,.fade-right,.zoom"

    );

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    animated.forEach(function (element) {

        observer.observe(element);

    });

    /*==============================================
    MOBILE MENU
    ==============================================*/

    const menu = document.querySelector(".nav-menu");

    const toggle = document.querySelector(".menu-toggle");

    const overlay = document.querySelector(".menu-overlay");

    if (menu && toggle && overlay) {

        toggle.addEventListener("click", function () {

            menu.classList.toggle("active");

            overlay.classList.toggle("active");

            document.body.classList.toggle("menu-open");

            const icon = toggle.querySelector("i");

            if (menu.classList.contains("active")) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });

        overlay.addEventListener("click", closeMenu);

        document.querySelectorAll(".nav-menu a").forEach(function (link) {

            link.addEventListener("click", closeMenu);

        });

        function closeMenu() {

            menu.classList.remove("active");

            overlay.classList.remove("active");

            document.body.classList.remove("menu-open");

            const icon = toggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    }

});
