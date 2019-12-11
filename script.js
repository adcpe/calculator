// VARIABLES
let ex                  = '';
const upperDisp         = document.querySelector('.upperDisp');
const lowerDisp         = document.querySelector('.lowerDisp');
const numButtons        = document.querySelectorAll('#num');
const opButtons         = document.querySelectorAll('#op');
const clearButton       = document.querySelector('#clear');
const backspaceButton   = document.querySelector('#backspace');
const eqButton          = document.querySelector('#eq');
const buttons           = document.querySelectorAll('.button');
const calculator        = document.querySelector('#calculator');


// MATH FUNCTIONS
const add = (x, y) => x + y;
const substract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

function operate (operator, x, y) {
  switch (operator) {
    case '+': return add (x, y);
    case '−': return substract (x, y);
    case '×': return multiply (x, y);
    case '÷': return divide (x, y);
  }
}

// OPERATIONS
// const dataKeys = [8, 13, 27, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 106, 107,
//   109, 111, 190];

const opSym = /([+−×÷])/gi;
const eqSym =/([=])/gi;

calculator.addEventListener('click', function () {
  if (opSym.test(lowerDisp.textContent)) {
    ex += lowerDisp.textContent;
    upperDisp.innerText = lowerDisp.textContent;
    lowerDisp.innerText = '0';
  }
  if (eqSym.test(lowerDisp.textContent)) {
    ex += lowerDisp.innerText.slice(0, -1);
    upperDisp.innerText += lowerDisp.textContent;
    lowerDisp.innerText = operate(ex.split(opSym)[1], Number(ex.split(opSym)[0]), Number(ex.split(opSym)[2]));
    ex = lowerDisp.textContent;
  }
  if (upperDisp.textContent.slice(-1) === '=') {
    upperDisp.innerText = lowerDisp.textContent;
    lowerDisp.innerText = '0';
  }
});


// BUTTONS FUNCTIONS
const buttonsArray = Array.from(numButtons).concat(Array.from(opButtons), [eqButton]);

buttonsArray.forEach(e => {
    e.addEventListener('click', () => {
      lowerDisp.innerText === '0' ?
        lowerDisp.textContent = `${e.innerText}` :
        lowerDisp.textContent += `${e.innerText}`;
    })
});

clearButton.addEventListener('click', () => {
  upperDisp.textContent = '0';
  lowerDisp.textContent = '0';
  ex = '';
});

backspaceButton.addEventListener('click', () => {
  lowerDisp.innerText.length === 1 ?
    lowerDisp.textContent = '0' :
    lowerDisp.textContent = lowerDisp.innerText.slice(0, -1);
});
