// Task 01

let i = 0;

while (i < 2) {
    console.log('Привет!');
    i++;
}

// Task 02 

let a = 1;

while (a <= 5) {
    console.log(a);
    a++;
}

// Task 03

for (c = 7; c <= 22; c++) {
    console.log(c);
}

// Task 04 

const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}

// Task 05

let n = 1000; 
let num = 0; 

for (; n >= 50; num++) {
    n /= 2;
}

console.log(`Результат делений: ${n}`);
console.log(`Количество итераций: ${num}`);

// Task 06 

let firstFriday = 5; 

for (let day = firstFriday; day <= 31; day += 7) {
        console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

// Additional task 01

let k = 100; 
let iterations = 0; 

for (; k > 0; iterations++) {
    k -= 7; 
}

console.log(k);
console.log(iterations);

// Additional task 02

const months = {
    1: 'январь',
    2: 'февраль',
    3: 'март',
    4: 'апрель',
    5: 'май',
    6: 'июнь',
    7: 'июль',
    8: 'август',
    9: 'сентябрь',
    10: 'октябрь',
    11: 'ноябрь',
    12: 'декабрь'
};
for (let key in months) {
   console.log(`месяц ${months[key]} : порядковый номер ${key}`);
}

// Additional task 03

const book = {
    name: 'Летос', 
    author: 'Алексей Юрьевич Пехов',
    yearPublication: 2014,
    genre: 'фэнтези'
}

for (let key in book) {
    console.log(`${key} : ${book[key]}`);
}

// Additional task 04

let number; 
let minNumber;

let arrayNumbers = {
    numOne: 34,
    numTwo: 28,
    numThree: 125,
    numFour: 371,
    numFive: 0,
    numSix: -6,
    numSeven: 51,
    numEight: -210,
    numNine: 11,
    numTen: 42
}

minNumber = arrayNumbers.numOne;

for (let key in arrayNumbers) {
    number = arrayNumbers[key];
    if (number < minNumber) {
        minNumber = number;
    } else {
        continue;
    }
}

console.log(`Самое минимальное число в массиве: ${minNumber}`);
