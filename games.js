// Game 01 "Угадай число"

let randomNumber = Math.floor(Math.random() * 100) + 1; 
let userNumber;

const guessNumber = () => {

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

document.getElementById('gameOne').addEventListener('click', function(event) {
        
    event.preventDefault();
    guessNumber();
});

// Game 02 "Простая арифметика"

const simpleTasks = () => {

    function getRandomArr() {
        const randomArr = []; 
        let lengthArr = 10; 
        
        for (let i = 0; i < lengthArr; i++) {
            let randomNum = Math.floor(Math.random() * 10) + 1; 
            randomArr.push(randomNum); 
        }
        return randomArr; 
    }
    
    function getRandomNum() {
        const randomNumArr = getRandomArr();
        const randomIndexArr = Math.floor(Math.random() * randomNumArr.length); 
        const randomNum = randomNumArr[randomIndexArr]; 
        return randomNum; 
    }
    
    function getRandomOperator() {
        const operatorArr = ['+', '-', '*', '/'];
        const randomOperatorArr = Math.floor(Math.random() * operatorArr.length); 
        const randomOperator = operatorArr[randomOperatorArr]; 
        return randomOperator; 
    }
    
    const firstOperand = getRandomNum();
    const secondOperand = getRandomNum(); 
    const operator = getRandomOperator();
    
    function operators(operator, firstOperand, secondOperand) {
        switch(operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '*':
                return firstOperand * secondOperand;
            case '/':
                return Number((firstOperand / secondOperand).toFixed(1));
        }
    }
    
    let answer = operators(operator, firstOperand, secondOperand); 
    let nextTask;
    
    
    while(true) {
        let answerUser = prompt( `Попробуй решить такой пример: ${firstOperand} ${operator} ${secondOperand}` ); 
    
        if (answerUser === null) {
            alert('Вы нажали отмена. Игра закончена')
            break;
        }
            
        answerUser = Number(answerUser); 
            
        if (answerUser === answer) {
            alert('Молодец! Пример решен верно!'); 
            nextTask = confirm('Хотите продолжить?');  

            if (nextTask === true) {
                simpleTasks();
            } break;            
        } 
        else { (answerUser !== answer) 
            alert('Увы, пример решен неверно. Попробуй еще раз!');
        }  

        
    }   
}

document.getElementById('gameTwo').addEventListener('click', function(event) {
        
    event.preventDefault();
    simpleTasks();
});

// Game 03 "Переверни текст"

const turnTextOver = () => {
    
    while(true) {
        let userText = prompt('Напиши любой текст, и мы его перевернем!'); 
     
        if (userText === null) {
            alert('Вы нажали отмена. Игра закончена');
            break;
        } 

        userText = userText.split('').reverse().join(''); 
        alert(`Мы перевернули твой текст: ${userText} !`);
        let nextTime = confirm('Хотите продолжить?'); 

        if (nextTime === true) {
            turnTextOver();
        } break;       
    }   
}

document.getElementById('gameThree').addEventListener('click', function(event) {
        
    event.preventDefault();
    turnTextOver();
});

// Game 04 "Викторина"

const simpleQuiz = () => {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let startQuiz = confirm('Давайте сыграем в игру "Викторина", где надо ответить на несколько вопросов. Начнем?');

    if (startQuiz == true) {
        quizGame(); 
    } else {
        alert('Вы нажали отмена. Игра закончена');
    }

    function quizGame() {
        let counterСorrectAnswers = 0; 

        for (let j = 0; j < quiz.length; j++) {
            let questionUser = +prompt(`${quiz[j]['question']} Выберите номер варианта ответов: ${quiz[j]['options']}`); 

            if (questionUser === null) {
                alert('Вы нажали отмена. Игра закончена');
                break;
            } 
              
            if (questionUser === quiz[j]['correctAnswer']) {
                alert('Правильно, молодец!');
                counterСorrectAnswers++; 
            } else {
                alert('Ответ неправильный');
            }
        }
        
        alert(`Отлично! Количество правильных ответов: ${counterСorrectAnswers} !`);
        
        let nextQuiz = confirm('Хотите сыграть еще раз?');

        if (nextQuiz == true) {
        quizGame(); 
        } else {
            alert('Вы нажали отмена. Игра закончена');
        } 
    }
}

document.getElementById('gameFive').addEventListener('click', function(event) {
        
    event.preventDefault();
    simpleQuiz();
});