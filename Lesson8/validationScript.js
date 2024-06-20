    // JavaScript code for form validation

	// Prevent form from submitting
let form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve the input field value
    let inputField = document.getElementById('inputField').value;

      // Regular expression pattern for alphanumeric input
    let alphaRegex = /^[a-zA-Z0-9]+$/;

      // Check if the input value matches the pattern
    if(alphaRegex.test(inputField)) {
        // Valid input: display confirmation and submit the form
        console.log('Your form has been submitted!');
        alert('Your form has been submitted!');
    } else {
        // Invalid input: display error message
        alert('Your form should only contain alphanumeric characters. Please try again.');
    }

})
      

