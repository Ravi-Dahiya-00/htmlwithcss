const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentNumber = '';
      previousNumber = '';
      operator = '';
      display.value = '';
    } else if (value === '&lt;') {
      currentNumber = currentNumber.slice(0, -1);
      display.value = currentNumber;
    } else if (value === '=') {
      calculate();
    } else if (['+', '-', '*', '/'].includes(value)) {
      operator = value;
      previousNumber = currentNumber;
      currentNumber = '';
    } else {
      currentNumber += value;
      display.value = currentNumber;
    }
  });
});

function calculate() {
  const num1 = parseFloat(previousNumber);
  const num2 = parseFloat(currentNumber);
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }

  display.value = result.toString();
  currentNumber = result.toString();
  previousNumber = '';
  operator = '';
}