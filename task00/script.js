let currentNumber = '';
let previousNumber = '';
let operation = null;

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber += number;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculateResult();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
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
        default:
            return;
    }
    currentNumber = result;
    operation = null;
    previousNumber = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentNumber || '0';
}
