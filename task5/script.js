const textField = document.querySelector('#textField');
const submitButton = document.querySelector('#submitButton');
const duplicateField = document.querySelector('#duplicateField');


textField.addEventListener('input', (event) => {
    duplicateField.textContent = event.target.value;
})

submitButton.addEventListener('click', (event) => {
    console.log(textField.value);
    event.preventDefault();
    textField.value = '';
    duplicateField.textContent = textField.value;
})