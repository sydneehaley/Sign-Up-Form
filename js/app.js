
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
