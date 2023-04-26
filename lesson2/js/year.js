const date = new Date();
const year = date.getFullYear();
const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
const formattedDate = date.toLocaleDateString('en-US', options);
document.getElementById("currentTime").innerHTML = formattedDate;
document.getElementById("currentYear").innerHTML = year;