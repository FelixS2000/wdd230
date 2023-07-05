// Function to fetch the fruit data from the JSON source
async function fetchFruitData() {
    try {
      const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching fruit data:', error);
      return [];
    }
  }
  
  // Function to calculate the total nutritional values based on selected fruits
  function calculateTotalNutrition(fruitData, fruitSelections) {
    let totalCarbs = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalSugar = 0;
    let totalCalories = 0;
  
    for (const selection of fruitSelections) {
      const fruit = fruitData.find(item => item.name === selection);
      if (fruit) {
        totalCarbs += fruit.nutrition.carbs;
        totalProtein += fruit.nutrition.protein;
        totalFat += fruit.nutrition.fat;
        totalSugar += fruit.nutrition.sugar;
        totalCalories += fruit.nutrition.calories;
      }
    }
  
    return {
      totalCarbs,
      totalProtein,
      totalFat,
      totalSugar,
      totalCalories
    };
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;
    const specialInstructions = document.getElementById('specialInstructions').value;
  
    const fruitSelections = [fruit1, fruit2, fruit3];
  
    fetchFruitData().then(fruitData => {
        const totalNutrition = calculateTotalNutrition(fruitData, fruitSelections);
        const currentDate = new Date().toLocaleDateString();
    
        // Create the formatted output
        let output = `
          <h3>Order Details:</h3>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Fruit 1:</strong> ${fruit1}</p>
          <p><strong>Fruit 2:</strong> ${fruit2}</p>
          <p><strong>Fruit 3:</strong> ${fruit3}</p>
          <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
    
          <h3>Nutritional Information:</h3>
          <p><strong>Total Carbohydrates:</strong> ${totalNutrition.totalCarbs} g</p>
          <p><strong>Total Protein:</strong> ${totalNutrition.totalProtein} g</p>
          <p><strong>Total Fat:</strong> ${totalNutrition.totalFat} g</p>
          <p><strong>Total Sugar:</strong> ${totalNutrition.totalSugar} g</p>
          <p><strong>Total Calories:</strong> ${totalNutrition.totalCalories} cal</p>
    
          <p><strong>Order Date:</strong> ${currentDate}</p>
        `;
    
        document.getElementById('orderSummary').innerHTML = output;
      })
      .catch(error => {
        console.log('Error:', error);
        document.getElementById('orderSummary').innerHTML = '<p>Error processing the order. Please try again.</p>';
      });
    }
      