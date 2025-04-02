document.addEventListener("DOMContentLoaded", function() {
    // Sample data for chart
    const ctx = document.getElementById("ewasteChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
                label: "E-Waste Recycled (kg)",
                data: [5, 10, 8, 15, 12, 18],
                backgroundColor: "#1abc9c",
                borderRadius: 5,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Sidebar Navigation Highlight
    document.querySelectorAll(".sidebar ul li a").forEach(link => {
        link.addEventListener("click", function() {
            document.querySelector(".sidebar ul li a.active")?.classList.remove("active");
            this.classList.add("active");
        });
    });
});
