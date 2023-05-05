var date = new Date();
var currentYear = date.getFullYear();
var currentDate = date.getDate();
var currentMonth = date.getMonth() + 1;
var dateString = currentMonth + '/' + currentDate + '/' + currentYear;
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("lastTime").textContent = dateString;
