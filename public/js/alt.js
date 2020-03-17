console.dir(document);

console.log(document.forms);

const form = document.querySelector('#main-form');

let firstName = document.querySelector('#fname');
let lastName = document.querySelector('#lname');
let email = document.querySelector('#email');
let username = document.querySelector('#username');
let password = document.querySelector('#pw');
let cfpassword = document.querySelector('#cfpw');
let passwordContainer = document.querySelector('.container__passwordtoggle');
let pwValidSection = document.querySelector('.row__password');
let firstList = document.querySelector('.passwordreq');
let secondList = document.querySelector('.passwordreq2');
let pwValidSectionRe = document.querySelector('.row__automargin');
let submitButton = document.querySelector('#btn');

let fnError = document.querySelector('#fnerror');
let lnError = document.querySelector('#lnerror');
let emError = document.querySelector('#emerror');
let userError = document.querySelector('#usnerror');
let pwError = document.querySelector('#pwerror');
let cfpwError = document.querySelector('#cfpwerror');

const pwletter = document.getElementById('letter');
const pwcapital = document.getElementById('capital');
const pwnumber = document.getElementById('number');
const pwlength = document.getElementById('length');

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
const passwValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
//email address validation
const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const letters = /^[A-Za-z]+$/;

firstName.oninput = function enableSubmitFirst() {
  if (firstName.value === '') {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

lastName.oninput = function enableSubmitSecond() {
  if (lastName.value === '') {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

email.oninput = function enableSubmitThird() {
  if (email.value === '') {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

password.oninput = function enableSubmitFour() {
  if (password.value === '') {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false;
  }
};

function validateForm() {
  // validation for first name field
  if (firstName.value === '') {
    event.preventDefault();
    firstName.style.background = 'hsla(0, 100%, 92%, 1)';
    firstName.style.border = 'none';

    fnError.textContent = 'Please enter your first name';
    fnError.classList.add('errormsg');
  } else if (firstName.value.match(letters)) {
    event.preventDefault();
    firstName.style.background = 'hsla(154, 59%, 84%, 1)';
    firstName.style.border = 'none';
  } else {
    firstName.style.background = 'hsla(0, 100%, 92%, 1)';
    firstName.style.border = 'none';
    fnError.textContent = '';
  }

  firstName.oninput = function() {
    firstName.style.background = 'transparent';
    firstName.style.border = '1px solid #dedede';
    fnError.textContent = '';
  };

  // validation for last name field
  if (lastName.value === '') {
    event.preventDefault();
    lastName.style.background = 'hsla(0, 100%, 92%, 1)';
    lastName.style.border = 'none';

    // display error messages
    lnError.textContent = 'Please Enter Your Last Name';
    lnError.classList.add('errormsg');
  } else if (lastName.value.match(letters)) {
    event.preventDefault();
    lastName.style.background = 'hsla(154, 59%, 84%, 1)';
    lastName.style.border = 'none';
  }

  // reset form on submit
  else {
    lastName.style.background = 'hsla(0, 100%, 91%, 1)';
    lastName.style.border = 'none';
    lnError.textContent = '';
  }
  // reset error state on field input
  lastName.oninput = function() {
    lastName.style.background = 'transparent';
    lastName.style.border = '1px solid #dedede';
    lnError.textContent = '';
  };

  // validation for email field
  if (email.value !== emailValid) {
    event.preventDefault();
    email.style.background = 'hsla(0, 100%, 92%, 1)';
    email.style.border = 'none';

    // display error messages
    emError.textContent = 'Please enter a valid email address';
    emError.classList.add('errormsg');
  }

  // reset error state on field input
  email.oninput = function() {
    email.style.background = 'transparent';
    email.style.border = '1px solid #dedede';
    email.textContent = '';
  };

  // validation for password field

  if (password.value.match(passwValid)) {
    event.preventDefault();
    password.style.background = 'hsla(154, 59%, 84%, 1)';
    password.style.border = 'none';

    // display error messages
    pwValidSection.style.display = 'block';
    pwValidSection.style.background = 'hsla(154, 59%, 91%, 1)';
    pwValidSectionRe.style.display = 'none';
  } else {
    event.preventDefault();
    password.style.background = 'hsla(0, 100%, 92%, 1)';
    password.style.border = 'none';

    pwValidSection.style.display = 'none';
    pwValidSectionRe.style.display = 'grid';
  }

  // reset error state on field input
  password.oninput = function() {
    password.style.background = 'transparent';
    password.style.border = '1px solid #dedede';

    pwValidSection.style.display = 'none';
    pwValidSectionRe.style.display = 'grid';
  };
}

form.addEventListener('submit', validateForm);

function valEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    event.preventDefault();
    email.style.background = 'hsla(154, 59%, 84%, 1)';
    email.style.border = 'none';
    emError.textContent = '';
  }
}

form.addEventListener('submit', valEmail);

// When the user starts to type something inside the password field
password.onkeyup = function passwordValidity() {
  // Validate lowercase letters

  if (password.value.match(lowerCaseLetters)) {
    pwletter.classList.remove('wrongpw');
    pwletter.classList.add('validpassw');
    passSignalLower.style.color = 'hsl(154, 59%, 51%)';
  } else {
    pwletter.classList.remove('validpassw');
    pwletter.classList.add('wrongpw');
    passSignalLower.style.color = 'hsl(0, 100%, 74%)';
  }

  // Validate capital letters

  if (password.value.match(upperCaseLetters)) {
    pwcapital.classList.remove('wrongpw');
    pwcapital.classList.add('validpassw');
    passSignalUpper.style.color = 'hsl(154, 59%, 51%)';
  } else {
    pwcapital.classList.remove('validpassw');
    pwcapital.classList.add('wrongpw');
    passSignalUpper.style.color = 'hsl(0, 100%, 74%)';
  }

  // Validate numbers

  if (password.value.match(numbers)) {
    pwnumber.classList.remove('wrongpw');
    pwnumber.classList.add('validpassw');
    passSignalNumber.style.color = 'hsl(154, 59%, 51%)';
  } else {
    pwnumber.classList.remove('validpassw');
    pwnumber.classList.add('wrongpw');
    passSignalNumber.style.color = 'hsl(0, 100%, 74%)';
  }

  // Validate length
  if (password.value.length >= 8) {
    pwlength.classList.remove('wrongpw');
    pwlength.classList.add('validpassw');
    passSignalChara.style.color = 'hsl(154, 59%, 51%)';
  } else {
    pwlength.classList.remove('validpassw');
    pwlength.classList.add('wrongpw');
    passSignalChara.style.color = 'hsl(0, 100%, 74%)';
  }
};
9;

togglePwButton.onclick = function() {
  passwordToggle();
};

function passwordToggle() {
  var x = document.getElementById('pw');
  if (x.type === 'password') {
    x.type = 'text';
  } else {
    x.type = 'password';
  }
}
