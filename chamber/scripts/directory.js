fetch('scripts/data.json')
  .then(response => response.json())
  .then(data => {
    const companyList = document.getElementById('companyList');

    // Iterate over each company in the data
    data.companies.forEach(company => {
      // Create a div element for each company
      const companyDiv = document.createElement('div');
      companyDiv.classList.add('company');

      // Set the HTML content for the company div
      companyDiv.innerHTML = `
        <h2>${company['Company Name']}</h2>
        <img src="${company['Image/Icon']}" alt="${company['Company Name']} Logo">
        <p><strong>Address:</strong> ${company.Address}</p>
        <p><strong>Phone Number:</strong> ${company['Phone Number']}</p>
        <p><strong>Website:</strong> <a href="http://${company.Website}" target="_blank">${company.Website}</a></p>
        <p><strong>Membership Level:</strong> ${company['Membership Level']}</p>
        <p><strong>Additional Information:</strong> ${company['Additional Information']}</p>
      `;

      // Append the company div to the companyList element
      companyList.appendChild(companyDiv);
    });
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
