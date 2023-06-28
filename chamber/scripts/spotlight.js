// Assuming you have already loaded the JSON data into a variable called 'data'

// Get the spotlight sections by their IDs
const firstSpotlight = document.getElementById('firstSpotlight');
const secondSpotlight = document.getElementById('secondSpotlight');
const thirdSpotlight = document.getElementById('thirdSpotlight');

// Filter the companies with silver or gold membership status
const silverAndGoldMembers = data.companies.filter(company => company['Membership Level'] === 'Silver Membership' || company['Membership Level'] === 'Gold Membership');

// Randomly select two companies from the filtered list
const selectedCompanies = getRandomCompanies(silverAndGoldMembers, 2);

// Populate the first spotlight with information from the first selected company
if (selectedCompanies.length >= 1) {
  const firstCompany = selectedCompanies[0];
  populateSpotlight(firstSpotlight, firstCompany);
}

// Populate the second spotlight with information from the second selected company
if (selectedCompanies.length >= 2) {
  const secondCompany = selectedCompanies[1];
  populateSpotlight(secondSpotlight, secondCompany);
}

// Helper function to populate a spotlight section with company information
function populateSpotlight(spotlight, company) {
  spotlight.innerHTML = `
    <h2>${company['Company Name']}</h2>
    <p>${company['Additional Information']}</p>
    <p>Address: ${company['Address']}</p>
    <p>Phone Number: ${company['Phone Number']}</p>
    <p>Website: <a href="${company['Website']}" target="_blank">${company['Website']}</a></p>
    <img src="${company['Image/Icon']}" alt="${company['Company Name']}">
  `;
}

// Helper function to randomly select companies from the list
function getRandomCompanies(companies, count) {
  const shuffled = companies.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
