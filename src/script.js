document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu");
    const navbar = document.querySelector(".navbar");

    if (menu && navbar) {  
        menu.addEventListener("click", function() {
            navbar.classList.toggle("open");
        });
    } else {
        console.log("Menu or Navbar element not found.");
    }
});
