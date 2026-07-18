/* ===========================================
BSGA CONSULTING
MAIN.JS
===========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       NAVBAR ON SCROLL
    =============================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

    /* ===============================
       SCROLL ANIMATIONS
    =============================== */

    const animatedElements = document.querySelectorAll(

        ".service-card, .about-card, .timeline-step, .industry-card, .why-item, .contact-card"

    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    animatedElements.forEach((element) => {

        observer.observe(element);

    });

    /* ===============================
       SCROLL PROGRESS BAR
    =============================== */

    const progressBar = document.getElementById("scroll-progress");

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / documentHeight) * 100;

        if (progressBar) {

            progressBar.style.width = progress + "%";

        }

    });

    /* ===============================
       BACK TO TOP
    =============================== */

    const backButton = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (!backButton) return;

        if (window.scrollY > 500) {

            backButton.classList.add("show");

        } else {

            backButton.classList.remove("show");

        }

    });

    if (backButton) {

        backButton.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ===============================
       SMOOTH MENU LINKS
    =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

});
/*======================================
APPLE MOBILE MENU
======================================*/

const menuToggle=document.querySelector(".menu-toggle");

const navMenu=document.querySelector(".nav-menu");

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

if(navMenu.classList.contains("active")){

menuToggle.innerHTML='<i class="fa-solid fa-xmark"></i>';

}else{

menuToggle.innerHTML='<i class="fa-solid fa-bars"></i>';

}

});

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

menuToggle.innerHTML='<i class="fa-solid fa-bars"></i>';

});

});
