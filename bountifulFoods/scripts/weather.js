// Fetch the current weather data
fetch('https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&appid=5446be76d7c7bdd03fa8dc5f3a9eddb6')
.then(response => response.json())
.then(data => {
  const currentTemp = document.getElementById('currentTemp');
  const conditionDesc = document.getElementById('conditionDesc');
  const humidity = document.getElementById('humidity');
  const weatherIcon = document.getElementById('weatherIcon');

  currentTemp.textContent = `Temperature: ${Math.round(data.main.temp - 273.15)}°C`;
  conditionDesc.textContent = `Condition: ${data.weather[0].description}`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
});

 fetch('https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=32ba0bfed592484379e51106cef3f204')
    .then(response => response.json())
    .then(data => {
      // Getting the min and max values for each day
      for (let i = 0; i < 3; i++) {
        document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1) + "°";
        document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
      }

      // Getting Weather Icons
      for (let i = 0; i < 3; i++) {
        document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
      }
    })
    .catch(err => alert("Something went wrong: Please check your internet connection."));

  // Getting and displaying the text for the upcoming three days of the week
  const d = new Date();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Function to get the correct integer for the index of the days array
  function checkDay(day) {
    const currentDay = d.getDay();
    const index = (currentDay + day) % 7;
    return weekday[index];
  }

  for (let i = 0; i < 3; i++) {
    document.getElementById("day" + (i + 1)).innerHTML += checkDay(i);
  }