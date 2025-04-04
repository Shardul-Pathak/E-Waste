document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        card.addEventListener("mouseover", function() {
            card.style.transform = "scale(1.1) translateY(-5px)";
        });
        
        card.addEventListener("mouseout", function() {
            card.style.transform = "scale(1) translateY(0)";
        });
    });
    
    const form = document.querySelector(".contact form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for contacting us! We will get back to you soon.");
        form.reset();
    });
});
