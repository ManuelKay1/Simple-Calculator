function calculate() {
    
    const firstnumber = parseFloat(document.getElementById('first-number').value);
    const secondnumber = parseFloat(document.getElementById('second-number').value);
    const operator = document.getElementById('operator').value;
    let result;

    
    if (isNaN(firstnumber) || isNaN(secondnumber)) {
        result = 'Please enter valid numbers';
    } else {
        
        switch (operator) {
            case '+':
                result = firstnumber + secondnumber;
                break;
            case '-':
                result = firstnumber - secondnumber;
                break;
            case '*':
                result = firstnumber * secondnumber;
                break;
            case '/':
                
                result = secondnumber !== 0 ? firstnumber / secondnumber : 'Cannot divide by zero';
                break;
            default:
                result = 'Invalid operator';
        }
    }

    
    document.getElementById('result-display').innerText = result;
}
