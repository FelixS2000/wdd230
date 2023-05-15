var date = new Date();
var currentYear = date.getFullYear();
var currentDate = date.getDate();
var currentMonth = date.getMonth() + 1;
var currentDay = date.getDay();
var options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
var formattedDate = date.toLocaleDateString('en-US', options);

document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("lastTime").textContent = formattedDate;

if (currentDay === 1) {
  var banner = document.createElement("div");
  banner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  banner.classList.add("banner");
  document.body.insertBefore(banner, document.body.firstChild);
}
