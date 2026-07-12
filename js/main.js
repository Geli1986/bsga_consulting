/* ======================================
   BSGA CONSULTING
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".service-card, .about-box, .timeline-item, .industry-grid div, .stat"
    );

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    elements.forEach(el=>observer.observe(el));

});
