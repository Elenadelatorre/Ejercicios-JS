const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(counterWords) {
  let repeatWord = {};
  for (i = 0; i < counterWords.length; i++) {
    const word = counterWords[i];
    if (repeatWord[word]) {
      repeatWord[word]++;
    } else {
      repeatWord[word] = 1;
    }
  }
  return repeatWord;
}

console.log(repeatCounter(counterWords));
