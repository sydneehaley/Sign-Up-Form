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

const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;

//a password between 8 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter
const passwValid =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
//email address validation
const emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const letters = /^[A-Za-z]+$/;

const fieldIcn = document.querySelector('#firsticon.form__input-icon i');
const fieldIcnSecond = document.querySelector('#secondicon.form__input-icon i');
const fieldIcnThird = document.querySelector('#thirdicon.form__input-icon i');
const fieldIcnFourth = document.querySelector('#fourthicon.form__input-icon--pw i');
const fieldIcnFifth = document.querySelector('#fifthicon.form__input-icon--pw i');
const fieldIcnUser = document.querySelector('#usernicon.form__input-icon i');

function validateForm(){

// validation for first name field
    if (firstName.value === ''){
        event.preventDefault();
        firstName.style.borderColor = 'hsl(0, 100%, 74%)';
        fieldIcn.style.color = 'hsl(0, 100%, 74%)';
       
        // display error messages
        fnError.textContent = "Please enter your first name";
        fnError.classList.add("errormsg");
    }

    else if(firstName.value.match(letters)){
        event.preventDefault();
        firstName.style.borderColor = 'hsl(154, 59%, 51%)';
        fieldIcn.style.color = 'hsl(154, 59%, 51%)';

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
        fieldIcn.style.color = '#c2c2c2';
    }

// validation for last name field
    if (lastName.value === ''){
        event.preventDefault();
        lastName.style.borderColor = 'hsl(0, 100%, 74%)';
        fieldIcnSecond.style.color = 'hsl(0, 100%, 74%)';
        
        // display error messages
        lnError.textContent = "Please Enter Your Last Name";
        lnError.classList.add("errormsg");
    }


    else if(lastName.value.match(letters)){
        event.preventDefault();
        lastName.style.borderColor = 'hsl(154, 59%, 51%)';
        fieldIcnSecond.style.color = 'hsl(154, 59%, 51%)';
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
        fieldIcnSecond.style.color = '#c2c2c2';
    }

// validation for email field
if (email.value === ''){
    event.preventDefault();
    email.style.borderColor = 'hsl(0, 100%, 74%)';
    fieldIcnThird.style.color = 'hsl(0, 100%, 74%)';
    
    // display error messages
    emError.textContent = "Please Enter Your Email Address";
    emError.classList.add("errormsg");
    email.placeholder = "youremail@example.com";
}

else if (email.value !== emailValid){
    event.preventDefault();
    email.style.borderColor = 'hsl(0, 100%, 74%)';
    fieldIcnThird.style.color = 'hsl(0, 100%, 74%)';
   
    // display error messages
    emError.textContent = "Please Enter a Valid Email Address";
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
    fieldIcnThird.style.color = '#c2c2c2';
}


// validation for username field
if (username.value === ''){
    event.preventDefault();
    username.style.borderColor = 'hsl(0, 100%, 74%)';
    fieldIcnUser.style.color = 'hsl(0, 100%, 74%)';
    
    // display error messages
    userError.textContent = "Please Enter an Username";
    userError.classList.add("errormsg");
}


else if(username.value.match(letters)){
    event.preventDefault();
    username.style.borderColor = 'hsl(154, 59%, 51%)';
    fieldIcnUser.style.color = 'hsl(154, 59%, 51%)';
    // display error messages
}

// reset form on submit
else {
    userError.textContent = '.';
    username.style.borderColor = 'inherit';
    username.style.background = 'none';
    fieldIcnUser.style.color = '#c2c2c2';
}
// reset error state on field input
username.oninput = function () {
    userError.textContent = '.';
    username.style.borderColor = 'initial';
    username.style.background = 'none';
    fieldIcnUser.style.color = '#c2c2c2';
}
// validation for password field


if (password.value.match(passwValid))
{  event.preventDefault();
    password.style.borderColor = 'hsl(154, 59%, 51%)';
    fieldIcnFourth.style.color = 'hsl(154, 59%, 51%)';

    
    // display error messages
    pwError.textContent = "Password Meets Requirements";
    pwError.classList.add("successmsg");
    pwError.style.color = 'hsl(154, 59%, 51%)';
}

else 
{event.preventDefault();
    password.style.borderColor = 'hsl(0, 100%, 74%)';
    fieldIcnFourth.style.color = 'hsl(0, 100%, 74%)';
   
    // display error messages
    pwError.textContent = "Please Create a Valid Password";
    pwError.classList.add("errormsg");
    pwError.style.color = 'hsl(0, 100%, 74%)';
}


// reset error state on field input
password.oninput = function () {
    pwError.textContent = '.';
    password.style.borderColor = 'initial';
    password.style.background = 'none';
    fieldIcnFourth.style.color = '#c2c2c2';
}

// validation for confirm password field
if (cfpassword.value === ''){
    event.preventDefault();
    cfpassword.style.borderColor = 'hsl(0, 100%, 74%)';
    fieldIcnFifth.style.color = 'hsl(0, 100%, 74%)';
   
    // display error messages
    cfpwError.textContent = "Please Confirm Your Password";
    cfpwError.classList.add("errormsg");
    cfpwError.style.color = 'hsl(0, 100%, 74%)';
    
}

else if (cfpassword.value !== password.value) {
    event.preventDefault();
    cfpassword.style.borderColor = 'hsl(0, 100%, 74%)';
    fieldIcnFifth.style.color = 'hsl(0, 100%, 74%)';
    
    cfpassword.style.outline = 'none';
    // display error messages
    cfpwError.textContent = "Passwords Must Match";
    cfpwError.classList.add("errormsg");
    
    
}

// reset form on submit
else {
    event.preventDefault();
    cfpassword.style.borderColor = 'hsl(154, 59%, 51%)';
    fieldIcnFifth.style.color = 'hsl(154, 59%, 51%)';

    cfpassword.classList.add("successbg")
    // display error messages
    cfpwError.textContent = "Password Confirmed";
    cfpwError.classList.add("successmsg");
    cfpwError.style.color = 'hsl(154, 59%, 51%)';
}
// reset error state on field input
cfpassword.oninput = function () {
    cfpwError.textContent = '.';
    cfpassword.style.borderColor = 'initial';
    cfpassword.style.background = 'none';
    fieldIcnFifth.style.color = '#c2c2c2';
}



}


form.addEventListener('submit', validateForm);



function valEmail(){
if (email.value.match(emailValid)){
    event.preventDefault();
    email.style.borderColor = 'hsl(154, 59%, 51%)';
    fieldIconThird.style.color = 'hsl(154, 59%, 51%)';
    
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


  function togglePassword() {
    var x = document.getElementById("pw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }

   
  }

  function togglecPassword() {
    var x = document.getElementById("cfpw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }

   
  }