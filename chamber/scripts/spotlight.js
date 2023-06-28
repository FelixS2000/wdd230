// Fetch the data from the JSON source
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Get the spotlight sections
    const firstSpotlight = document.getElementById('firstSpotlight');
    const secondSpotlight = document.getElementById('secondSpotlight');
    const thirdSpotlight = document.getElementById('thirdSpotlight');

    // Filter the companies with silver or gold status
    const silverGoldCompanies = data.companies.filter(company =>
      company['Membership Level'] === 'Silver Membership' || company['Membership Level'] === 'Gold Membership'
    );

    // Randomly select two or three companies from the filtered list
    const selectedCompanies = getRandomCompanies(silverGoldCompanies, 2, 3);

    // Update the first spotlight section
    updateSpotlight(firstSpotlight, selectedCompanies[0]);

    // Update the second spotlight section
    updateSpotlight(secondSpotlight, selectedCompanies[1]);

    // Update the third spotlight section if a third company is available
    if (selectedCompanies.length > 2) {
      updateSpotlight(thirdSpotlight, selectedCompanies[2]);
    }
  });

// Function to randomly select companies from the list
function getRandomCompanies(companies, minCount, maxCount) {
  const count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
  const shuffledCompanies = companies.sort(() => 0.5 - Math.random());
  return shuffledCompanies.slice(0, count);
}

// Function to update the spotlight section with company information
function updateSpotlight(spotlight, company) {
  spotlight.innerHTML = `
    <h2>${company['Company Name']}</h2>
    <p>${company['Additional Information']}</p>
    <img src="${company['Image/Icon']}" alt="${company['Company Name']}">
  `;
}
