// Task 01

let password = 'password';
let correctPassword = prompt('Введите пароль');

if (correctPassword === password) {
    console.log('Пароль введен верно')
} else {
    console.log('Пароль введен неправильно');
}

// Task 02

let c = Number(prompt('Введите число'));

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Task 03

let d = Number(prompt('Введите первое число'));
let e = Number(prompt('Введите второе число'));

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Task 04 

let a = '2';
let b = '3';

alert(+a + +b);

// Task 05

let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        console.log('зима'); 
        break;
    case '3':
    case '4':
    case '5':
        console.log('весна'); 
        break;
    case '6':
    case '7':
    case '8':
        console.log('лето'); 
        break;
    case '9':
    case '10':
    case '11':
        console.log('осень'); 
        break;
    default:
        console.log('Месяца с таким номером не существует');
}

// Additional task 01

let anyNumber = prompt('Пожалуйста, введите любое число');
let convertedNumber = Number(anyNumber);

if (isNaN(convertedNumber)) {
    console.log('Вы ввели не число.');
} else {
    if (convertedNumber % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}

// Additional task 02

let clientOS = Number(prompt('Введите 0, если используете iOS. Если используете Android, введите 1'));
let message;

if (clientOS === 0) {
    message = 'Установите версию приложения для iOS по ссылке';
} else if (clientOS === 1) {
    message = 'Установите версию приложения для Android по ссылке';
} else {
    message =  'ОС пользователя не определена';
    }

console.log(message);

// Additional task 03

let clientOS2 = Number(prompt('Введите 0, если используете iOS. Если используете Android, введите 1'));
let clientDeviceYear = Number(prompt('Укажите год выпуска Вашего устройства'));
let message2; 

if (clientOS === 0) {
    message2 = clientDeviceYear >= 2015 
    ? 'Установите версию приложения для iOS по ссылке' 
    : 'Установите облегченную версию приложения для iOS по ссылке';
} else if (clientOS === 1) {
    message2 = clientDeviceYear >= 2015
    ? 'Установите версию приложения для Android по ссылке'
    : 'Установите облегченную версию приложения для Android по ссылке';
} else {
    console.log('ОС пользователя не определена');
}

console.log(message2);