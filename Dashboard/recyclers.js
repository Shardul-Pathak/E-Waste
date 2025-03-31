document.addEventListener("DOMContentLoaded", function() {
    const recyclerList = document.getElementById("recycler-list");

    // Sample data for nearby recyclers
    const recyclers = [
        "Green Earth Recycling - 2 km away",
        "Eco-Friendly Recyclers - 5 km away",
        "Waste Management Center - 7 km away",
        "Urban Recycling Hub - 10 km away"
    ];

    // Populate the recycler list
    recyclers.forEach(recycler => {
        let li = document.createElement("li");
        li.textContent = recycler;
        recyclerList.appendChild(li);
    });
});
