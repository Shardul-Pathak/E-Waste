document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("confirm-logout").addEventListener("click", function() {
        alert("You have been logged out successfully.");
        window.location.href = "index.html"; // Redirect to home page
    });

    document.getElementById("cancel-logout").addEventListener("click", function() {
        window.location.href = "index.html"; // Redirect back to dashboard
    });
});
