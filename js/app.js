
const form = document.getElementById('main__form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-address');
const password = document.getElementById('password');



form.addEventListener('submit', function(event){
    
    event.preventDefault();

    if (firstName.value === '') {
        makeError(firstName, 'This field is required.');
        changePlaceholder();
    } else {
        makeSuccess(firstName)
    }

    
    if (lastName.value === '') {
        makeError(lastName,'This field is required.');
        changePlaceholder();
    } else {
        makeSuccess(lastName);
    }
    if (email.value === '') {
        makeError(email,'This field is required.');
        changePlaceholder();
    } else if(isEmail(email.value) === false) {
        makeError();
    } 
    else {
        makeSuccess(email);
    }
    if(password.value === '') {
        makeError(password,'This field is required.');
        changePlaceholder();
    } else {
        makeSuccess(password)
    }
})


function makeError(input, err) {
    const inputBlock = input.parentElement;
    const small = inputBlock.querySelector('span');
    inputBlock.className = 'input-field invalid';
    input.placeholder = '';
    small.innerText = err;
}


   function changePlaceholder(){
    var fnameph = document.getElementById('first-name').placeholder = "Please provide your first name";
    var lnameph = document.getElementById('last-name').placeholder = "Please provide your last name";
    var emailph = document.getElementById('email-address').placeholder = "Please provide an email address.";
    var pwph = document.getElementById('password').placeholder = "Please create a password";

  }
function makeSuccess(input) {
    const inputContainer = input.parentElement;
    inputContainer.className = 'input-field'; 
}

function correctEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // supplies values for a valid email address

    return re.test(email); 
}



var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  }
  
  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
    document.getElementById("pw__message").style.display = "none";
  }
  
  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("wrongpw");
      letter.classList.add("validpassw");
    } else {
      letter.classList.remove("validpassw");
      letter.classList.add("wrongpw");
  }
  
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("wrongpw");
      capital.classList.add("validpassw");
    } else {
      capital.classList.remove("validpassw");
      capital.classList.add("wrongpw");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
      number.classList.remove("wrongpw");
      number.classList.add("validpassw");
    } else {
      number.classList.remove("validpassw");
      number.classList.add("wrongpw");
    }
  
    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("wrongpw");
      length.classList.add("validpassw");
    } else {
      length.classList.remove("validpassw");
      length.classList.add("wrongpw");
    }
  }

  function togglePassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }

   
  }

