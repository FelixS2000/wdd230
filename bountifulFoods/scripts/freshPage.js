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
        let output = `
          <h2>Order Summary</h2>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Fruit 1:</strong> ${fruit1}</p>
          <p><strong>Fruit 2:</strong> ${fruit2}</p>
          <p><strong>Fruit 3:</strong> ${fruit3}</p>
          <p><strong>Special Instructions:</strong> ${instructions}</p>
        `;
  
        // Add the nutrition information if it exists
        if (Object.keys(totalNutrition).length > 0) {
          output += `
            <h3>Total Nutrition</h3>
            ${totalNutrition.carbohydrates ? `<p><strong>Carbohydrates:</strong> ${totalNutrition.carbohydrates} g</p>` : ''}
            ${totalNutrition.protein ? `<p><strong>Protein:</strong> ${totalNutrition.protein} g</p>` : ''}
            ${totalNutrition.fat ? `<p><strong>Fat:</strong> ${totalNutrition.fat} g</p>` : ''}
            ${totalNutrition.sugar ? `<p><strong>Sugar:</strong> ${totalNutrition.sugar} g</p>` : ''}
            ${totalNutrition.calories ? `<p><strong>Calories:</strong> ${totalNutrition.calories} kcal</p>` : ''}
          `;
        }
  
        // Display the output in the output area
        const outputArea = document.getElementById('outputArea');
        outputArea.innerHTML = output;
      })
      .catch(error => {
        throw new Error('Error:', error);
        // Handle the error, e.g., display an error message
      });
  }
  