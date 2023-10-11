document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search");
    const cityName = document.querySelector(".city-info h2");
    const temperature = document.getElementById("temperature");
    const weatherDescription = document.getElementById("weather-description");

    searchButton.addEventListener("click", function() {
        const city = searchInput.value.trim();

        // You would typically make an API request here to get weather data
        // For simplicity, we'll simulate it:
        const fakeWeatherData = {
            city: city,
            temperature: Math.floor(Math.random() * 30) + 15,
            description: "Tabahi", // Replace with actual data
        };

        // Update the UI with the weather data
        cityName.textContent = fakeWeatherData.city;
        temperature.textContent = fakeWeatherData.temperature + "°C";
        weatherDescription.textContent = fakeWeatherData.description;
    });
});
