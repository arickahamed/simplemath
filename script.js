const firstInput = prompt('Enter first number.');
const secondInput = prompt('Enter second number.');

const firstNum = parseFloat(firstInput);
const secondNum = parseFloat(secondInput);

const addition = firstNum + secondNum;
document.write('a) ' + firstNum + ' + ' + secondNum + ' = ' + addition + '<br><br>');

const substruction = firstNum - secondNum;
document.write('b) ' + firstNum + ' - ' + secondNum + ' = ' + substruction + '<br><br>');

const multiply = firstNum * secondNum;
document.write('c) ' + firstNum + ' * ' + secondNum + ' = ' + multiply + '<br><br>');

const divide = firstNum / secondNum;
document.write('d) ' + firstNum + ' / ' + secondNum + ' = ' + divide + '<br><br>');

const remain = firstNum % secondNum;
document.write('e) ' + firstNum + ' % ' + secondNum + ' = ' + remain + '<br><br>');