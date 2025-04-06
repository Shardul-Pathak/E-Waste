document.addEventListener("DOMContentLoaded", () => {
    const findBtn = document.getElementById("find-btn");
    const locationResult = document.getElementById("location-result");
  
    findBtn.addEventListener("click", () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          var lat = position.coords.latitude;
          var lon = position.coords.longitude;
          redirectToGoogleMaps(lat, lon, "E-waste recycling plant");
        }, () => {
          locationResult.textContent = "Unable to retrieve your location.";
        });
      } else {
        locationResult.textContent = "Geolocation is not supported by this browser.";
      }
    });
  });

  function redirectToGoogleMaps(latitude, longitude, placeName) {
    // Construct the Google Maps URL
    let url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeName)}&query_place_id=${latitude},${longitude}`;
  
    // Open the URL in a new tab or window
    window.open(url, '_blank');
  }
  
  // Example usage:
  // redirectToGoogleMaps(34.0522, -118.2437, "Recycling Plant Name");
  
  function redirectToGoogleMapsWithAddress(address) {
      let url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
      window.open(url, '_blank')
  }
  
  //redirectToGoogleMapsWithAddress("1600 Amphitheatre Parkway, Mountain View, CA");
  
  function redirectToGoogleMapsDirections(originLat, originLng, destinationLat, destinationLng){
      let url = `https://www.google.com/maps/dir/?api=1&origin=${originLat},${originLng}&destination=${destinationLat},${destinationLng}`
      window.open(url, '_blank');
  }
  