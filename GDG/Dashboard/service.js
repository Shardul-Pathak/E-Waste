document.addEventListener("DOMContentLoaded", () => {
    const findBtn = document.getElementById("find-btn");
    const locationResult = document.getElementById("location-result");
  
    findBtn.addEventListener("click", () => {
      locationResult.innerHTML = "Finding nearby recyclers... 🔍";
  
      // Simulate location fetch delay
      setTimeout(() => {
        // Mock data — you can integrate Google Maps or Geolocation API here
        const nearbyRecyclers = [
          {
            name: "EcoGreen Recycle Center",
            address: "Sector 12, Green Park, Mumbai",
          },
          {
            name: "Urban E-Waste Solutions",
            address: "Plot 44, Tech Zone, Pune",
          },
          {
            name: "RecycleX Hub",
            address: "Gandhi Nagar, Hyderabad",
          },
        ];
  
        locationResult.innerHTML = `<strong>Nearby Recyclers:</strong><br><br>`;
        nearbyRecyclers.forEach(recycler => {
          locationResult.innerHTML += `
            <div style="margin-bottom: 10px;">
              🏢 <strong>${recycler.name}</strong><br>
              📍 ${recycler.address}
            </div>
          `;
        });
      }, 1000); // 1 second delay
    });
  });
  