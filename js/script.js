'use strict';

const numberOfFilms = +prompt('Skolko filmov posmotreli ? :', 0);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if (personalMovieDB.count < 10) {
  alert('Prosmotreno malo filmov');
} else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
  alert('Vi classic zritel');
} else if (personalMovieDB.count > 30) {
  alert('Vi kinoman');
} else {
  alert('Proizoshla oshibka');
}

let i = 0;
do {
  let filmName = '',
      filmMark = '';

  while (filmName === '' || filmName === null || filmName.length > 50) {
    filmName = prompt('Odin iz poslednih vashih filmov ? :', '');
  }
  while (filmMark === '' || filmMark === null) {
    filmMark = prompt('Vo skolko otsenite film ? :', '');
  }
     
  personalMovieDB.movies[filmName] = filmMark;

  i++;
} while (i < 2);

console.log(personalMovieDB);
