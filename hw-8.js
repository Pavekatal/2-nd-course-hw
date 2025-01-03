// Task 01

const peopleArr = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

console.log(peopleArr.sort((a, b) => a.age - b.age));

// Task 02

function isPositive(item) {
        return item >= 0;
}
function isMale(item) {
        return item.gender === 'male';
}
function filter(arr, ruleFunction) {
    const result = []; 

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            result.push(arr[i]);
        }    
    }

    return result; 
}
    
console.log(filter([3, -4, 1, 9], isPositive));
    
const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(people, isMale));

// Task 03 

const today = () => {
    const currentDate = setInterval(() => {
        
        console.log(new Date());
    }, 3000); 

    setTimeout(() => {
        clearInterval(currentDate); 
        console.log('30 секунд прошло');
    }, 30000);
};

today(); 

// Task 04

function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000); 
   
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});

// Task 05

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));