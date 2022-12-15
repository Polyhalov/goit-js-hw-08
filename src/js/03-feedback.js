import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');


form.addEventListener('input', throttle(textForm,500));
function textForm(event) {
    const formInfo = { email: input.value, message: textarea.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));
}
const local = JSON.parse(localStorage.getItem('feedback-form-state'));
if (local) {
    input.value = local.email;
    textarea.value = local.message;
}
form.addEventListener('submit', onSubmitClick)
function onSubmitClick(event) {
    event.preventDefault();
    console.log({ email: input.value, message: textarea.value })
    form.reset();
    localStorage.removeItem('feedback-form-state')
    
}
