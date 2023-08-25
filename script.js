let paragraph = document.getElementById('para');
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
let colorButton = document.getElementById('btn-color');
let background = document.querySelector('body');

let number = 0;
paragraph.textContent = number;
// background = colors;

// let colors = 'orange';

decrease.addEventListener('click', () => {
  paragraph.textContent = --number;
});

increase.addEventListener('click', () => {
  paragraph.textContent = ++number;
});
reset.addEventListener('click', () => {
  paragraph.textContent = 0;
});
colorButton.addEventListener('click', () => {
  background.style.backgroundColor = 'orange';
});
