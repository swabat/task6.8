const textForChange = document.querySelector('#textForChange');
let changedText;


textForChange.addEventListener('click', (event)=>{
changedText = prompt('Пожалуйста, введите текст');
textForChange.textContent = changedText;
event.preventDefault();
})


