// Smooth scroll effect for navbar links

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});

// Console welcome message

console.log("Welcome to Chenuli Hemachandra's Portfolio Website");