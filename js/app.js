const form = document.getElementById('main__form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-address');
const password = document.getElementById('password');


form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    if (firstName.value === '') {
        makeError(firstName, 'This field cannot be empty');
    } else {
        makeSuccess(firstName)
    }

    
    if (lastName.value === '') {
        makeError(lastName, 'This field cannot be empty');
    } else {
        makeSuccess(lastName);
    }
    if (email.value === '') {
        makeError(email, 'Must provide an email');
    } else if(isEmail(email.value) === false) {
        makeError(email, 'Please enter your email address');
    } 
    else {
        makeSuccess(email);
    }
    if(password.value === '') {
        makeError(password, 'Must provide a password');
    } else {
        makeSuccess(password)
    }
})



function makeError(input, message) {
    const inputContainer = input.parentElement;
    const small = inputContainer.querySelector('small');
    inputContainer.className = 'input-field invalid';
    input.placeholder = '';
    small.innerText = message;
}
function makeSuccess(input) {
    const inputContainer = input.parentElement;
    inputContainer.className = 'input-field'; 
}

function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email); 
}
