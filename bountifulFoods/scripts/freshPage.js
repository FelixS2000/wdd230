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
 });