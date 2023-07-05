// Function to fetch fruit data from the JSON data source
function fetchFruitData() {
    const jsonURL = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
  
    // Make a GET request to the JSON data source
    return fetch(jsonURL)
      .then(response => response.json())
      .catch(error => {
        throw new Error("Error fetching fruit data:", error);
      });
  }
  
  // Function to populate the fruit options in the select elements
  function populateFruitOptions(fruitData) {
    const selectElements = document.querySelectorAll('select[id^="fruit"]');
  
    selectElements.forEach(selectElement => {
      fruitData.forEach(fruit => {
        const option = document.createElement('option');
        option.value = fruit.name;
        option.textContent = fruit.name;
        selectElement.appendChild(option);
      });
    });
  }
  
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
  
    // Calculate the total nutritional values based on the selected fruits
    fetchFruitData()
      .then(fruitData => {
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
      })
      .catch(error => {
        throw new Error('Error:', error);
        // Handle the error, e.g., display an error message
      });
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
      if (fruit && fruit.nutrition) {
        totalNutrition.carbohydrates += fruit.nutrition.carbohydrates || 0;
        totalNutrition.protein += fruit.nutrition.protein || 0;
        totalNutrition.fat += fruit.nutrition.fat || 0;
        totalNutrition.sugar += fruit.nutrition.sugar || 0;
        totalNutrition.calories += fruit.nutrition.calories || 0;
      }
    });
  
    // Remove the properties with value 0
    Object.keys(totalNutrition).forEach(key => {
      if (totalNutrition[key] === 0) {
        delete totalNutrition[key];
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
  