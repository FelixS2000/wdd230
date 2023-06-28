// Function to randomly select members from an array
function getRandomMembers(array, min, max) {
    const selectedMembers = [];
    const numMembers = Math.floor(Math.random() * (max - min + 1)) + min;
    const arrayCopy = [...array];
  
    for (let i = 0; i < numMembers; i++) {
      const randomIndex = Math.floor(Math.random() * arrayCopy.length);
      const selectedMember = arrayCopy.splice(randomIndex, 1)[0];
      selectedMembers.push(selectedMember);
    }
  
    return selectedMembers;
  }
  
  fetch('scripts/data.json')
    .then(response => response.json())
    .then(data => {
      const spotlight1 = document.getElementById('firstSpotlight');
      const spotlight2 = document.getElementById('secondSpotlight');
      const spotlight3 = document.getElementById('thirdSpotlight');
  
      if (!data || !data.companies) {
        // Handle the case when data or companies array is missing
        spotlight1.innerHTML = '<h2>Error: Data not available</h2>';
        spotlight2.innerHTML = '<h2>Error: Data not available</h2>';
        spotlight3.innerHTML = '<h2>Error: Data not available</h2>';
        return;
      }
  
      // Filter companies with silver or gold status
      const silverGoldMembers = data.companies.filter(
        company =>
          company['Membership Level'] === 'Silver' ||
          company['Membership Level'] === 'Gold'
      );
  
      // Randomly select two to three members from silverGoldMembers
      const selectedMembers = getRandomMembers(silverGoldMembers, 2, 3);
  
      // Update the HTML content for each spotlight
      selectedMembers.forEach((member, index) => {
        const spotlight = index === 0 ? spotlight1 : index === 1 ? spotlight2 : spotlight3;
        spotlight.innerHTML = `
          <h2>${member['Company Name']}</h2>
          <img src="${member['Image/Icon']}" alt="${member['Company Name']} Logo">
          <p><strong>Address:</strong> ${member.Address}</p>
          <p><strong>Phone Number:</strong> ${member['Phone Number']}</p>
          <p><strong>Website:</strong> <a href="http://${member.Website}" target="_blank">${member.Website}</a></p>
          <p><strong>Membership Level:</strong> ${member['Membership Level']}</p>
          <p><strong>Additional Information:</strong> ${member['Additional Information']}</p>
        `;
      });
    })
    .catch(error => {
      // Handle any errors that occur during the fetch or JSON parsing
      const spotlight1 = document.getElementById('firstSpotlight');
      const spotlight2 = document.getElementById('secondSpotlight');
      const spotlight3 = document.getElementById('thirdSpotlight');
      spotlight1.innerHTML = '<h2>Error: Failed to fetch data</h2>';
      spotlight2.innerHTML = '<h2>Error: Failed to fetch data</h2>';
      spotlight3.innerHTML = '<h2>Error: Failed to fetch data</h2>';
      console.error(error);
    });
  