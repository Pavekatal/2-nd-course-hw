// Task 01

function checkMinNumber(a, b) {
    if (a <= b) {
        return a; 
    } else {
        return b; 
    }
}

let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число')); 

let minNumber = checkMinNumber(a, b)

console.log(`Число ${minNumber} минимальное`);

// Task 02 

function checkEvenOdd(userNumber) {
    return (userNumber % 2 === 0) ? 'Число четное' : 'Число нечетное';
}

let userNumber = Number(prompt('Введите число')); 

console.log(checkEvenOdd(userNumber));

// Task 03

let square1 = (n) => console.log(n*n); 

square1(9);

let square2 = (m) => {
    return m * m; 
}

console.log(square2(8));

// Task 04

function checkAge(age) {

    if (age > 0 && age <= 12) {
        console.log('Привет, друг!');
    } else if (age >= 13) {
        console.log('Добро пожаловать!');
    } else if (age <= 0) {
        console.log('Вы ввели неправильное значение');
    } else {
        console.log('Введенное значение не является числом');
    }     
}

let age = Number(prompt('Сколько Вам лет?')); 

checkAge(age); 

// Task 05

let checkNumber = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) { 
       return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}

let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));

console.log(checkNumber(num1, num2));

// Task 06

function cubeNumbers (useringNumber) {
    if (isNaN(useringNumber)) {
        return 'Переданный параметр не является числом'; 
    } else {
        let cubeNumber = useringNumber ** 3; 
        return `${useringNumber} в кубе равняется ${cubeNumber}`;
    }
}

let useringNumber = Number(prompt('Введите число-параметр')); 

console.log(cubeNumbers(useringNumber));

// Task 07 

function getArea() {
    let area = Math.PI * this.radius ** 2;

    return area; 
}

function getPerimeter() {
    let perimeter = 2 * Math.PI * this.radius; 
    
    return perimeter; 
} 

const circle1 = {
    radius: 5, 
    getArea: getArea,
    getPerimeter: getPerimeter 
}

const circle2 = {
    radius: 3,
    getArea: getArea,
    getPerimeter: getPerimeter 
}

console.log(`Площадь первой окружности равна ${circle1.getArea()}`);
console.log(`Площадь второй окружности равна ${circle2.getArea()}`);
console.log(`Периметр первой окружности равен ${circle1.getPerimeter()}`);
console.log(`Периметр второй окружности равен ${circle2.getPerimeter()}`);
