function calculate(operation) {
    let result;
    let a = parseFloat(document.getElementById(operation + '-a').value);
    let calculationElement = document.getElementById(operation + '-calculation');

    switch(operation) {
        case 'addition':
            let b1 = parseFloat(document.getElementById('addition-b').value);
            result = a + b1;
            calculationElement.innerText = 'Postup: ' + a + ' + ' + b1 + ' = ' + result;
            break;
        case 'subtraction':
            let b2 = parseFloat(document.getElementById('subtraction-b').value);
            result = a - b2;
            calculationElement.innerText = 'Postup: ' + a + ' - ' + b2 + ' = ' + result;
            break;
        case 'multiplication':
            let b3 = parseFloat(document.getElementById('multiplication-b').value);
            result = a * b3;
            calculationElement.innerText = 'Postup: ' + a + ' * ' + b3 + ' = ' + result;
            break;
        case 'division':
            let b4 = parseFloat(document.getElementById('division-b').value);
            if (b4 === 0) {
                calculationElement.innerText = 'Nelze dělit nulou';
                result = 'Nedefinováno';
            } else {
                result = a / b4;
                calculationElement.innerText = 'Postup: ' + a + ' / ' + b4 + ' = ' + result;
            }
            break;
        case 'power':
            let b5 = parseFloat(document.getElementById('power-b').value);
            result = Math.pow(a, b5);
            calculationElement.innerText = 'Postup: ' + a + ' ^ ' + b5 + ' = ' + result;
            break;
        case 'squareRoot':
            result = Math.sqrt(a);
            calculationElement.innerText = 'Postup: √' + a + ' = ' + result;
            break;
        case 'root':
            let n = parseFloat(document.getElementById('root-n').value);
            result = Math.pow(a, 1/n);
            calculationElement.innerText = 'Postup: ' + a + '^(1/' + n + ') = ' + result;
            break;
        case 'percentage':
            let b6 = parseFloat(document.getElementById('percentage-b').value);
            result = (a * b6) / 100;
            calculationElement.innerText = 'Postup: (' + a + ' * ' + b6 + ') / 100 = ' + result;
            break;
        default:
            break;
    }

    document.getElementById(operation + '-result').innerText = result;
    calculationElement.style.display = 'block';
}

function showOperation(operation) {
    var element = document.getElementById(operation);
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}
