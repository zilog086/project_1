'use strict';

let numberOfFilms = +prompt('Skolko filmov posmotreli ? :', 0);

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

personalMovieDB.count = numberOfFilms;

let film1 = prompt('Odin iz poslednih vashih filmov ? :', '');
let mark1 = prompt('Vo skolko otsenite film ? :', '');
let film2 = prompt('Odin iz poslednih vashih filmov ? :', '');
let mark2 = prompt('Vo skolko otsenite film ? :', '');

personalMovieDB.movies[film1] = mark1;
personalMovieDB.movies[film2] = mark2;


// for (let i = 0; i < 2; i++) {
//   personalMovieDB.movies['film' + i] = prompt('Odin iz poslednih vashih filmov ? :', '');
// }

console.log(personalMovieDB);
