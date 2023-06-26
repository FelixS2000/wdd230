/*Contact Js*/
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform your desired action with the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form after submission
    form.reset();
});
