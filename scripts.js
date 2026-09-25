const display = document.querySelector(".display");

let firstNumber = "";
let operator = "";
let secondNumber = "";

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const decimalButton = document.querySelector(".decimal");


// Number buttons
numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        if (operator === "") {

            if (display.textContent === "0") {
                display.textContent = button.textContent;
            } else {
                display.textContent += button.textContent;
            }

        } else {

            if (secondNumber === "0") {
                secondNumber = button.textContent;
            } else {
                secondNumber += button.textContent;
            }

            display.textContent = firstNumber + " " + operator + " " + secondNumber;
        }

    });
});


// Operator buttons
operatorButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        if (operator !== "" && secondNumber !== "") {

            firstNumber = operate(
                operator,
                firstNumber,
                secondNumber
            );

            secondNumber = "";

        } else {
            firstNumber = display.textContent;
        }

        operator = button.textContent;

        display.textContent = firstNumber + " " + operator;
    });
});


// Equal button
equalButton.addEventListener("click", function() {

    if (operator === "" || secondNumber === "") {
        return;
    }

    const result = operate(
        operator,
        firstNumber,
        secondNumber
    );

    display.textContent = result;

    firstNumber = result;
});


// Clear button
clearButton.addEventListener("click", function() {

    display.textContent = "0";

    firstNumber = "";
    operator = "";
    secondNumber = "";
});


// Decimal button
decimalButton.addEventListener("click", function() {

    if (operator === "") {

        if (!display.textContent.includes(".")) {
            display.textContent += ".";
        }

    } else {

        if (!secondNumber.includes(".")) {

            secondNumber += ".";

            if (secondNumber === ".") {
                secondNumber = "0.";
            }

            display.textContent =
                firstNumber + " " + operator + " " + secondNumber;
        }
    }
});


// Arithmetic functions
function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {

    if (Number(b) === 0) {
        return "Error";
    }

    return Number(a) / Number(b);
}


// Operate
function operate(operator, a, b) {

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