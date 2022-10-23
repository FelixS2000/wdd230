var date = new Date();
var year = date.getFullYear();
var time = date.toLocaleString();
const hambutton = document.querySelector('.navig');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

document.getElementById("currentYear").innerHTML = year;
document.getElementById("lastModified").innerHTML = date;
document.getElementById("lastTime").innerHTML = time;