// Function to calculate the total nutritional values based on selected fruits
function calculateTotalNutrition(fruitData, fruitSelections) {
    let totalCalories = 0;
    let totalCarbs = 0;
    let totalProtein = 0;
    let totalFat = 0;
  
    fruitSelections.forEach(selection => {
      const fruit = fruitData.find(item => item.name === selection);
  
      if (fruit && fruit.nutrition) {
        totalCalories += fruit.nutrition.calories || 0;
        totalCarbs += fruit.nutrition.carbs || 0;
        totalProtein += fruit.nutrition.protein || 0;
        totalFat += fruit.nutrition.fat || 0;
      }
    });
  
    return {
      totalCalories,
      totalCarbs,
      totalProtein,
      totalFat
    };
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
    // Get the selected fruit values from the form
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;
  
    // Create an array of the selected fruit values
    const fruitSelections = [fruit1, fruit2, fruit3];
  
    // Call the calculateTotalNutrition function with the fruit data and selections
    const totalNutrition = calculateTotalNutrition(fruitData, fruitSelections);
  
    // Display the total nutritional values in the output div
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
      <p>Total Calories: ${totalNutrition.totalCalories}</p>
      <p>Total Carbs: ${totalNutrition.totalCarbs}</p>
      <p>Total Protein: ${totalNutrition.totalProtein}</p>
      <p>Total Fat: ${totalNutrition.totalFat}</p>
    `;
  }
  
  // Add an event listener to the form submit button
  document.getElementById('orderForm').addEventListener('submit', handleFormSubmit);
  
  // Fetch fruit data when the page loads
  let fruitData;
  
  async function fetchFruitData() {
    try {
      const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json');
      fruitData = await response.json();
      
      // Populate select elements with fruit options
      const fruitOptions = fruitData.map(fruit => `<option value="${fruit.name}">${fruit.name}</option>`);
      document.getElementById('fruit1').innerHTML = fruitOptions.join('');
      document.getElementById('fruit2').innerHTML = fruitOptions.join('');
      document.getElementById('fruit3').innerHTML = fruitOptions.join('');
    } catch (error) {
      console.log('Error fetching fruit data:', error);
    }
  }
  
  // Fetch fruit data when the page loads
  fetchFruitData();
  