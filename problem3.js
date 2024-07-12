const square = (num) => num * num;

const double = (num) => num * 2;

const addFive = (num) => num + 5;

const composeFunctions = (num) => {
  const squared = square(num);
  const doubled = double(squared);
  const result = addFive(doubled);
  return result;
};

const inputNumber = 3;
const outputNumber = composeFunctions(inputNumber);
console.log(outputNumber);
