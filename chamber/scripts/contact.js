/*Contact Js*/
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform your desired action with the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form after submission
    form.reset();
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
  