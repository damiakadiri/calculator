let displayValue = "";
let operator = "";
let firstOperand = "";

const display = document.querySelector(".display input");

const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function handleClick(event) {
  const buttonValue = event.target.value;

  switch (buttonValue) {
    case "AC":
      clearDisplay();
      break;
    case "DE":
      deleteLastDigit();
      break;
    case "=":
      calculateResult();
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      handleOperator(buttonValue);
      break;
    default:
      appendDigit(buttonValue);
  }
}

function appendDigit(digit) {
  displayValue += digit;
  updateDisplay();
}

function handleOperator(newOperator) {
  if (operator !== "") {
    calculateResult();
  }
  firstOperand = displayValue;
  operator = newOperator;
  displayValue = "";
}

function calculateResult() {
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(displayValue);
  let result = 0;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Error";
      }
      break;
  }

  clearDisplay();
  displayValue = result.toString();
  updateDisplay();
}

function clearDisplay() {
  displayValue = "";
  operator = "";
  firstOperand = "";
  updateDisplay();
}

function deleteLastDigit() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  display.value = displayValue;
}
