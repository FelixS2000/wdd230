var date = new Date();
var year = date.getFullYear();
var time1 = date.toLocaleString();
var time2 = date.toLocaleString();
var message;

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
if (days == Monday){
    message = "🤝🏼 Come join us for the chamber meet and greet Monday at 7:00 p.m.";
}

const hambutton = document.querySelector('.navig');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

document.getElementById("currentYear").innerHTML = year;
document.getElementById("lastModified").innerHTML = date;

