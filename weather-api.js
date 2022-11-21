let inputval = document.querySelector('#cityinput')

var btn = document.querySelector('#add')

var city = document.querySelector('#cityoutput')

var temp = document.querySelector('#temp')

var wind = document.querySelector('#wind')

var descrip = document.querySelector('#description')
 function convertion(val){
     return (val - 273).toFixed(2);
 }

const apiKey = "5446be76d7c7bdd03fa8dc5f3a9eddb6"

btn.addEventListener('click', (e) => {
     fetch(
     "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputval.value
      + "&appid=" +
      apiKey
)
     .then((res) => res.json())
     .then((data) => {
          console.log(data);

          var nameval = data['name']

          var descrip = data['weather']['0']['description']

          var temperature = data['main']['temp']

          var wndspeed = data['wind']['speed']

          city.innerHTML = `
                    
          Weather of <span>${nameval}</span>

                         
          `

          temp.innerHTML = `Temperature: <span>${convertion(temperature)}C</span>`

          description.innerHTML = `Sky conditions: <span>${descrip}</span>`

          wind.innerHTML = `Wind Speed: <span>${wndspeed}km/h</span>`
     })
          .catch ((err) => {
          alert("You have entered the wrong city name")
     })
});
