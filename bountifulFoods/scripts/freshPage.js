// Function to fetch fruit data from the JSON data source
function fetchFruitData() {
    const jsonURL = 'fruitData.json';
  
    // Make a GET request to the JSON data source
    return fetch(jsonURL)
      .then(response => response.json())
      .catch(error => {
        throw new Error("Error fetching fruit data:", error);
      });
  }
  
  // Rest of the code remains the same...
  
  // Function to calculate the total nutritional values based on the selected fruits
  function calculateTotalNutrition(selectedFruits, fruitData) {
    let totalNutrition = {
      count: 0,
      carbohydrates: 0,
      protein: 0,
      fat: 0,
      sugar: 0,
      calories: 0
    };
  
    selectedFruits.forEach(fruitName => {
      const fruit = fruitData.find(fruit => fruit.name === fruitName);
      if (fruit && fruit.nutrition) {
        totalNutrition.count++;
        totalNutrition.carbohydrates += fruit.nutrition.carbohydrates || 0;
        totalNutrition.protein += fruit.nutrition.protein || 0;
        totalNutrition.fat += fruit.nutrition.fat || 0;
        totalNutrition.sugar += fruit.nutrition.sugar || 0;
        totalNutrition.calories += fruit.nutrition.calories || 0;
      }
    });
  
    return totalNutrition;
  }
  
  
  
  
  // Initialize the page
  function initializePage() {
    fetchFruitData()
      .then(fruitData => {
        populateFruitOptions(fruitData);
      })
      .catch(error => {
        throw new Error('Error:', error);
        // Handle the error, e.g., display an error message
      });
  
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', handleFormSubmission);
  }
  
  // Run the initialization function when the page is fully loaded
  window.addEventListener('load', initializePage);
  