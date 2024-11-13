let currentInput = '';
let previousInput = '';
let operator = null;

const display = document.getElementById('display');

// Append number to the current input
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Append decimal point if not already present
function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

// Set the operation (e.g. +, -, *, /, %)
function chooseOperation(op) {
    if (currentInput === '') return; // Avoid setting operator when current input is empty
    if (previousInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

// Perform square of the current number
function performSquare() {
    if (currentInput !== '') {
        currentInput = Math.pow(parseFloat(currentInput), 2).toString();
        updateDisplay();
    }
}

// Clear the display
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

// Calculate the result based on the current and previous input
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

// Update the display with the current input
function updateDisplay() {
    display.innerText = currentInput;
}