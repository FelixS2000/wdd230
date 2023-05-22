// windchill.js

// Get the temperature and wind speed values from the HTML document
const temperatureValue = document.getElementById("temperature-value").textContent;
const windSpeedValue = document.getElementById("wind-speed-value").textContent;

// Convert the temperature and wind speed values to numbers
const temperature = parseFloat(temperatureValue);
const windSpeed = parseFloat(windSpeedValue);

// Check if the values meet the specification limits for wind chill calculation
if (temperature <= 50 && windSpeed > 3.0) {
  // Calculate the wind chill factor using the provided formula
  const windChill = calculateWindChill(temperature, windSpeed);

  // Update the HTML document to display the wind chill value
  document.getElementById("wind-chill-value").textContent = windChill.toFixed(2) + " °F";
} else {
  // Display "N/A" if the input values do not meet the requirements for wind chill calculation
  document.getElementById("wind-chill-value").textContent = "N/A";
}

// Function to calculate the wind chill factor
function calculateWindChill(temperature, windSpeed) {
  return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
}
