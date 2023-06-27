function displayCompanyInfo() {
  fetch('scripts/data.json')
    .then(response => response.json())
    .then(data => {
      // Get the container elements for each spotlight section
      const firstSpotlight = document.getElementById('firstSpotlight');
      const secondSpotlight = document.getElementById('secondSpotlight');
      const thirdSpotlight = document.getElementById('thirdSpotlight');

      // Randomly select two to three chamber members with silver or gold status
      const selectedCompanies = data.companies.filter(company => {
        const membershipLevel = company['Membership Level'];
        return membershipLevel === 'Silver Membership' || membershipLevel === 'Gold Membership';
      });

      const randomCompanies = selectedCompanies.sort(() => Math.random() - 0.5).slice(0, 3);

      // Generate HTML for each spotlight company and insert it into the respective section
      randomCompanies.forEach(company => {
        const companyHTML = `
          <div class="company">
            <h2>${company['Company Name']}</h2>
            <img src="${company['Image/Icon']}" alt="${company['Company Name']} Logo">
            <p><strong>Address:</strong> ${company.Address}</p>
            <p><strong>Phone Number:</strong> ${company['Phone Number']}</p>
            <p><strong>Website:</strong> <a href="http://${company.Website}" target="_blank">${company.Website}</a></p>
            <p><strong>Membership Level:</strong> ${company['Membership Level']}</p>
            <p><strong>Additional Information:</strong> ${company['Additional Information']}</p>
          </div>
        `;

        // Randomly select the spotlight section to insert the company HTML
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        const spotlightSection = document.getElementById(`spotlight${randomNumber}`);
        spotlightSection.insertAdjacentHTML('beforeend', companyHTML);
      });
    });
}

displayCompanyInfo();

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
