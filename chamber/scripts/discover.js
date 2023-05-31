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


// milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
const msToDays = 1000 * 60 * 60 * 24;

// Calculate days since last visit
function calculateDaysSinceLastVisit() {
  try {
    const lastVisitTime = localStorage.getItem("lastVisitTime");
    const currentTime = Date.now();

    if (lastVisitTime) {
      return Math.floor((currentTime - parseInt(lastVisitTime)) / msToDays);
    } else {
      return 0;
    }
  } catch (error) {
    console.error("Error calculating days since last visit:", error);
    return 0; // Return a default value in case of error
  }
}

document.addEventListener("DOMContentLoaded", function () {
  try {
    const daysSinceLastVisit = calculateDaysSinceLastVisit();

    console.log(`Days since last visit: ${daysSinceLastVisit}`);

    // Update last visit time in local storage if not set
    const lastVisitTime = localStorage.getItem("lastVisitTime");
    if (!lastVisitTime) {
      localStorage.setItem("lastVisitTime", Date.now().toString());
    }

    // Display days since last visit
    const lastTimeElement = document.getElementById("lastTime");
    if (lastTimeElement) {
      lastTimeElement.textContent = `Days since last visit: ${daysSinceLastVisit}`;
    }
  } catch (error) {
    console.error("Error updating days since last visit:", error);
  }
});




// Display current date
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDay();

const option = { weekday: "long", month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" };
const lastTimeModifiedElement = document.getElementById("lastTimeModified");
if (lastTimeModifiedElement) {
  lastTimeModifiedElement.textContent = currentDate.toLocaleDateString("en-US", option);
}
document.getElementById("currentYear").textContent = currentYear;

// Check if it's Monday (day 1)
if (currentDay === 1) {
  const banner = document.createElement("div");
  banner.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  banner.classList.add("banner");
  document.body.insertBefore(banner, document.body.firstChild);
}
