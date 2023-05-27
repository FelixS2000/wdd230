var date = new Date();
var actualYear = date.getFullYear();
var actualMonth = date.getMonth() + 1;
var specialDay = date.getDay();
var optionsTime = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
var formattedDates = date.toLocaleDateString('en-US', optionsTime);

document.getElementById("actualYear").textContent = actualYear;
document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("lastTime").textContent = formattedDates;

if (specialDay === 1) {
  var banner = document.createElement("div");
  banner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  banner.classList.add("banner");
  document.body.insertBefore(banner, document.body.firstChild);
}
