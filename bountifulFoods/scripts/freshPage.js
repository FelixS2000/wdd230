function calculateTotalNutrition(fruitSelections) {
  let totalCarbs = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalCalories = 0;
  let totalSugar = 0;

  fruitSelections.forEach(selection => {
    const fruit = fruitData.find(item => item.name === selection);

    if (fruit && fruit.nutrition) {
      const nutrition = fruit.nutrition;
      totalCarbs += nutrition.carbs ? nutrition.carbs : 0;
      totalProtein += nutrition.protein ? nutrition.protein : 0;
      totalFat += nutrition.fat ? nutrition.fat : 0;
      totalCalories += nutrition.calories ? nutrition.calories : 0;
      totalSugar += nutrition.sugar ? nutrition.sugar : 0;
    }
  });

  return {
    totalCarbs,
    totalProtein,
    totalFat,
    totalCalories,
    totalSugar
  };
}

function handleFormSubmit(event) {
  event.preventDefault();

  const fruit1 = document.getElementById('fruit1').value;
  const fruit2 = document.getElementById('fruit2').value;
  const fruit3 = document.getElementById('fruit3').value;

  const fruitSelections = [fruit1, fruit2, fruit3];

  const totalNutrition = calculateTotalNutrition(fruitSelections);

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `
    <h3>Order Summary:</h3>
    <p>Selected Fruits:</p>
    <ul>
      ${fruitSelections.map(fruit => `<li>${fruit}</li>`).join('')}
    </ul>
    <p>Total Carbs: ${totalNutrition.totalCarbs}</p>
    <p>Total Protein: ${totalNutrition.totalProtein}</p>
    <p>Total Fat: ${totalNutrition.totalFat}</p>
    <p>Total Calories: ${totalNutrition.totalCalories}</p>
    <p>Total Sugar: ${totalNutrition.totalSugar}</p>
  `;

  const specialInstructions = document.getElementById('specialInstructions').value;
  outputDiv.innerHTML += `
    <p>Special Instructions: ${specialInstructions}</p>
  `;
}

document.getElementById('orderForm').addEventListener('submit', handleFormSubmit);

let fruitData;

async function fetchFruitData() {
  try {
    const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json');
    const data = await response.json();
    fruitData = data.fruits;

    const fruitOptions = fruitData.map(fruit => `<option value="${fruit.name}">${fruit.name}</option>`);
    document.getElementById('fruit1').innerHTML = fruitOptions.join('');
    document.getElementById('fruit2').innerHTML = fruitOptions.join('');
    document.getElementById('fruit3').innerHTML = fruitOptions.join('');

    const form = document.getElementById('orderForm');
    form.addEventListener('submit', handleFormSubmit); // Add event listener here as well

    // Call calculateTotalNutrition function here
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;

    const fruitSelections = [fruit1, fruit2, fruit3];

    const totalNutrition = calculateTotalNutrition(fruitSelections);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
      <h3>Order Summary:</h3>
      <p>Selected Fruits:</p>
      <ul>
        ${fruitSelections.map(fruit => `<li>${fruit}</li>`).join('')}
      </ul>
      <p>Total Carbs: ${totalNutrition.totalCarbs}</p>
      <p>Total Protein: ${totalNutrition.totalProtein}</p>
      <p>Total Fat: ${totalNutrition.totalFat}</p>
      <p>Total Calories: ${totalNutrition.totalCalories}</p>
      <p>Total Sugar: ${totalNutrition.totalSugar}</p>
    `;

    const specialInstructions = document.getElementById('specialInstructions').value;
    outputDiv.innerHTML += `
      <p>Special Instructions: ${specialInstructions}</p>
    `;
  } catch (error) {
    console.log('Error fetching fruit data:', error);
  }
}

fetchFruitData();