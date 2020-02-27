const form = document.querySelector('#main-form');

let firstName = document.querySelector('#fname');
let lastName = document.querySelector('#lname');
let email = document.querySelector('#email');
let password = document.querySelector('#pw');
let cfpassword = document.querySelector('#cfpw');

let fnError = document.querySelector('#fnerror');
let lnError = document.querySelector('#lnerror');
let emError = document.querySelector('#emerror');
let pwError = document.querySelector('#pwerror');
let cfpwError = document.querySelector('#cfpwerror');

const pwletter = document.getElementById("letter");
const pwcapital = document.getElementById("capital");
const pwnumber = document.getElementById("number");
const pwlength = document.getElementById("length");

const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;

//a password between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
const passwValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
//email address validation
const emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const letters = /^[A-Za-z]+$/;

function validateForm(){

// validation for first name field
    if (firstName.value === ''){
        event.preventDefault();
        firstName.style.borderColor = 'red';
        firstName.style.background = 'url("images/times-circle-solid.svg") no-repeat 99%';
        firstName.style.backgroundSize = '6%';
        // display error messages
        fnError.textContent = "Please enter your first name";
        fnError.classList.add("errormsg");
    }

    else if(firstName.value.match(letters)){
        event.preventDefault();
        firstName.style.borderColor = 'hsl(154, 59%, 51%)';
        firstName.style.background = 'url("images/check-circle-solid.svg") no-repeat 99%';
        firstName.style.backgroundSize = '6%';
        // display error messages
    }

    // reset form on submit
    else {
        fnError.textContent = '.';
        firstName.style.borderColor = 'inherit';
        firstName.style.background = 'none';
    }
    // reset error state on field input
    firstName.oninput = function () {
        fnError.textContent = '.';
        firstName.style.borderColor = 'initial';
        firstName.style.background = 'none';
    }

// validation for last name field
    if (lastName.value === ''){
        event.preventDefault();
        lastName.style.borderColor = 'red';
        lastName.style.background = 'url("images/times-circle-solid.svg") no-repeat 99%';
        lastName.style.backgroundSize = '6%';
        // display error messages
        lnError.textContent = "Please enter your last name";
        lnError.classList.add("errormsg");
    }


    else if(lastName.value.match(letters)){
        event.preventDefault();
        lastName.style.borderColor = 'hsl(154, 59%, 51%)';
        lastName.style.background = 'url("images/check-circle-solid.svg") no-repeat 99%';
        lastName.style.backgroundSize = '6%';
        // display error messages
    }

    // reset form on submit
    else {
        lnError.textContent = '.';
        lastName.style.borderColor = 'inherit';
        lastName.style.background = 'none';
    }
    // reset error state on field input
    lastName.oninput = function () {
        lnError.textContent = '.';
        lastName.style.borderColor = 'initial';
        lastName.style.background = 'none';
    }

// validation for email field
if (email.value === ''){
    event.preventDefault();
    email.style.borderColor = 'red';
    email.style.background = 'url("images/times-circle-solid.svg") no-repeat 99%';
    email.style.backgroundSize = '6%';
    // display error messages
    emError.textContent = "Please enter your email address";
    emError.classList.add("errormsg");
    email.placeholder = "youremail@example.com";
}

else if (email.value !== emailValid){
    event.preventDefault();
    email.style.borderColor = 'red';
    email.style.background = 'url("images/times-circle-solid.svg") no-repeat 99%';
    email.style.backgroundSize = '6%';
    // display error messages
    emError.textContent = "Please enter an valid email address";
    emError.classList.add("errormsg");
    email.placeholder = "youremail@example.com";
}


// reset form on submit
else {
    emError.textContent = '.';
    email.style.borderColor = 'inherit';
    lastName.style.background = 'none';
}
// reset error state on field input
email.oninput = function () {
    emError.textContent = '.';
    email.style.borderColor = 'initial';
    email.style.background = 'none';
}


// validation for password field
if (password.value === ''){
    event.preventDefault();
    password.style.borderColor = 'red';
    password.style.background = 'url("images/times-circle-solid.svg") no-repeat 99%';
    password.style.backgroundSize = '6%';
    // display error messages
    pwError.textContent = "Please create a password";
    pwError.classList.add("errormsg");
}

else if (password.value.match(passwValid))  {
    event.preventDefault();
    password.style.borderColor = 'hsl(154, 59%, 51%)';
    password.style.background = 'url("images/check-circle-solid.svg") no-repeat 99%';
    password.style.backgroundSize = '6%';
    password.classList.add("successbg")
    // display error messages
    pwError.textContent = "Password meets requirements";
    pwError.classList.add("successmsg");
}


// reset form on submit
else 
{  
    pwError.textContent = '.';
    password.style.borderColor = 'inherit';
    password.style.background = 'none';
}

// reset error state on field input
password.oninput = function () {
    pwError.textContent = '.';
    password.style.borderColor = 'initial';
    password.style.background = 'none';
}

// validation for confirm password field
if (cfpassword.value === ''){
    event.preventDefault();
    cfpassword.style.borderColor = 'red';
    cfpassword.style.background = 'url("images/times-circle-solid.svg") no-repeat 99%';
    cfpassword.style.backgroundSize = '6%';
    // display error messages
    cfpwError.textContent = "Please confirm your password";
    cfpwError.classList.add("errormsg");
    
}

else if (cfpassword.value !== password.value) {
    event.preventDefault();
    cfpassword.style.borderColor = 'red';
    cfpassword.style.background = 'url("images/times-circle-solid.svg") no-repeat 99%';
    cfpassword.style.backgroundSize = '6%';
    cfpassword.style.outline = 'none';
    // display error messages
    cfpwError.textContent = "Password must match";
    cfpwError.classList.add("errormsg");
    
}

// reset form on submit
else {
    event.preventDefault();
    cfpassword.style.borderColor = 'hsl(154, 59%, 51%)';
    cfpassword.style.background = 'url("images/check-circle-solid.svg") no-repeat 99%';
    cfpassword.style.backgroundSize = '6%';
    cfpassword.classList.add("successbg")
    // display error messages
    cfpwError.textContent = "Password confirmed";
    cfpwError.classList.add("successmsg");
}
// reset error state on field input
cfpassword.oninput = function () {
    cfpwError.textContent = '.';
    cfpassword.style.borderColor = 'initial';
    cfpassword.style.background = 'none';
}



}





form.addEventListener('submit', validateForm);



function valEmail(){
if (email.value.match(emailValid)){
    event.preventDefault();
    email.style.borderColor = 'hsl(154, 59%, 51%)';
    email.style.background= 'url("images/check-circle-solid.svg") no-repeat 99%';
    email.style.backgroundSize = '6%';
    // display error messages
    emError.textContent = ".";
}
}

form.addEventListener('submit', valEmail);

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
