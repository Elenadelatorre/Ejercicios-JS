const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
let sum = 0;
let count = 0;
function averageWord(mixedElements) {
  for (i = 0; i < mixedElements.length; i++) {
    if (typeof mixedElements[i] === 'number') {
      sum += mixedElements[i];
    } else if (typeof mixedElements[i] === 'string') {
      count += mixedElements[i].length;
    }
  }
  return (sum + count) / mixedElements.length;
}
let result = averageWord(mixedElements);
console.log(result);
