 // Fetch the current weather data
 fetch('https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=5446be76d7c7bdd03fa8dc5f3a9eddb6')
 .then(response => response.json())
 .then(data => {
   const currentTemp = document.getElementById('currentTemp');
   const conditionDesc = document.getElementById('conditionDesc');
   const humidity = document.getElementById('humidity');

   currentTemp.textContent = `Temperature: ${Math.round(data.main.temp - 273.15)}°C`;
   conditionDesc.textContent = `Condition: ${data.weather[0].description}`;
   humidity.textContent = `Humidity: ${data.main.humidity}%`;
 });

// Fetch the three-day forecast data
fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q=Carlsbad&cnt=3&appid=5446be76d7c7bdd03fa8dc5f3a9eddb6')
 .then(response => response.json())
 .then(data => {
   const forecast = data.list;
   const day1 = document.getElementById('day1');
   const day2 = document.getElementById('day2');
   const day3 = document.getElementById('day3');

   // Extract and display the temperature for each day
   day1.textContent = `Day 1: ${Math.round(forecast[0].temp.day - 273.15)}°C`;
   day2.textContent = `Day 2: ${Math.round(forecast[1].temp.day - 273.15)}°C`;
   day3.textContent = `Day 3: ${Math.round(forecast[2].temp.day - 273.15)}°C`;
 });