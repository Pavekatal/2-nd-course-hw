// Task 01

const titleEl = document.querySelector('.title');
const buttonEl = document.querySelector('.button');

buttonEl.addEventListener('click', () => {
    const compStyle = window.getComputedStyle(titleEl);

    if (compStyle.display === 'none') {
        titleEl.style.display = 'block';
    } else {
        titleEl.style.display = 'none';
    }
});

// Task 02

const textEl = document.querySelector('.text');
const btnStyleEl = document.querySelector('.btn-style');

btnStyleEl.addEventListener('click', () => {
    // textEl.style.color = 'blue';
    textEl.classList.toggle('text-blue');
});

// Task 03

const headingEl = document.querySelector('.heading');
const btnHeadingEl = document.querySelector('.btn-heading');

btnHeadingEl.addEventListener('click', () => {
    headingEl.textContent = 'Привет, мир!';
});

// Task 04
const elementsAll = document.querySelectorAll('.description');

elementsAll.forEach(element => {
    element.textContent = 'Измененный текст';
});

// Task 05

const elements = document.querySelectorAll('.description-two');

elements.forEach(el => {
    el.textContent = 'Новый текст';
});

// Task 06

const btnAddEl = document.querySelector('.btn-add');

btnAddEl.addEventListener('click', () => {
    const 
    paragraphEl = document.createElement('p');
    paragraphEl.textContent = 'Новый абзац';
    document.body.appendChild(paragraphEl);
});

// Task 07

const btnRemoveEl = document.querySelector('.btn-remove');
const firstEl = document.querySelector('.description-three');

btnRemoveEl.addEventListener('click', () => {
    firstEl.remove();
});