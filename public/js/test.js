const form = document.querySelector('#main-form');
let fields = Array.from(document.querySelectorAll('input'));

// validate form
function validateForm(event) {
    // validate each input field
    fields.forEach((field) => {
        let name = field.name;
        let id = field.id;
        let error = document.querySelector(`#${id}Error`);
        let isValid = field.validity.valid;
        // add error state on invalid input
        if (!isValid) {
            event.preventDefault();
            field.style.borderColor = 'red';
            field.style.background = 'url("images/icon-error.svg") no-repeat 98%';
            // display error messages
            error.textContent = "Please enter a valid " + name;
            error.classList.add("errormsg");
            if (field.validity.typeMismatch) error.textContent = "Looks like this is not an " + name;
            if (field.validity.valueMissing) error.textContent = name + " cannot be empty";
            if (field.validity.tooShort) error.textContent = name + " must be min " + field.getAttribute("minlength") + " characters";
            // change email placeholder on invalid input
            if (name = 'Email') {
                let email = document.querySelector('#email');
                email.placeholder = "email@example.com";
            }
        }
        // reset form on submit
        else {
            error.textContent = '.';
            field.style.borderColor = 'inherit';
            field.style.background = 'none';
        }
        // reset error state on field input
        field.oninput = function () {
            error.textContent = '.';
            field.style.borderColor = 'initial';
            field.style.background = 'none';
        }
    });
}

// validate form on submit
form.addEventListener('submit', validateForm);


// When the user starts to type something inside the password field
password.onkeyup = function passwordValidity() {
  // Validate lowercase letters

  if(password.value.match(lowerCaseLetters)) {
    pwletter.classList.remove("wrongpw");
    pwletter.classList.add("validpassw");
  } else {
    pwletter.classList.remove("validpassw");
    pwletter.classList.add("wrongpw");
}

  // Validate capital letters
  
  if(password.value.match(upperCaseLetters)) {
    pwcapital.classList.remove("wrongpw");
    pwcapital.classList.add("validpassw");
  } else {
    pwcapital.classList.remove("validpassw");
    pwcapital.classList.add("wrongpw");
  }

  // Validate numbers
  
  if(password.value.match(numbers)) {
    pwnumber.classList.remove("wrongpw");
    pwnumber.classList.add("validpassw");
  } else {
    pwnumber.classList.remove("validpassw");
    pwnumber.classList.add("wrongpw");
  }

  // Validate length
  if(password.value.length >= 8) {
    pwlength.classList.remove("wrongpw");
    pwlength.classList.add("validpassw");
  } else {
    pwlength.classList.remove("validpassw");
    pwlength.classList.add("wrongpw");
  }


}
