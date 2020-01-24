const form = document.getElementById('main__form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-address');
const password = document.getElementById('password');

form.addEventListener('submit', function(event){
    // Each time the user types something, we check if the
    // form fields are valid.
  
    event.preventDefault();


    if (firstName.value === '') {
        showError(firstName, 'Please enter your last name');
        
      } else {
        // If there is still an error, show the correct error
        showSuccess(firstName);
      }

      if (lastName.value === '') {
        showError(lastName, 'Please enter your last name');
        
      } else {
        // If there is still an error, show the correct error
        showSuccess(lastName);
      }
 
      if (email.value === '') {
        showError(email, 'Please enter your last name');
        
      } else {
        // If there is still an error, show the correct error
        showSuccess(email);
      }

      if (password.value === '') {
        showError(password, 'Please enter your last name');
        
      } else {
        // If there is still an error, show the correct error
        showSuccess(password);
      }

  })

  function showError(input, message){
     const inputContainer = input.parentElement;
     const small = inputContainer.querySelector('small');
     inputContainer.className = 'input-field invalid';
     input.placeholder ='';
     small.innertext = message;
      
    }

    function showSuccess(input){
        const inputContainer = input.parentElement;
        inputContainer.className = 'input-field';

    }