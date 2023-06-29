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
    const spotlightSections = document.querySelectorAll('.spotlight');

    for (let i = 0; i < spotlightSections.length; i++) {
      const spotlightSection = spotlightSections[i];
      const company = silverAndGoldCompanies[i];
      displayCompany(spotlightSection, company);
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
  const h2 = document.createElement('h2');
  h2.textContent = company['Company Name'];

  const p = document.createElement('p');
  p.textContent = 'Membership: ' + company['Membership Level'];

  const a = document.createElement('a');
  a.href = company['Website'];
  a.textContent = 'Website';
  a.target = '_blank';

  p.appendChild(a);

  spotlightSection.appendChild(h2);
  spotlightSection.appendChild(p);
}
