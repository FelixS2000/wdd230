// Function to handle form submission and display the output
function handleFormSubmission(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('emailUser').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;
    const instructions = document.getElementById('instructions').value;
  
    // Retrieve the fruit data from localStorage
    const fruitData = JSON.parse(localStorage.getItem('fruitData'));
  
    // Calculate the total nutritional values based on the selected fruits
    const totalNutrition = calculateTotalNutrition([fruit1, fruit2, fruit3], fruitData);
  
    // Format the output string
    const output = `
      <h2>Order Summary</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Fruit 1:</strong> ${fruit1}</p>
      <p><strong>Fruit 2:</strong> ${fruit2}</p>
      <p><strong>Fruit 3:</strong> ${fruit3}</p>
      <p><strong>Special Instructions:</strong> ${instructions}</p>
      <h3>Total Nutrition</h3>
      <p><strong>Carbohydrates:</strong> ${totalNutrition.carbohydrates} g</p>
      <p><strong>Protein:</strong> ${totalNutrition.protein} g</p>
      <p><strong>Fat:</strong> ${totalNutrition.fat} g</p>
      <p><strong>Sugar:</strong> ${totalNutrition.sugar} g</p>
      <p><strong>Calories:</strong> ${totalNutrition.calories} kcal</p>
    `;
  
    // Display the output in the output area
    const outputArea = document.getElementById('outputArea');
    outputArea.innerHTML = output;
  }
  
  // Function to calculate the total nutritional values based on the selected fruits
  function calculateTotalNutrition(selectedFruits, fruitData) {
    let totalNutrition = {
      carbohydrates: 0,
      protein: 0,
      fat: 0,
      sugar: 0,
      calories: 0
    };
  
    selectedFruits.forEach(fruitName => {
      const fruit = fruitData.find(fruit => fruit.name === fruitName);
      if (fruit) {
        totalNutrition.carbohydrates += fruit.nutrition.carbohydrates;
        totalNutrition.protein += fruit.nutrition.protein;
        totalNutrition.fat += fruit.nutrition.fat;
        totalNutrition.sugar += fruit.nutrition.sugar;
        totalNutrition.calories += fruit.nutrition.calories;
      }
    });
  
    return totalNutrition;
  }
  
  // Initialize the page
  function initializePage() {
    fetchFruitData()
      .then(fruitData => {
        populateFruitOptions(fruitData);
        localStorage.setItem('fruitData', JSON.stringify(fruitData));
      })
      .catch(error => console.log('Error:', error));
  
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', handleFormSubmission);
  }
  
  // Run the initialization function when the page is fully loaded
  window.addEventListener('load', initializePage);
  