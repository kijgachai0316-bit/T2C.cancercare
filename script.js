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
