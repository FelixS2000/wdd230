// Lazy Loading
const images = document.querySelectorAll(".lazy");

const lazyLoad = (image) => {
  const src = image.getAttribute("data-src");
  image.src = src;
  image.addEventListener("load", () => {
    image.classList.add("loaded");
  });
};

const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      lazyLoad(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, options);

images.forEach((image) => {
  observer.observe(image);
});

// Local Storage Visit Time
const visitTime = localStorage.getItem("visitTime");
const currentDate = new Date();
const currentTime = currentDate.getTime();

if (visitTime) {
  const daysSinceLastVisit = Math.round((currentTime - visitTime) / (1000 * 60 * 60 * 24));
  console.log(`Days since last visit: ${daysSinceLastVisit}`);
}

localStorage.setItem("visitTime", currentTime);

var date = new Date();
var currentYear = date.getFullYear();
var currentDates = date.getDate();
var currentMonth = date.getMonth() + 1;
var currentDay = date.getDay();
var option = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
var formattedDate = date.toLocaleDateString('en-US', options);

document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastTime").textContent = document.lastModified;

if (currentDay === 1) {
  var banner = document.createElement("div");
  banner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  banner.classList.add("banner");
  document.body.insertBefore(banner, document.body.firstChild);
}
