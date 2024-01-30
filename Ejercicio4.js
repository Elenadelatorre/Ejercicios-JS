//EJERCICIO 1.1
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER'];
console.log(avengers[0]);

//EJERCICIO 1.2
console.log(avengers.splice(0, 1, 'IRONMAN'));
console.log(avengers);

//EJERCICIO 1.3
console.log(avengers.length);

//EJERCICIO 1.4
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry'];
rickAndMortyCharacters.push('Morty', 'Summer');
console.log(rickAndMortyCharacters[4]);

//EJERCICIO 1.5
const rickAndMortyCharacters1 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
];
rickAndMortyCharacters1.pop();
console.log(rickAndMortyCharacters1[0]);
console.log(rickAndMortyCharacters1[4]);

//EJERCICIO 1.6
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
];
rickAndMortyCharacters2.splice(1, 1);
console.log(rickAndMortyCharacters2);
