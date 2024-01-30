const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
];

function findLongestWord(avengers) {
  let shearchedWord = '';

  for (let i = 0; i < avengers.length; i++) {
    let word = avengers[i];
    if (word.length > shearchedWord.length) {
      shearchedWord = word;
    }
  }
  return shearchedWord;
}

let shearchedWord = findLongestWord(avengers);
console.log(shearchedWord);
