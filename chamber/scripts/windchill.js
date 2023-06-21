// windchill.js

// My OpenWeatherMap API key
const apiKey = '5446be76d7c7bdd03fa8dc5f3a9eddb6';

// Location information
const city = 'San Cristobal';
const countryCode = '91002';

// Function to fetch weather data from OpenWeatherMap API
async function fetchWeatherData() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=imperial`);
        const data = await response.json();

        // Extract relevant information from the API response
        const temperature = data.main.temp;
        const condition = data.weather[0].description;
        const icon = data.weather[0].icon;
        const windSpeed = data.wind.speed;
        const windChill = calculateWindChill(temperature, windSpeed);

        // Update the HTML elements with the fetched data
        document.getElementById('temperature-value').textContent = temperature + ' °F';
        document.getElementById('condition-value').textContent = condition;
        document.getElementById('icon').innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">`;
        document.getElementById('wind-speed-value').textContent = windSpeed;
        document.getElementById('wind-chill-value').textContent = windChill || 'N/A';
    } catch (error) {
        console.log('Error:', error);
    }
}

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Implement your wind chill calculation logic here
    // Return the calculated wind chill value or null if not applicable
}

// Fetch weather data when the page loads
fetchWeatherData();