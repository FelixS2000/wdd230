document.addEventListener("DOMContentLoaded", function() {
  // Load the fruit options from the JSON data source
  var request = new XMLHttpRequest();
  request.open("GET", "https://brotherblazzard.github.io/canvas-content/fruit.json", true);
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var data = JSON.parse(request.responseText);
      var fruits = data.fruits;

      // Populate the select elements with fruit options
      var selectElements = document.getElementsByClassName("fruit-select");
      for (var i = 0; i < selectElements.length; i++) {
        for (var j = 0; j < fruits.length; j++) {
          var option = document.createElement("option");
          option.value = fruits[j].name;
          option.text = fruits[j].name;
          selectElements[i].appendChild(option);
        }
      }
    }
  };
  request.send();

  // Handle form submission
  var form = document.getElementById("order-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the input values
    var firstName = document.getElementById("first-name").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var fruitSelections = [];
    var fruitSelectElements = document.getElementsByClassName("fruit-select");
    for (var i = 0; i < fruitSelectElements.length; i++) {
      fruitSelections.push(fruitSelectElements[i].value);
    }
    var specialInstructions = document.getElementById("special-instructions").value;

    // Get the current date
    var currentDate = new Date().toLocaleDateString();

    // Calculate the total nutrition values based on the selected fruits
    var totalCarbs = 0;
    var totalProtein = 0;
    var totalFat = 0;
    var totalSugar = 0;
    var totalCalories = 0;
    var fruits = JSON.parse(request.responseText).fruits;
    for (var i = 0; i < fruitSelections.length; i++) {
      var fruit = fruits.find(function(item) {
        return item.name === fruitSelections[i];
      });
      if (fruit) {
        totalCarbs += fruit.nutrition.carbs;
        totalProtein += fruit.nutrition.protein;
        totalFat += fruit.nutrition.fat;
        totalSugar += fruit.nutrition.sugar;
        totalCalories += fruit.nutrition.calories;
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
    output += "- Carbohydrates: " + totalCarbs + "g<br>";
    output += "- Protein: " + totalProtein + "g<br>";
    output += "- Fat: " + totalFat + "g<br>";
    output += "- Sugar: " + totalSugar + "g<br>";
    output += "- Calories: " + totalCalories + "cal<br>";

    document.getElementById("output-area").innerHTML = output;
  });
});