/*console.log*/

const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

/*alert*/

const alertFunction = document.querySelector('#alert');

alertFunction.addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
})


/*promt*/

const promptFunction = document.querySelector('#prompt');

promptFunction.addEventListener('click', () => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})