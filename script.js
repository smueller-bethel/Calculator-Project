const display = document.querySelector("#display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

let operator = "";
let firstNumber = "";
let secondNumber = "";
let shouldResetDisplay = false;

console.log("display:", display);
console.log("digits:", digits);

digits.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (shouldResetDisplay) {
      display.textContent = "";

      if (operator === "") {
        firstNumber = "";
      }

      shouldResetDisplay = false;
    }

    if (operator === "") {
      firstNumber += value;
      display.textContent = firstNumber;
    } else {
      secondNumber += value;
      display.textContent = secondNumber;
    }
  });
});

operators.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (firstNumber !== "" && secondNumber !== "" && operator !== "") {
      let result = operate(operator, Number(firstNumber), Number(secondNumber));

      firstNumber = String(result);
      secondNumber = "";
      display.textContent = firstNumber;
      shouldResetDisplay = false;
      console.log("result:", result);
    }

    operator = value;
    console.log("operator:", operator);
  });
});


function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

equals.addEventListener("click", ()=> {
    if (firstNumber === "" || operator === "" || secondNumber === "") {
        return;
    }

    const result = operate(operator, Number(firstNumber), Number(secondNumber));
    display.textContent = result;
    firstNumber = String(result);
    operator = "";
    secondNumber = "";
    shouldResetDisplay = true;
    console.log("result:", result);
})

clear.addEventListener("click", () => {
    display.textContent = 0;
    operator = "";
    firstNumber = "";
    secondNumber = "";
    shouldResetDisplay = false;
});
