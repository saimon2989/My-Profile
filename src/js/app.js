import '../css/styles.css';

const formFirstName = document.querySelector('#form__input-name');
const formLastName = document.querySelector('#form__input-lastname');
const formEmail = document.querySelector('#form__input-email');
const formText = document.querySelector('#form__input-text');
const formButton = document.querySelector('#form__button');



// Add event to button

formButton.addEventListener('click', getFormInfo);

// Function that get form info and save it in json file

function getFormInfo() {
    console.log(formFirstName.value);
    console.log(formLastName.value);
    console.log(formEmail.value);
    console.log(formText.value);
    
}

