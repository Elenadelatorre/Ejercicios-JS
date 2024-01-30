const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
];

let smallMovie = [];
let mediumMovie = [];
let bigMovie = [];

for (i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    smalllMovie.push(movies[i]);
  } else if (
    movies[i].durationInMinutes >= 100 &&
    movies[i].durationInMinutes < 200
  ) {
    mediumMovie.push(movies[i]);
  } else {
    bigMovie.push(movies[i]);
  }
}
console.log('Peliculas pequeñas:');
console.log(smallMovie);
console.log('Peliculas medianas:');
console.log(mediumMovie);
console.log('Peliculas grandes:');
console.log(bigMovie);
