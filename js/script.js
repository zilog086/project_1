'use strict';

// let numberOfFilms = '';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt('Skolko filmov posmotreli ? :', '');
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Skolko filmov posmotreli ? :', '');
    }
  },
  personalRating: () => {
    if (personalMovieDB.count < 10) {
      alert('Prosmotreno malo filmov');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
      alert('Vi classic zritel');
    } else if (personalMovieDB.count > 30) {
      alert('Vi kinoman');
    } else {
      alert('Proizoshla oshibka');
    } 
  },
  personalDBfill: () => {
    let i = 0;
    do {
        let filmName = '',
        filmMark = '';
  
      while (filmName == '' || filmName == null || filmName.length > 50) {
        filmName = prompt('Odin iz poslednih vashih filmov ? :', '');
      }
      while (filmMark == '' || filmMark == null) {
        filmMark = prompt('Vo skolko otsenite film ? :', '');
      }
      personalMovieDB.movies[filmName] = filmMark;
      i++;
    } while (i < 2);   
  },
  writeYourGenres: () => {
    for (let i = 0; i < 3; i++) {
      while (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) {
        personalMovieDB.genres[i] =  prompt(`Ваш любимый жанр под номером ${i + 1} :`, '');
      }
    }
    personalMovieDB.genres.forEach((val, index) => {
      console.log(`Любимый жанр ${index + 1} - это ${val}`);
    });
  },
  showDB: () => {
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: () => {
    personalMovieDB.privat = !personalMovieDB.privat;
  }
};

personalMovieDB.start();
personalMovieDB.personalRating();
personalMovieDB.personalDBfill();
personalMovieDB.writeYourGenres();
personalMovieDB.showDB();


// function personalRating() {
//   if (personalMovieDB.count < 10) {
//     alert('Prosmotreno malo filmov');
//   } else if (personalMovieDB.count >=10 && personalMovieDB.count <= 30) {
//     alert('Vi classic zritel');
//   } else if (personalMovieDB.count > 30) {
//     alert('Vi kinoman');
//   } else {
//     alert('Proizoshla oshibka');
//   }
// }

// personalRating();

// function personalDBfill() {
//   let i = 0;
//   do {
//       let filmName = '',
//       filmMark = '';

//     while (filmName === '' || filmName === null || filmName.length > 50) {
//       filmName = prompt('Odin iz poslednih vashih filmov ? :', '');
//     }
//     while (filmMark === '' || filmMark === null) {
//       filmMark = prompt('Vo skolko otsenite film ? :', '');
//     }
     
//   personalMovieDB.movies[filmName] = filmMark;

//   i++;
// } while (i < 2);  
// }

// personalDBfill()

// function writeYourGenres() {
//   for (let i = 0; i < 3; i++) {
//     // let genres = prompt(`Ваш любимый жанр под номером ${i + 1} :`, '');
//     personalMovieDB.genres[i] =  prompt(`Ваш любимый жанр под номером ${i + 1} :`, '');
//   }
// }
// writeYourGenres();

// function showDB(db) {
//   if (!db.privat) {
//     console.log(db);
//   }
// }

// showDB(personalMovieDB);



