// Fetch the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Filter companies with silver or gold membership level
    const silverAndGoldCompanies = data.companies.filter(company =>
      company['Membership Level'] === 'Silver Membership' ||
      company['Membership Level'] === 'Gold Membership'
    );

    // Shuffle the array randomly
    shuffleArray(silverAndGoldCompanies);

    // Display companies in the spotlights
    const firstSpotlight = document.getElementById('firstSpotlight');
    const secondSpotlight = document.getElementById('secondSpotlight');
    const thirdSpotlight = document.getElementById('thirdSpotlight');

    if (silverAndGoldCompanies.length > 0) {
      displayCompany(firstSpotlight, silverAndGoldCompanies[0]);
    }

    if (silverAndGoldCompanies.length > 1) {
      displayCompany(secondSpotlight, silverAndGoldCompanies[1]);
    }

    if (silverAndGoldCompanies.length > 2) {
      displayCompany(thirdSpotlight, silverAndGoldCompanies[2]);
    }
  });

// Function to shuffle an array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to display a company in a spotlight section
function displayCompany(spotlightSection, company) {
  const companyName = document.createElement('h2');
  companyName.textContent = company['Company Name'];

  const membershipLevel = document.createElement('p');
  membershipLevel.textContent = 'Membership: ' + company['Membership Level'];

  spotlightSection.appendChild(companyName);
  spotlightSection.appendChild(membershipLevel);
}
