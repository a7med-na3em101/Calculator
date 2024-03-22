function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.textContent === '0' && value !== '.') {
        display.textContent = '';
    }
    display.textContent += value;
}

function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function calculate() {
    let display = document.getElementById('display');
    try {
        let result = eval(display.textContent);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid expression');
        }
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}
