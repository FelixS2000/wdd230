document.addEventListener("DOMContentLoaded", function() {
  // Fetch fruit data and populate select elements
  fetch("https://brotherblazzard.github.io/canvas-content/fruit.json")
    .then(response => response.json())
    .then(data => {
      var fruits = data.fruits;
      var selectElements = document.getElementsByClassName("fruit-select");
  
      for (var i = 0; i < selectElements.length; i++) {
        for (var j = 0; j < fruits.length; j++) {
          var option = document.createElement("option");
          option.value = fruits[j].name;
          option.text = fruits[j].name;
          selectElements[i].appendChild(option);
        }
      }
    })
    .catch(error => {
      console.error("Error fetching fruit data:", error);
    });

  // Handle form submission
  var form = document.getElementById("order-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the input values
    var firstName = document.getElementById("first-name").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var fruitSelections = Array.from(document.getElementsByClassName("fruit-select")).map(select => select.value);
    var specialInstructions = document.getElementById("special-instructions").value;
    var currentDate = new Date().toLocaleDateString();

    // Calculate the total nutrition values based on the selected fruits
    var fruits = Array.from(document.getElementById("fruit1").options).map(option => option.value);
    var totalNutrition = {
      carbs: 0,
      protein: 0,
      fat: 0,
      sugar: 0,
      calories: 0
    };

    for (var i = 0; i < fruitSelections.length; i++) {
      var fruit = fruits.find(item => item === fruitSelections[i]);
      if (fruit) {
        var fruitData = data.fruits.find(item => item.name === fruit);
        totalNutrition.carbs += fruitData.nutrition.carbs;
        totalNutrition.protein += fruitData.nutrition.protein;
        totalNutrition.fat += fruitData.nutrition.fat;
        totalNutrition.sugar += fruitData.nutrition.sugar;
        totalNutrition.calories += fruitData.nutrition.calories;
      }
    }

    // Display the formatted output
    var output = "First Name: " + firstName + "<br>";
    output += "Email: " + email + "<br>";
    output += "Phone Number: " + phoneNumber + "<br>";
    output += "Fruit Selections: " + fruitSelections.join(", ") + "<br>";
    output += "Special Instructions: " + specialInstructions + "<br>";
    output += "Order Date: " + currentDate + "<br>";
    output += "Total Nutrition Values:<br>";
    output += "- Carbohydrates: " + totalNutrition.carbs + "g<br>";
    output += "- Protein: " + totalNutrition.protein + "g<br>";
    output += "- Fat: " + totalNutrition.fat + "g<br>";
    output += "- Sugar: " + totalNutrition.sugar + "g<br>";
    output += "- Calories: " + totalNutrition.calories + "cal<br>";

    document.getElementById("output-area").innerHTML = output;
  });
});
