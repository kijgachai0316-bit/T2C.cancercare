console.log("T2C Cancer Care");

/* =========================================
   T2C MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".navbar ul");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    /* กดเมนูแล้วให้เมนูปิดอัตโนมัติ */

    navMenu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}

/* =========================================
   T2C FAQ ACCORDION
========================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function(item){

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", function(){

        const isActive = item.classList.contains("active");

        faqItems.forEach(function(otherItem){

            otherItem.classList.remove("active");

            const otherAnswer =
                otherItem.querySelector(".faq-answer");

            otherAnswer.style.maxHeight = null;

        });

        if(!isActive){

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});
