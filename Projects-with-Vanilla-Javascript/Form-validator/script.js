const form = document.getElementById('form');
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const submit = document.getElementById('submit')

// functions for error and success input
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const errorMsg = formControl.querySelector('small')
  errorMsg.innerText = message
}
const showSuccess = (input) => {
  const formControl =  input.parentElement;
  formControl.className = 'form-control success'
}



// a function that checks email criteria.

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (re.test(input.value.trim())){
    showSuccess(input);
    console.log(input.value, 'Email is valid');
  } else {
    showError(input, 'Email not valid');
    console.log(input.value, 'Email is not valid');
  }
}

// get the input ID and use it to display error
function getInputId(str){
  return str.id.charAt(0).toUpperCase() + str.id.slice(1);   // <--- capitalize | uppercase first letter in a string
}

function checklength(input, min, max) {
  if (input.value.length < min || input.value.length > max ){
    showError(input, `${getInputId(input)} min is ${min} and max is ${max} characters.`)
  } else {
    showSuccess(input)
  }
}


// check if password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value){
    showError(input2, `${getInputId(input2)} does not match`)
  } else {
    showSuccess(input2)
  }
}


// function that checks requirement
const checkRequired = function(inputArray) {
  //const isRequired = false;     //  <---- if this value is returned as false, it immediately stops the execution.
  inputArray.forEach(input => {
    if(input.value.trim() === ''){
      showError(input,`${getInputId(input)} is required` )
      //isRequired = true;        //  <---- if this value is returned as true, it continues the execution.
    } else {
      showSuccess(input)
    }
  //return isRequired
  });
}


submit.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('clicked submit');

  checkRequired([username, email,  password, confirmPassword])
  checkEmail(email); 
  checklength(username, 6, 20)
  checklength(password, 8, 60)
  checkPasswordMatch(password, confirmPassword)

  
});


