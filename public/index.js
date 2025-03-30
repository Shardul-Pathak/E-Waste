document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Contact form submission (simple alert for demo)
    document.querySelector(".contact form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        this.reset();
    });
});
