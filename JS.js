
let input = document.querySelector('#input');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');
let input4 = document.querySelector('.input4');
let button = document.querySelectorAll('.btn');
let button2 = document.querySelector('.btn2');
let button3 = document.querySelector('.btn3');
let button4 = document.querySelector('.btn4');
const span = document.querySelector('.span')

button[0].addEventListener('click' , () => {
   span.innerText = input.value
})

button[1].addEventListener('click' , () => {
   span.innerText = ''
})