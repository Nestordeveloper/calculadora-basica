let currentExpression = '';

function press(value) {
    currentExpression += value;
    updateDisplay();
}

function setOP(operator) {
    currentExpression += ' ' + operator + ' ';
    updateDisplay();
}

function clr() {
    currentExpression = '';
    updateDisplay();
}

function calculate() {
    const tokens = currentExpression.split(' ');

    if (tokens.length < 3) {
        // No hay suficientes elementos para una operación válida
        document.getElementById('display').textContent = 'Error';
        currentExpression = '';
        return;
    }

    let result = parseFloat(tokens[0]);
    let operator = '';

    for (let i = 1; i < tokens.length; i++) {
        if (i % 2 === 1) {
            operator = tokens[i];
        } else {
            const operand = parseFloat(tokens[i]);

            if (isNaN(operand)) {
                document.getElementById('display').textContent = 'Error';
                currentExpression = '';
                return;
            }

            switch (operator) {
                case '+':
                    result += operand;
                    break;
                case '-':
                    result -= operand;
                    break;
                case '*':
                    result *= operand;
                    break;
                case '/':
                    if (operand === 0) {
                        document.getElementById('display').textContent = 'Error';
                        currentExpression = '';
                        return;
                    }
                    result /= operand;
                    break;
                default:
                    document.getElementById('display').textContent = 'Error';
                    currentExpression = '';
                    return;
            }
        }
    }

    document.getElementById('display').textContent = result;
    currentExpression = String(result);
}

function updateDisplay() {
    document.getElementById('display').textContent = currentExpression;
}
