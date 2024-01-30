const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(duplicates) {
  const newArray = [];
  for (i = 0; i < duplicates.length; i++) {
    if (!newArray.includes(duplicates[i])) {
      newArray.push(duplicates[i]);
    }
  }
  return newArray;
}

let result = removeDuplicates(duplicates);
console.log(result);
