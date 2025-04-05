document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.querySelector(".success-msg");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from reloading
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name === "" || email === "" || message === "") {
        alert("❌ Please fill in all fields!");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("❌ Please enter a valid email!");
        return;
      }
  
      successMessage.style.display = "block"; // Show success message
      form.reset(); // Clear form fields
  
      setTimeout(() => {
        successMessage.style.display = "none"; // Hide message after 3 sec
      }, 3000);
    });
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  