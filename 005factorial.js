const factorial = (number) => {
  if (number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

console.log(factorial(5));

const multiplica = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {
    return 0;
  } else if (num2 === 1) {
    return num1;
  } else {
    return num1 + multiplica(num1, num2 - 1);
  }
};

console.log(multiplica(2, 3))