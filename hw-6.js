// Task 01

const arrNum = [1, 5, 4, 10, 0, 3]; 

for (let num = 0; num < arrNum.length; num++) {
  
  if (arrNum[num] === 10)  {
    console.log(arrNum[num]);
    break; 
  }
    console.log(arrNum[num]);
};

// Task 02

const arrSearch = [1, 5, 4, 10, 0, 3]; 

for (let index = 0; index < arrSearch.length; index++) {
  
  if (arrSearch[index] === 4) {
    let el = arrSearch[index]; 
    arrSearch.indexOf(index); 
    console.log(` Индекс элемента ${el} в массиве "${arrSearch}" равен: ${index}`);
  }
}

// Task 03

let arrJoin = [1, 3, 5, 10, 20]; 

arrJoin = arrJoin.join(' '); 
console.log(arrJoin);

// Task 04

const multiArr = []; 
const rowMultiArr = 3; 
const colMultiArr = 3; 

for (let n = 0; n < rowMultiArr; n++) {
    const intoArr = []; 

    for (let m = 0; m < colMultiArr; m++) {
        intoArr.push(1); 
    }
    multiArr.push(intoArr);
}
console.log(multiArr);

// Task 05

const addArr = [1, 1, 1];

for (i = 0; i < 3; i++) {
  let addItem = addArr.push(2);
}
console.log(addArr); 

// Task 06

let originArr = [9, 8, 7, 'a', 6, 5]; 

// let sortItem = sortArr.sort(); 
// for (let sortItem of sortArr) {
   
//   if (sortItem === 'a') {
//     sortItem = sortArr.pop();
//     console.log(sortArr); 
//   }
// }

//  -----------или---------------------

for (sortArr of originArr) {
    sortArr = originArr.sort().filter(filterItem => filterItem !== 'a');
  }
console.log(sortArr); 

// Task 07

const guessArr = [9, 8, 7, 6, 5]; 
let userNum = Number(prompt('Угадайте, есть ли число в массиве?')); 
  
for (let itemNum of guessArr) { 
  let guessItem;
  
  if (guessItem = guessArr.includes(userNum)) {
       alert('Угадали!');
       break;
  } else {
       alert('Не угадали!');
       break; 
    }
};

// Task 08

let originText = 'abcdef'; 
console.log(originText.split('').reverse().join('')); 

// Task 09

let mulArr = [ [1, 2, 3], [4, 5, 6] ]; 
let concatArr = [].concat(...mulArr);
console.log(concatArr); 

// Task 10

const randomArr = []; 
let lengthArr = 5; 

for (let i = 0; i < lengthArr; i++) {
  let randomNum = Math.floor(Math.random() * 10) + 1; 
  randomArr.push(randomNum); 
}
console.log(randomArr);  

for (let j = 0; j < lengthArr - 1; j++) {
    let sum = randomArr[j] + randomArr[j + 1];
    
    console.log(`Сумма текущего элемента ${randomArr[j]} и следующего элемента ${randomArr[j + 1]} равна: ${sum}`); 
}

// Task 11

let userArr = prompt('Введите целые числа через запятую'); 
console.log(userArr);
 
function squareFunc(userArr) {
  
  let convertedArr = userArr.split(', ').map(usedNum => parseInt(usedNum.trim())).filter(usedNum => !isNaN(usedNum));  

  let squareArr = convertedArr.map(squareNum => squareNum ** 2); 
  console.log(squareArr);  
  return squareArr; 
}
squareFunc(userArr);

// Task 12

let userText = prompt('Введите несколько слов.');
console.log(userText); 

function lengthWord(userText) {
    let convertedText = userText.split(' '); 

// ====================================  

//   let lengthWordsArr = [];
  
//   for (userWord of convertedText) {
//     lengthWordsArr.push(userWord.length);  
//   }
//   console.log(lengthWordsArr);

// =====или============================  
  
    let lengthWordsArr = convertedText.map(userWord => userWord.length); 
    console.log(lengthWordsArr); 
}
lengthWord(userText);

// Task 13

let userNumbArr = prompt('Введите целые числа через запятую'); 
console.log(userNumbArr);
 
function negativeFunc(userNumbArr) {
  
  let interimArr = userNumbArr.split(', ').map(useridNum => parseInt(useridNum.trim())).filter(useridNum => !isNaN(useridNum));  

   let negativeArr = interimArr.filter(negativeNum => negativeNum < 0); 
   console.log(negativeArr); 
   return negativeArr;   
}
negativeFunc(userNumbArr);

// Task 14

const randArr = []; 
let evenLengthArr = 10; 

function evenFunc(randArr) {
  for (let counterNum = 0; counterNum < evenLengthArr; counterNum++) {
    let randNumber = Math.floor(Math.random() * 11); 
    randArr.push(randNumber); 
  }
  console.log(randArr); 
  
  const evenArr = randArr.filter(evenNumber => evenNumber % 2 === 0);
  console.log(evenArr); 
}
evenFunc(randArr); 

// Task 15

const ranArr = []; 
let meanLengthArr = 6; 

function meanFunc(ranArr) {
    for (let counNum = 0; counNum < meanLengthArr; counNum++) {
    let randMeanNum = Math.floor(Math.random() * 10) + 1; 
    ranArr.push(randMeanNum); 
  }
  console.log(ranArr); 
  
  let currMeaning = ranArr.reduce((meanNum, currNum) => meanNum + currNum); 
  let meanMeaning = currMeaning / meanLengthArr;
    console.log(meanMeaning); 
}
meanFunc(ranArr);