const numbers = [12, 21, 38, 5, 45, 37, 6];
let sum = 0;
function average(numbers) {
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
let result = average(numbers);
console.log(result);
