let currentInput = '';
let operator = '';
let previousInput = '';

function inputNumber(number) {
    if (currentInput === ''){
        if (number === '3.14'){
            currentInput = number;
            updateDisplay('π')
        }
        else {
            currentInput = number;
            updateDisplay(currentInput);
        }
    }
    else if(currentInput === '3.14'){
        updateDisplay('π');
    }
    else{
        if (number === '3.14'){
            alert("π tidak bisa di input")
            updateDisplay(currentInput);
        }
        else{
            currentInput += number;
            updateDisplay(currentInput);
        }
    }
}

function inputOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('');
}

function calculate() {
    let result = 0;
    const previous = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(previous) || isNaN(current)) return;
    
    switch (operator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            if (current === 0) {
                alert("Tidak bisa membagi dengan 0!");
                clearDisplay();
                return;
            }
            result = previous / current;
            break;
        case '^':
            result = Math.pow(previous, current);
            break;
        case '%':
            result = previous % current;
            break;
        case 'log':
            result = Math.log(current) / Math.log(previous);
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}