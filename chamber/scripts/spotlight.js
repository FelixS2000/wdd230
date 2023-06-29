// Randomly select companies with silver or gold membership
function getRandomMembers(companies, membershipLevel, count) {
    const filteredCompanies = companies.filter(company => company["Membership Level"] === membershipLevel);
    const randomMembers = [];
    const maxIndex = filteredCompanies.length - 1;
  
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
      randomMembers.push(filteredCompanies[randomIndex]);
    }
  
    return randomMembers;
  }
  
  // Display random members in the spotlights
  function displaySpotlights(companies) {
    const firstSpotlight = document.getElementById("firstSpotlight");
    const secondSpotlight = document.getElementById("secondSpotlight");
    const thirdSpotlight = document.getElementById("thirdSpotlight");
  
    // First Spotlight
    const firstRandomMembers = getRandomMembers(companies, "Silver Membership", 1);
    const firstSpotlightHTML = `
      <h2>${firstRandomMembers[0]["Company Name"]}</h2>
      <p>${firstRandomMembers[0]["Additional Information"]}</p>
    `;
    firstSpotlight.innerHTML = firstSpotlightHTML;
  
    // Second Spotlight
    const secondRandomMembers = getRandomMembers(companies, "Gold Membership", 1);
    const secondSpotlightHTML = `
      <h2>${secondRandomMembers[0]["Company Name"]}</h2>
      <p>${secondRandomMembers[0]["Additional Information"]}</p>
    `;
    secondSpotlight.innerHTML = secondSpotlightHTML;
  
    // Third Spotlight
    const thirdRandomMembers = getRandomMembers(companies, "Silver Membership", 1);
    const thirdSpotlightHTML = `
      <h2>${thirdRandomMembers[0]["Company Name"]}</h2>
      <p>${thirdRandomMembers[0]["Additional Information"]}</p>
    `;
    thirdSpotlight.innerHTML = thirdSpotlightHTML;
  }
  
  // Fetch and process the data
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const companies = data.companies;
      displaySpotlights(companies);
    })
    .catch(error => console.log(error));
  