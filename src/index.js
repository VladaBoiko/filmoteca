import { dataMovieList } from './js/API/api';
import { dataGenre } from './js/API/api';
const galleryListEl = document.querySelector('#gallery-list');

dataMovieList().then(data => {
  console.log(data);
  const filmList = data.results.map(
    ({ title, vote_average, genre_ids, release_date, poster_path }) => {
      // genreDecoder(genre_ids);
      // async function genres() {
      //   const genre = await genreDecoder(genre_ids);
      //   return genre;
      // }
      // console.log(genres);
      return `<li class="card__item">
    <a class="card__link" href = "">
        <img class="card__img"
        src="https://image.tmdb.org/t/p/original/${poster_path}"
        alt=""
    />
    </a>
    <h2 class="card__title">${title}</h2>
    <div class="card__text">
        <p class="card__info">${genreDecoder(genre_ids)} | ${release_date
        .split('', 4)
        .join('')}</p>
        <div class="card__rating">${vote_average}</div>
    </div>
</li>`;
    }
  );
  galleryListEl.insertAdjacentHTML('beforeend', filmList.join(''));
});
// genreDecoder();
async function genreDecoder(genre_ids) {
  const allGenres = [];
  // const temp = await dataGenre((language = 'en-US'));
  // console.log(temp);
  // return temp;
  const genresData = await dataGenre((language = 'en-US')).then(data => {
    // console.log(data);
    const allDataGenres = data.genres;
    allDataGenres.map(genre => {
      if (genre_ids.includes(genre.id)) {
        allGenres.push(genre.name);
      }
    });
    console.log(allGenres.join(', '));
    return allGenres.join(', ');
  });
  // console.log(genresData);
  return genresData;
  // const arrayOfgenres = array.map(a => {
  //   switch (a) {
  //     case 28:
  //       return `Action`;
  //       break;
  //     case 12:
  //       return `Adventure`;
  //       break;
  //     case 16:
  //       return `Animation`;
  //       break;
  //     case 35:
  //       return `Comedy`;
  //       break;
  //     case 80:
  //       return `Crime`;
  //       break;
  //     case 99:
  //       return `Documentary`;
  //       break;
  //     case 18:
  //       return `Drama`;
  //       break;
  //     case 10751:
  //       return `Family`;
  //       break;
  //     case 14:
  //       return `Fantasy`;
  //       break;
  //     case 36:
  //       return `History`;
  //       break;
  //     case 27:
  //       return `Horror`;
  //       break;
  //     case 10402:
  //       return `Music`;
  //       break;
  //     case 9648:
  //       return `Mystery`;
  //       break;
  //     case 10749:
  //       return `Romance`;
  //       break;
  //     case 37:
  //       return `Western`;
  //       break;
  //     case 878:
  //       return `Science Fiction`;
  //       break;
  //     case 10770:
  //       return `TV Movie`;
  //       break;
  //     case 53:
  //       return `Thriller`;
  //       break;
  //     case 10752:
  //       return `War`;
  //       break;
  //   }
  // });
  // return arrayOfgenres.join(', ');
}
// dataMovieList().then(data => {
//   // console.log(data);
//   const filmList = data.results.map(
//     ({ title, vote_average, genre_ids, release_date, poster_path }) => {
//       // (x) => {
//       // genreDecoder(genre_ids);
//       const genres = genreDecoder(genre_ids).then(allGenres => {
//         return `<li class="card__item">
//     <a class="card__link" href = "">
//         <img class="card__img"
//         src="https://image.tmdb.org/t/p/original/${poster_path}"
//         alt=""
//     />
//     </a>
//     <h2 class="card__title">${title}</h2>
//     <div class="card__text">
//         <p class="card__info">${allGenres} | ${release_date
//           .split('', 4)
//           .join('')}</p>
//         <div class="card__rating">${vote_average}</div>
//     </div>
// </li>`;
//       });
//       return genres;
//     }
//   );
//   // console.log(genres);
//   console.log(filmList);
//   galleryListEl.insertAdjacentHTML('beforeend', filmList.join(''));
// });
