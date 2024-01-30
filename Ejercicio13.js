const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(nameFinder, elemento) {
  for (i = 0; i < nameFinder.length; i++) {
    let index = nameFinder.indexOf(elemento);
    if (index !== -1) {
      return [true, index];
    } else {
      return false;
    }
  }
}

console.log(finderName(nameFinder, 'Bruce'));
