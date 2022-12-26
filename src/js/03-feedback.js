import throttle from "lodash.throttle";

const formInput = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name=email]');
const messageInput = document.querySelector('textarea');
console.log(messageInput)
console.dir(formInput);




formInput.addEventListener('submit', onFormSubmit);
formInput.addEventListener('input', throttle(onInputInformation,500));


const fieldInput = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

savedLocalStorage();


function onInputInformation(event) {
    
   fieldInput[event.target.name] = event.target.value;
   localStorage.setItem('feedback-form-state', JSON.stringify(fieldInput));

};



function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(fieldInput);
    localStorage.removeItem('feedback-form-state');

}


function savedLocalStorage() {
        
    if (fieldInput) {
        if (fieldInput.email) {
            emailInput.value = fieldInput.email; 
        }
         if (fieldInput.message) {
            messageInput.value = fieldInput.message; 
        }
    }
};



