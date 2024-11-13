// Game 01 "Угадай число"

let randomNumber = Math.floor(Math.random() * 100) + 1; 
let userNumber;

let guessNumber = () => {

    while(true) {

        userNumber = prompt('Попробуйте угадать, какое число задумано? Введите число от 1 до 100.'); 

        if (userNumber === null) {
            alert('Вы нажали отмена. Игра закончена')
            break;
        }

        userNumber = Number(userNumber);

        if (isNaN(userNumber)) {
            alert('Введено не число! Попробуйте ввести число еще раз!');
        } else if (userNumber < randomNumber) {
            alert('Ваше число меньше загаданного. Попробуйте еще раз!')
        } else if (userNumber > randomNumber) {
            alert('Ваше число больше загаданного. Попробуйте еще раз!')
        } else if (userNumber === randomNumber) {
            alert('Ура! Поздравляем, Вы угадали число!');
            break;
        } 
    }        
}

window.onload = function() {

    document.getElementById('gameOne').addEventListener('click', function(event) {
        
        event.preventDefault();
        guessNumber();
    });
};