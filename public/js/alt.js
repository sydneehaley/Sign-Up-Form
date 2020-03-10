const form = document.querySelector('#main-form');

let firstName = document.querySelector('#fname');
let lastName = document.querySelector('#lname');
let email = document.querySelector('#email');
let username = document.querySelector('#username');
let password = document.querySelector('#pw');
let cfpassword = document.querySelector('#cfpw');

let fnError = document.querySelector('#fnerror');
let lnError = document.querySelector('#lnerror');
let emError = document.querySelector('#emerror');
let userError = document.querySelector('#usnerror');
let pwError = document.querySelector('#pwerror');
let cfpwError = document.querySelector('#cfpwerror');

const pwletter = document.getElementById("letter");
const pwcapital = document.getElementById("capital");
const pwnumber = document.getElementById("number");
const pwlength = document.getElementById("length");

const togglePwButton = document.querySelector('#togglepw');
const toggleCfPwButton = document.querySelector('#togglecfpw');

const toggleButtonPass = document.querySelector('#togglepw button');
const toggleButtonCon = document.querySelector('#togglecfpw button');

const passSignalLower = document.querySelector('#passvalidicon');
const passSignalUpper = document.querySelector('#passvalidicon2');
const passSignalNumber = document.querySelector('#passvalidicon3');
const passSignalChara = document.querySelector('#passvalidicon4');

const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;

//a password between 8 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
const passwValid =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
//email address validation
const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const letters = /^[A-Za-z]+$/;


function validateForm(){

// validation for first name field
    if (firstName.value === ''){
        event.preventDefault();
        firstName.style.background = 'hsla(0, 100%, 90%, 1)';
        
       
        // display error messages
        fnError.textContent = "Please enter your first name";
        fnError.classList.add("errormsg");
    }

    else if(firstName.value.match(letters)){
        event.preventDefault();
        firstName.style.background  = 'hsla(154, 59%, 81%, 1)';
        

        // display error messages
    }

    // reset form on submit
    else {
        fnError.textContent = '.';
        firstName.style.background = '#F1F1F3';
        
    }
    // reset error state on field input
    firstName.oninput = function () {
        fnError.textContent = '.';
        firstName.style.background = '#F1F1F3';
        
    }

// validation for last name field
    if (lastName.value === ''){
        event.preventDefault();
        lastName.style.background = 'hsla(0, 100%, 90%, 1)';
        
        
        // display error messages
        lnError.textContent = "Please Enter Your Last Name";
        lnError.classList.add("errormsg");
    }


    else if(lastName.value.match(letters)){
        event.preventDefault();
        lastName.style.background  = 'hsla(154, 59%, 81%, 1)';
        
        // display error messages
    }

    // reset form on submit
    else {
        lnError.textContent = '.';
        lastName.style.background = '#F1F1F3';
    }
    // reset error state on field input
    lastName.oninput = function () {
        lnError.textContent = '.';
        lastName.style.background = '#F1F1F3';
        
    }

// validation for email field
if (email.value !== emailValid){
    event.preventDefault();
    email.style.background = 'hsla(0, 100%, 90%, 1)';
    
    
    // display error messages
    emError.textContent = "Please Enter Your Email Address";
    emError.classList.add("errormsg");
    
}




// reset error state on field input
email.oninput = function () {
    emError.textContent = '.';
    email.style.background = '#F1F1F3';
    
}



// validation for password field


if (password.value.match(passwValid))
{  event.preventDefault();
    password.style.background  = 'hsla(154, 59%, 81%, 1)';
    togglePwButton.style.background = 'hsla(154, 59%, 81%, 1)';

    // display error messages
    pwError.textContent = "Password Meets Requirements";
    pwError.classList.add("successmsg");
    pwError.style.color = 'hsl(154, 59%, 51%)';
}

else {event.preventDefault();
    password.style.background = 'hsla(0, 100%, 90%, 1)';
    togglePwButton.style.background = 'hsla(0, 100%, 90%, 1)';
   
    // display error messages
    pwError.textContent = "Please Create a Valid Password";
    pwError.classList.add("errormsg");
    pwError.style.color = 'hsl(0, 100%, 74%)';
}

// reset error state on field input
password.oninput = function () {
    pwError.textContent = '.';
    password.style.background = '#F1F1F3';
    togglePwButton.style.background = '#F1F1F3';
}
}

form.addEventListener('submit', validateForm);

function valEmail(){

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
{ event.preventDefault();
    email.style.background = 'hsla(154, 59%, 81%, 1)';
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
      passSignalLower.style.color = 'hsl(154, 59%, 51%)';

    } else {
      pwletter.classList.remove("validpassw");
      pwletter.classList.add("wrongpw");
  }
  
    // Validate capital letters
    
    if(password.value.match(upperCaseLetters)) {
      pwcapital.classList.remove("wrongpw");
      pwcapital.classList.add("validpassw");
      passSignalUpper.style.color = 'hsl(154, 59%, 51%)';
    } else {
      pwcapital.classList.remove("validpassw");
      pwcapital.classList.add("wrongpw");
    }
  
    // Validate numbers
    
    if(password.value.match(numbers)) {
      pwnumber.classList.remove("wrongpw");
      pwnumber.classList.add("validpassw");
      passSignalNumber.style.color = 'hsl(154, 59%, 51%)';
    } else {
      pwnumber.classList.remove("validpassw");
      pwnumber.classList.add("wrongpw");
    }
  
    // Validate length
    if(password.value.length >= 8) {
      pwlength.classList.remove("wrongpw");
      pwlength.classList.add("validpassw");
      passSignalChara.style.color = 'hsl(154, 59%, 51%)';
    } else {
      pwlength.classList.remove("validpassw");
      pwlength.classList.add("wrongpw");
    }
  

  }
9
  

  
togglePwButton.onclick = function() {passwordToggle()};

  function passwordToggle() {
    var x = document.getElementById("pw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }

  }

  

  