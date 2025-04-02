document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("confirm-logout").addEventListener("click", function() {
        alert("You have been logged out successfully.");
        window.location.href = "/home"; // Redirect to home page
    });

    document.getElementById("cancel-logout").addEventListener("click", function() {
        window.location.href = "/dashboard"; // Redirect back to dashboard
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".sidebar ul li a").forEach(link => {
        link.addEventListener("click", function() {
            document.querySelector(".sidebar ul li a.active")?.classList.remove("active");
            this.classList.add("active");
        });
    });
});


