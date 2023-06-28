// Fetch the JSON data
fetch('company.json')
  .then(response => response.json())
  .then(data => {
    // Update the first spotlight section
    const firstSpotlight = document.getElementById('firstSpotlight');
    const firstSpotlightHeading = firstSpotlight.querySelector('h3');
    firstSpotlightHeading.textContent = data.companies[0]['Additional Information'];

    // Update the second spotlight section
    const secondSpotlight = document.getElementById('secondSpotlight');
    const secondSpotlightHeading = secondSpotlight.querySelector('h3');
    secondSpotlightHeading.textContent = data.companies[1]['Additional Information'];

    // Update the third spotlight section
    const thirdSpotlight = document.getElementById('thirdSpotlight');
    const thirdSpotlightHeading = thirdSpotlight.querySelector('h3');
    thirdSpotlightHeading.textContent = data.companies[2]['Additional Information'];
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });
