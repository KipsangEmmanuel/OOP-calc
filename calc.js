'use strict';

//
// ──────────── SELECTORS ────────────────────────────────────────────────────────
//
const body = document.body;
const toggleTheme = document.querySelector('.toggle-theme__button');
const btnEls = document.querySelectorAll('button');
const btnNumber = document.querySelectorAll('.buttons__number');
const btnOperator = document.querySelectorAll(
  '.buttons__operator[data-operator]'
);
const btnEqual = document.querySelector('.buttons__operator[data-equal]');
const btnDelete = document.querySelector('.buttons__delete');
const btnReset = document.querySelector('.buttons__reset');

const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);

const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);

//
// ──────────── THEME AND GENERAL BUTTON FUNCTIONALITY ────────────────────────────────────────────────────────
//
let toggle;

btnEls.forEach(btn =>
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    btn.classList.add('pressed');
    btn.addEventListener('transitionend', () =>
      btn.classList.remove('pressed')
    );
  })
);

toggleTheme.addEventListener('click', function (e) {
  [...this.children].forEach(child => child.classList.remove('active'));
  e.target.classList.add('active');
  toggle = e.target.dataset.toggle;
  // console.log(toggle);
  body.className = '';
  body.classList.add(`theme-${toggle}`);
});

//
// ──────────── CALCULATOR FUNCTION ────────────────────────────────────────────────────────
//

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
    // console.log(this.currentOperand);
    // console.log(typeof this.currentOperand);
  }

  delete() {
    // console.log(this.currentOperand);
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  chooseOperation(operation) {
    // console.log(this.currentOperand);
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }
  compute() {
    // console.log(`computing`);
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
    // console.log(computation);
  }
  updateDisplay() {
    this.currentOperandTextElement.textContent = this.currentOperand;
  }
  clear() {
    this.previousOperand = '';
    this.currentOperand = '';
    this.operation = undefined;
  }
}

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

btnDelete.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});
btnEqual.addEventListener('click', () => {
  // console.log('clicked');
  calculator.compute();
  calculator.updateDisplay();
});
btnNumber.forEach(btn =>
  btn.addEventListener('click', () => {
    calculator.appendNumber(btn.innerText);
    calculator.updateDisplay();
  })
);
btnReset.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});
btnOperator.forEach(btn =>
  btn.addEventListener('click', e => {
    calculator.chooseOperation(btn.innerText);
    calculator.updateDisplay();
  })
);

window.addEventListener('keypress', function (e) {
  if (e.code.includes('Digit')) calculator.appendNumber(e.key);
  calculator.updateDisplay();
});