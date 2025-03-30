document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-container form");
    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = loginForm.querySelector("input[type='email']").value;
        const password = loginForm.querySelector("input[type='password']").value;
        
        if (email === "admin@example.com" && password === "password123") {
            alert("Login Successful!");
            window.location.href = "dashboard.html"; // Redirect to another page
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});