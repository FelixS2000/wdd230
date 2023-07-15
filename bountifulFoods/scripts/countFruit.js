// Retrieve total number of specialty drinks from local storage
const totalDrinks = localStorage.getItem('totalDrinks');

// Display the total number of drinks in the information card
const totalDrinksText = document.getElementById('totalDrinksText');
totalDrinksText.textContent = `The total number of drinks is ${totalDrinks}`;
