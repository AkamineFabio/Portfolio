const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});


username.addEventListener('blur', e =>{
    usernameValidation();
});

email.addEventListener('blur', e =>{
    emailValidation();
});

password.addEventListener('blur', e =>{
    passwordValidation();
});

password2.addEventListener('blur', e =>{
    password2Validation();
});

const setError = (element , message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('input-error');
    inputControl.classList.add('input-success');
    console.log(inputControl);
}

const setSuccess = (element)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('input-success');
    inputControl.classList.remove('input-error');
}

const usernameValidation = ()=>{
    const usernameValue = username.value.trim();

    if(usernameValue === ''){
        setError(username,'*Username is required');
    } 
    else{
        setSuccess(username);
    }
}

const emailValidation = ()=>{
    const emailValue = email.value.trim();

    if(emailValue === ''){
        setError(email,'*Email is required');
    } else if(!isValidEmail(emailValue)){
        setError(email,'*Provide a valid email address');
    }
    else{
        setSuccess(email);
    }
}

const isValidEmail = (email)=>{
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase()); //verify in the email that you passed on the parameter if it has some of this symbols 
}


const passwordValidation = ()=>{
    const passwordValue = password.value.trim();

    if(passwordValue === ''){
        setError(password,'*Password is required');
    } else if(passwordValue.length < 8){
        setError(password , '*Password must be at least 8 character.')
    }
    else{
        setSuccess(password);
    }
}

const password2Validation = ()=>{
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(password2Value === ''){
        setError(password2,'*Password is required');
    } else if(password2Value.length < 8){
        setError(password2 , '*Password2 must be at least 8 character.')
    } else if(password2Value !== passwordValue){
        setError(password2 , "*Password doesn't match");
    }
    else{
        setSuccess(password2);
    }
}

const validateInputs = ()=>{

    usernameValidation();
    emailValidation();
    passwordValidation();
    password2Validation();

}