async function fetchFruitData() {
    try {
      const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json');
      const data = await response.json();
      
      // Populate select elements with fruit options
      const fruitOptions = data.map(fruit => `<option value="${fruit.name}">${fruit.name}</option>`);
      document.getElementById('fruit1').innerHTML = fruitOptions.join('');
      document.getElementById('fruit2').innerHTML = fruitOptions.join('');
      document.getElementById('fruit3').innerHTML = fruitOptions.join('');
  
      return data;
    } catch (error) {
      console.log('Error fetching fruit data:', error);
      return [];
    }
  }
  