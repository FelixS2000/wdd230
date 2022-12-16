const api_url = 'https://api.openweathermap.org/data/2.5/forecast?lat=18.41&lon=-70.1&appid=5446be76d7c7bdd03fa8dc5f3a9eddb6&units=imperial';

async function getapi(url) {
  const response = await fetch(url);

  const data = await response.json();

  show(data);
  show1(data);
  show2(data);
  show3(data);
}
// Calling that async function
getapi(api_url);

// Function to define innerHTML for HTML table
function show(data) {
  const temp = document.getElementById('temp');

  temp.innerHTML = data.list[0].main.temp;

  const temp2 = document.getElementById('mintemp');
  temp2.innerHTML = data.list[0].main.temp_min;

  const temp3 = document.getElementById('maxtemp');
  temp3.innerHTML = data.list[0].main.temp_max;

  const description = document.getElementById('desc');
  description.innerHTML = data.list[0].weather[0].description;;

  const humidity = document.getElementById('humid');
  humidity.innerHTML = data.list[0].main.humidity;

  const wind = document.getElementById('wind');
  wind.innerHTML = data.list[0].wind.speed;
}

function show1(data) {
  const temp = document.getElementById('temp1');

  temp.innerHTML = data.list[1].main.temp;

  const temp2 = document.getElementById('mintemp1');
  temp2.innerHTML = data.list[1].main.temp_min;

  const temp3 = document.getElementById('maxtemp1');
  temp3.innerHTML = data.list[1].main.temp_max;

  const description = document.getElementById('desc1');
  description.innerHTML = data.list[1].weather[0].description;;

  const humidity = document.getElementById('humid1');
  humidity.innerHTML = data.list[1].main.humidity;

  const wind = document.getElementById('wind1');
  wind.innerHTML = data.list[1].wind.speed;
}

function show2(data) {
  const temp = document.getElementById('temp2');

  temp.innerHTML = data.list[2].main.temp;

  const temp2 = document.getElementById('mintemp2');
  temp2.innerHTML = data.list[2].main.temp_min;

  const temp3 = document.getElementById('maxtemp2');
  temp3.innerHTML = data.list[2].main.temp_max;

  const description = document.getElementById('desc2');
  description.innerHTML = data.list[2].weather[0].description;;

  const humidity = document.getElementById('humid2');
  humidity.innerHTML = data.list[2].main.humidity;

  const wind = document.getElementById('wind2');
  wind.innerHTML = data.list[2].wind.speed;
}

function show3(data) {
  const temp = document.getElementById('temp3');

  temp.innerHTML = data.list[3].main.temp;

  const temp2 = document.getElementById('mintemp3');
  temp2.innerHTML = data.list[3].main.temp_min;

  const temp3 = document.getElementById('maxtemp3');
  temp3.innerHTML = data.list[3].main.temp_max;

  const description = document.getElementById('desc3');
  description.innerHTML = data.list[3].weather[0].description;;

  const humidity = document.getElementById('humid3');
  humidity.innerHTML = data.list[3].main.humidity;

  const wind = document.getElementById('wind3');
  wind.innerHTML = data.list[3].wind.speed;
}
