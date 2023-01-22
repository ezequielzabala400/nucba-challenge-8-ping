const form = document.querySelector('.Ping__Form');
const inputEmail = document.querySelector('#inputEmail');

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

const isEmpty = value => value === 0;

const isEmailValid = email => EMAIL_REGEX.test(email);


const checkEmail = email => {
    const emailValue = email.value.trim();
    if(isEmpty(emailValue.length)){
        showError(email, 'The email is obligatory')
        return
    }else if(!isEmailValid(emailValue)){
        showError(email, 'Please provide a valid email address')
        return
    }else{
        cleanError(email)
        form.reset();
    }
    return
}

const showError = (input, message) => {
    input.classList.add('borderError');
    const formField = input.parentElement;
    const errorContainer = formField.querySelector('.error');
    errorContainer.textContent = message;
}

const cleanError = input => {
    input.classList.remove('borderError');
    const formField = input.parentElement;
    const errorContainer = formField.querySelector('.error');
    errorContainer.textContent = '';
}

function init (){
    form.addEventListener('submit', (e => {
        e.preventDefault();
        checkEmail(inputEmail);

    }))
}

init()