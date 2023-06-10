const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
  }
  
  function displayProphets(prophets) {
    const cards = document.querySelector('div.cards');
  
    prophets.forEach((prophet, index) => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let portrait = document.createElement('img');
      let birthDate = document.createElement('p');
      let birthPlace = document.createElement('p');
  
      h2.textContent = `${prophet.name} - ${ordinalSuffix(index + 1)} Latter-day Prophet`;
  
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} - ${ordinalSuffix(index + 1)} Latter-day Prophet`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      birthDate.textContent = `Birth Date: ${prophet.birthdate}`;
      birthPlace.textContent = `Birth Place: ${prophet.birthplace}`;
  
      card.appendChild(h2);
      card.appendChild(portrait);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
  
      cards.appendChild(card);
    });
  }
  
  function ordinalSuffix(number) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const remainder = number % 100;
    return number + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]);
  }
  
  getProphetData();
  