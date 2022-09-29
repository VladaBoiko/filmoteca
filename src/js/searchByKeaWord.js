import { refs } from './refs';
import { dataSearch, dataGenre } from './API/api';
import Notiflix from 'notiflix';
// import { renderFilmCards } from './render';
const page = 1;
const language = 'en-US';
refs.searchForm.addEventListener('submit', onSearch);
const galleryBySearch = document.querySelector('#gallery-list');
async function getAllGenres(language) {
  return await dataGenre(language);
}

async function onSearch(evt) {
  evt.preventDefault();
  console.log(refs.searchForm);
  const searchQuery = evt.currentTarget.query.value.trim();
  console.log(searchQuery);
  const data = await dataSearch(searchQuery);
  console.log(data);
  renderFilmCards(data);
  // renderBySearch(data);
  if (!searchQuery) {
    Notiflix.Notify.failure(`Oops, the search is empty`);
    return;
  }
  // galleryBySearch.innerHTML = '';
}

async function renderFilmCards(data) {
  const genresData = (await getAllGenres(language)).genres;
  const filmList = data.results.map(
    ({ id, title, vote_average, genre_ids, release_date, poster_path }) => {
      const allGenres = [];
      genresData
        .map(genre => {
          if (genre_ids.includes(genre.id)) {
            allGenres.push(genre.name);
          }
        })
        .join(', ');
      //   const genresList = genre_ids
      // .map(idNum => {
      //   //   for (const obj of genresData) {
      //   //     if (idNum === obj.id) {
      //   //       return (id = obj.name);
      //   //     }
      //   //   }
      //   for (const obj of genresData) {
      //     if (idNum === obj.id) {
      //       return (id = obj.name);
      //     }
      //   }
      // })
      // .join(', ');
      return `<li data-movie-id="${id}" class="card__item">
    <a class="card__link" href = "">
        <img class="card__img"
        src="https://image.tmdb.org/t/p/original/${poster_path}"
        alt=""
    />

    <h2 class="card__title">${title}</h2>
    <div class="card__text">
        <p class="card__info">${allGenres} | ${release_date
        .split('', 4)
        .join('')}</p>
        <div class="card__rating">${vote_average
          .toString()
          .split('', 3)
          .join('')}</div>
    </div>
    </a>

</li>`;
    }
  );
  // galleryListEl.insertAdjacentHTML('beforeend', filmList.join(''));
  galleryBySearch.innerHTML = filmList.join('');
}

// function renderBySearch(data) {
//   const filmsBySearchMarkUp = data.results
//     .map(
//       ({ id, title, vote_average, genre_ids, release_date, poster_path }) => {
//         return `<li data-movie-id="${id}" class="card__item">
//     <a class="card__link" href = "">
//         <img class="card__img"
//         src="https://image.tmdb.org/t/p/original/${poster_path}"
//         alt=""
//     />

//     <h2 class="card__title">${title}</h2>
//     <div class="card__text">
//         <p class="card__info">${genre_ids} | ${release_date
//           .split('', 4)
//           .join('')}</p>
//         <div class="card__rating">${vote_average
//           .toString()
//           .split('', 3)
//           .join('')}</div>
//     </div>
//     </a>

// </li>`;
//       }
//     )
//     .join('');
//   galleryBySearch.insertAdjacentHTML('beforeend', filmsBySearchMarkUp.join(''));
// }
