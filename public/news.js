document.addEventListener("DOMContentLoaded", function() {
    const newsList = document.getElementById("news-list");

    // Sample news articles
    const newsArticles = [
        "How to Recycle Your Old Smartphones Efficiently",
        "The Impact of E-Waste on Our Environment",
        "10 Tips for Reducing Electronic Waste at Home",
        "Innovations in Sustainable Recycling Technology"
    ];

    // Populate the news list
    newsArticles.forEach(article => {
        let li = document.createElement("li");
        li.textContent = article;
        newsList.appendChild(li);
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