// VARIABLES
const resultDisplay     = document.querySelector('.result');
const operationsDisplay = document.querySelector('.operations');
const numButtons        = document.querySelectorAll('#num');
const opButtons         = document.querySelectorAll('#op');
const clearButton       = document.querySelector('#clear');
const backspaceButton   = document.querySelector('#backspace');
const buttons           = document.querySelectorAll('.button');


// MATH FUNCTIONS
function add (x, y) {
  return x + y;
}

function substract (x, y) {
  return x - y;
}

function multiply (x, y) {
  return x * y;
}

function divide (x, y) {
  return x / y;
}

function operate (operator, x, y) {
  switch (operator) {
    case '+': return add(x, y);
    case '-': return substract(x, y);
    case '*': return multiply(x, y);
    case '/': return divide(x, y);
  }
}


// DISPLAY FUNCTIONS
const buttonsArray = Array.from(numButtons).concat(Array.from(opButtons));

buttonsArray.forEach(e => {
    e.addEventListener('click', () => {
      operationsDisplay.innerText === '0' ?
        operationsDisplay.textContent = `${e.innerText}` :
        operationsDisplay.textContent += `${e.innerText}`;
    })
});

clearButton.addEventListener('click', () => {
  operationsDisplay.textContent = '0';
  resultDisplay.textContent = '0';
});

backspaceButton.addEventListener('click', () => {
  const op = operationsDisplay.innerText;
  operationsDisplay.textContent = op.slice(0, -1);
});

resultDisplay.addEventListener('click', () => {
  resultDisplay.textContent = operationsDisplay.innerText;
});
