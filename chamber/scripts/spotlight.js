// JSON data
const jsonData = {
    "companies": [
      {
        "Company Name": "Acme Corporation",
        "Membership Level": "Bronze Membership"
      },
      {
        "Company Name": "XYZ Tech Solutions",
        "Membership Level": "Silver Membership"
      },
      {
        "Company Name": "Tropical Foods",
        "Membership Level": "Gold Membership"
      },
      {
        "Company Name": "Global Logistics",
        "Membership Level": "Bronze Membership"
      },
      {
        "Company Name": "Sunshine Resorts",
        "Membership Level": "Silver Membership"
      },
      {
        "Company Name": "Fresh Produce Co.",
        "Membership Level": "Gold Membership"
      },
      {
        "Company Name": "Tech Innovators",
        "Membership Level": "Bronze Membership"
      },
      {
        "Company Name": "Caribbean Tours",
        "Membership Level": "Silver Membership"
      },
      {
        "Company Name": "HealthFirst Clinic",
        "Membership Level": "Gold Membership"
      }
    ]
  };
  
  // Filter companies with silver or gold membership level
  const silverAndGoldCompanies = jsonData.companies.filter(company =>
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
  