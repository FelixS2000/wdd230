// Fetch the fruit data from the JSON source
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(data => {
    // Get the three select elements
    const selectElements = document.querySelectorAll('.fruit-select');

    // Populate the select elements with fruit options
    data.forEach(fruit => {
      const option = document.createElement('option');
      option.value = fruit.name;
      option.textContent = fruit.name;

      selectElements.forEach(select => {
        select.appendChild(option.cloneNode(true));
      });
    });

    // Handle form submission
    document.getElementById('order-form').addEventListener('submit', function(event) {
      event.preventDefault();

      // Get input values
      const firstName = document.getElementById('first-name').value;
      const email = document.getElementById('email').value;
      const phoneNumber = document.getElementById('phone-number').value;
      const fruitSelections = document.querySelectorAll('.fruit-select');
      const specialInstructions = document.getElementById('special-instructions').value;

      // Get selected fruit names
      const selectedFruits = Array.from(fruitSelections).map(select => select.value);

      // Calculate nutritional information
      const nutritionalInfo = {
        carbohydrates: 0,
        protein: 0,
        fat: 0,
        sugar: 0,
        calories: 0
      };

      selectedFruits.forEach(fruit => {
        const fruitData = data.find(item => item.name === fruit);
        nutritionalInfo.carbohydrates += fruitData.carbohydrates;
        nutritionalInfo.protein += fruitData.protein;
        nutritionalInfo.fat += fruitData.fat;
        nutritionalInfo.sugar += fruitData.sugar;
        nutritionalInfo.calories += fruitData.calories;
      });

      // Get current date and time
      const currentDate = new Date().toLocaleString();

      // Generate order summary
      const orderSummary = `
        <p><strong>Order Details:</strong></p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Fruit Selections:</strong> ${selectedFruits.join(', ')}</p>
        <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
        <p><strong>Order Date:</strong> ${currentDate}</p>
        <p><strong>Nutritional Information:</strong></p>
        <ul>
          <li>Carbohydrates: ${nutritionalInfo.carbohydrates}g</li>
          <li>Protein: ${nutritionalInfo.protein}g</li>
          <li>Fat: ${nutritionalInfo.fat}g</li>
          <li>Sugar: ${nutritionalInfo.sugar}g</li>
          <li>Calories: ${nutritionalInfo.calories}kcal</li>
        </ul>
      `;

      // Display order summary
      const outputArea = document.getElementById('output-area');
      outputArea.innerHTML = orderSummary;
    });
  });
