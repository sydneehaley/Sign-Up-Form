
const form = document.getElementById('main__form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-address');
const password = document.getElementById('password');
const cfpassword = document.getElementById('confrmpassword');

const pwletter = document.getElementById("letter");
const pwcapital = document.getElementById("capital");
const pwnumber = document.getElementById("number");
const pwlength = document.getElementById("length");

const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;

const popup =  document.getElementById("popupBox");

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
    } else if(correctEmail(email.value) === false) {
        makeError();
    } 
    else {
        makeSuccess(email);
    }
    if(password.value === '') {
        makeError(password,'Please create an password.');
        changePlaceholder();
    } else {
        makeSuccess(password)
    }

    if(cfpassword.value == password.value) {
        makeSuccess(cfpassword)}
        else{
          makeError(cfpassword,'Password do not match.')}
  })


function makeError(input, err) {
    const inputBlock = input.parentElement;
    const small = inputBlock.querySelector('span');
    inputBlock.className = 'input-field invalid';
    input.placeholder = '';
    small.innerText = err;
}

function makeSuccess(input) {
  const inputContainer = input.parentElement;
  inputContainer.className = 'input-field'; 
}

   function changePlaceholder(){
    var fnameph = document.getElementById('first-name').placeholder = "Please provide your first name";
    var lnameph = document.getElementById('last-name').placeholder = "Please provide your last name";
    var emailph = document.getElementById('email-address').placeholder = "Please provide an email address.";
    var pwph = document.getElementById('password').placeholder = "Please create a password";

  }


function correctEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // supplies values for a valid email address

    return re.test(email); 
}







// When the user clicks on the password field, show the message box

  
password.onfocus = function popupPassword(){ 
  
   popup.classList.toggle("show");}
  

  


  
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
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }

   
  }

  function togglecPassword() {
    var x = document.getElementById("confrmpassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }

   
  }

  
               
             
                  
            
                
                
