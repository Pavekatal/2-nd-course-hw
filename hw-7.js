// Task 01 

const text = 'js'; 
console.log(text.toUpperCase()); 

// Task 02 

const yummyArr = ['Торт Шоколадный', 'Чизкейк клубничный', 'Яблочный пай', 'Мусс малиновый', 'Клубничный тарт', 'Шоколадный пуддинг', 'Штрудель яблочный ', 'Малиновый тарт', 'Шоколадный мусс'];
const search = 'шоколад'; 

console.log(yummyArr);

function outputSecondLine (yummyArr, search) {
    const searchYummyArr = []; 

    const filterYummy = yummyArr.filter(yummy => yummy.toLowerCase().startsWith(search.toLowerCase()));
    searchYummyArr.push(filterYummy);

    // yummyArr.forEach((yummy) => {

    //     if (yummy.toLowerCase().startsWith(search.toLowerCase())) {
    //         searchYummyArr.push(yummy); 
    //     }
    // });  
    
    console.log(searchYummyArr);
}

outputSecondLine (yummyArr, search);

// Task 03

let number = 32.58884; 

console.log(Math.floor(number)); 
console.log(Math.ceil(number)); 
console.log(Math.round(number)); 

//  Task 04 

const numbers = [52, 53, 49, 77, 21, 32];

let minNum = Math.min(...numbers);
let maxNum = Math.max(...numbers);

console.log(minNum, maxNum);

// Task 05

let randomNum; 

function randomNumFunc(randomNum) {
    console.log(Math.floor(Math.random() * 10) + 1);
}

randomNumFunc(randomNum);

// Task 06

let intNum = 18; 

function randomNumbFunc(intNum) {
    const randomNumbArr = []; 
    const randomNumbArrLength = intNum / 2;    

    for (let i = 0; i < randomNumbArrLength; i++) {
        let randomNumb = Math.floor(Math.random() * intNum); 
        randomNumbArr.push(randomNumb);
    }

    return randomNumbArr;
}

console.log(randomNumbFunc(intNum));

// Task 07

const minRangeNum = 5; 
const maxRangeNum = 25; 

function numFromRangeFunc(minRangeNum, maxRangeNum) {
    let numFromRange = Math.ceil(Math.random() * (maxRangeNum - minRangeNum) + minRangeNum); 
    return numFromRange; 
}

console.log(numFromRangeFunc(minRangeNum, maxRangeNum));

// Task 08

let currentMyDate = console.log(new Date());

// Task 09

let currentDate = new Date(); 
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Task 10

let baseDate = new Date(); 

function formattedDateFunc(baseDate) {
    const options = {day: 'numeric', month: 'long', year: 'numeric', weekday: 'long'}; 
    const optionsTime = {hour: '2-digit', minute: '2-digit', second: '2-digit'};
    const {weekday, ...optionsDate} = options;
    const formattedDate = baseDate.toLocaleDateString('ru-Ru', optionsDate);
    const formattedDay = baseDate.toLocaleDateString('ru-Ru', {weekday});
    const formattedTime = baseDate.toLocaleTimeString('ru-Ru', optionsTime); 

    return `Дата: ${formattedDate} - это ${formattedDay}. Время: ${formattedTime}`;
}

console.log(formattedDateFunc(baseDate)); 