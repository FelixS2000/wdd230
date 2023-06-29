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

    displayCompany(firstSpotlight, silverAndGoldCompanies[0]);
    displayCompany(secondSpotlight, silverAndGoldCompanies[1]);
    displayCompany(thirdSpotlight, silverAndGoldCompanies[2]);
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

  const h3 = document.createElement('h3');
  h3.textContent = company['Additional Information'];

  const img = document.createElement('img');
  img.src = company['Image/Icon'];
  img.alt = company['Company Name'];

  const p = document.createElement('p');
  p.textContent = 'Website: ';

  const a = document.createElement('a');
  a.href = company['Website'];
  a.textContent = company['Website'];
  a.target = '_blank';

  p.appendChild(a);

  spotlightSection.appendChild(h2);
  spotlightSection.appendChild(h3);
  spotlightSection.appendChild(img);
  spotlightSection.appendChild(p);
}
