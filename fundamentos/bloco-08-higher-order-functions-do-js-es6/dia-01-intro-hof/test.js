const calculator = (number1, number2, operation) => operation(number1, number2);

const sum = (n1, n2) => console.log(n1 + n2);

const sub = (n1, n2) => console.log(n1 - n2);

calculator(2, 2, sum);
calculator(2, 2, sub);

//outra forma

const sum2 = (num1, num2) => num1 + num2;

const sub2 = (num1, num2) => num1 - num2;

const calculator2 = (op) => op(2, 2);

console.log(calculator2(sum2));