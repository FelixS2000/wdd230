const api_url = 
  "https://api.openweathermap.org/data/2.5/forecast?lat=18.41&lon=-70.1&appid=5446be76d7c7bdd03fa8dc5f3a9eddb6&units=imperial";
  
  async function getapi(url) {
    
    const response = await fetch(url);
    
    var data = await response.json();
    console.log(data);

    show(data);
    show1(data);
    show2(data);
    show3(data);
}
// Calling that async function
getapi(api_url);
  

// Function to define innerHTML for HTML table
function show(data) {
  const obj = data;
  const myJSON = JSON.stringify(obj);
  const temp =document.getElementById("temp");
  temp.innerHTML = myJSON.slice(74,76);

  const myJSON2 = JSON.stringify(obj);
  const temp2 =document.getElementById("mintemp");
  temp2.innerHTML = myJSON2.slice(110,112);

  const myJSON3 = JSON.stringify(obj);
  const temp3 =document.getElementById("maxtemp");
  temp3.innerHTML = myJSON3.slice(127,129);

  const myJSON4 = JSON.stringify(obj);
  const description =document.getElementById("figcaption");
  description.innerHTML = myJSON4.slice(266,276);

  const myJSON5 = JSON.stringify(obj);
  const humidity =document.getElementById("humidity");
  humidity.innerHTML = myJSON5.slice(195,197);

  const myJSON6 = JSON.stringify(obj);
  const wind =document.getElementById("wind");
  wind.innerHTML = myJSON6.slice(329,333);
}

function show1(data) {
  const obj = data;
  const myJSON = JSON.stringify(obj);
  const temp =document.getElementById("temp1");
  temp.innerHTML = myJSON.slice(74,76);

  const myJSON2 = JSON.stringify(obj);
  const temp2 =document.getElementById("mintemp1");
  temp2.innerHTML = myJSON2.slice(110,112);

  const myJSON3 = JSON.stringify(obj);
  const temp3 =document.getElementById("maxtemp1");
  temp3.innerHTML = myJSON3.slice(127,129);

  const myJSON4 = JSON.stringify(obj);
  const description =document.getElementById("figcaption1");
  description.innerHTML = myJSON4.slice(266,276);

  const myJSON5 = JSON.stringify(obj);
  const humidity =document.getElementById("humidity1");
  humidity.innerHTML = myJSON5.slice(195,197);

  const myJSON6 = JSON.stringify(obj);
  const wind =document.getElementById("wind1");
  wind.innerHTML = myJSON6.slice(329,333);
}

function show2(data) {
  const obj = data;
  const myJSON = JSON.stringify(obj);
  const temp =document.getElementById("temp2");
  temp.innerHTML = myJSON.slice(74,76);

  const myJSON2 = JSON.stringify(obj);
  const temp2 =document.getElementById("mintemp2");
  temp2.innerHTML = myJSON2.slice(110,112);

  const myJSON3 = JSON.stringify(obj);
  const temp3 =document.getElementById("maxtemp2");
  temp3.innerHTML = myJSON3.slice(127,129);

  const myJSON4 = JSON.stringify(obj);
  const description =document.getElementById("figcaption2");
  description.innerHTML = myJSON4.slice(266,276);

  const myJSON5 = JSON.stringify(obj);
  const humidity =document.getElementById("humidity2");
  humidity.innerHTML = myJSON5.slice(195,197);

  const myJSON6 = JSON.stringify(obj);
  const wind =document.getElementById("wind2");
  wind.innerHTML = myJSON6.slice(329,333);
}

function show3(data) {
  const obj = data;
  const myJSON = JSON.stringify(obj);
  const temp =document.getElementById("temp3");
  temp.innerHTML = myJSON.slice(74,76);

  const myJSON2 = JSON.stringify(obj);
  const temp2 =document.getElementById("mintemp3");
  temp2.innerHTML = myJSON2.slice(110,112);

  const myJSON3 = JSON.stringify(obj);
  const temp3 =document.getElementById("maxtemp3");
  temp3.innerHTML = myJSON3.slice(127,129);

  const myJSON4 = JSON.stringify(obj);
  const description =document.getElementById("figcaption3");
  description.innerHTML = myJSON4.slice(266,276);

  const myJSON5 = JSON.stringify(obj);
  const humidity =document.getElementById("humidity");
  humidity.innerHTML = myJSON5.slice(195,197);

  const myJSON6 = JSON.stringify(obj);
  const wind =document.getElementById("wind");
  wind.innerHTML = myJSON6.slice(329,333);
}