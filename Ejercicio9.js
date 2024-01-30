const numbers = [1, 2, 3, 5, 45, 37, 58];

let sum = 0;

function sumAll(numbers) {
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
let result = sumAll(numbers);
console.log(result);
