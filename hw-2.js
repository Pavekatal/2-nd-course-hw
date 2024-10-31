// // Task 01

let a = 10;
alert (a);

a = 20;
alert (a);

// // Task 02

let firstPhone = 2007; 
alert (firstPhone); 

// // Task 03

let creatorJavaScript = "Brendan Eich";
alert (creatorJavaScript);

// // Task 04

let c = 10, d = 2;
alert (c + d);
alert (c - d);
alert (c * d);
alert (c / d);

// // Task 05

let e = 2;
let result = e ** 5;
alert (result);

// // Task 06

let f = 9, g = 2; 
let moduloResult = f % g
alert (moduloResult);

// // Task 07

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert (num);

// //  Task 08

let age = (prompt("Сколько вам лет?"));
alert (age);

// Task 09

const user = {
    name: 'Kate',
    age: 30,
    isAdmin: true
}

//  Task 10 

let userName = prompt("Как Вас зовут?");
alert(`Вас зовут ${userName} !`);

// Additional task

let hiddenNumber = prompt('Загадайте любое число');
let doubleNumber = hiddenNumber * 2; 
alert (doubleNumber);
let biggerNumber = doubleNumber + 10;
alert (biggerNumber);
let dividedNumber = biggerNumber / 2; 
alert (dividedNumber);
let originalNumber = dividedNumber - hiddenNumber;
alert (originalNumber);
alert (`Вы загадали ${originalNumber}`);