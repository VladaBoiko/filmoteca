import { dataMovieList } from './js/API/api';
import { dataGenre } from './js/API/api';

const galleryListEl = document.querySelector('#gallery-list');

async function getAllGenres(lang = 'en-US') {
  return await dataGenre((language = lang));
}

async function request() {
  const data = await dataMovieList((page = 1), (language = 'en-US'));
  renderFilmCards(data);
}

async function renderFilmCards(data) {
  console.log(data);
  const genresData = (await getAllGenres('en-US')).genres;
  const filmList = data.results.map(
    ({ title, vote_average, genre_ids, release_date, poster_path, id }) => {
      const genresList = genre_ids
        .map(idNum => {
          for (const obj of genresData) {
            if (idNum === obj.id) {
              return (id = obj.name);
            }
          }
        })
        .join(', ');
      return `<li data-movie-id="${id}" class="card__item">
    <a class="card__link" href = "">
        <img class="card__img"
        src="https://image.tmdb.org/t/p/original/${poster_path}"
        alt=""
    />
    </a>
    <h2 class="card__title">${title}</h2>
    <div class="card__text">
        <p class="card__info">${genresList} | ${release_date
        .split('', 4)
        .join('')}</p>
        <div class="card__rating">${vote_average.toString().split('', 1)}</div>
    </div>
</li>`;
    }
  );
  galleryListEl.insertAdjacentHTML('beforeend', filmList.join(''));
}
request();
