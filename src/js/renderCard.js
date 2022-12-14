import { dataGenre } from './API/api';
import {
  dataGenre,
  IMG_URL_342,
  IMG_URL_500,
  IMG_URL_780,
  IMG_URL_ORIGINAL,
  emptyImge,
} from './API/api';
async function getAllGenres() {
  return await dataGenre();
}
export async function renderFilmCards(data, container) {
  const genresData = (await getAllGenres()).genres;

  const filmList = data
    .map(
      ({
        id,
        title,
        vote_average,
        genre_ids,
        release_date = 'un',
        poster_path,
      }) => {
        const allGenres = [];
        let srcSet500 = null;
        let srcSet342 = null;
        if (poster_path) {
          srcSet500 = `${IMG_URL_500}${poster_path} 1x, ${IMG_URL_ORIGINAL}${poster_path} 2x`;
          srcSet342 = `${IMG_URL_342}${poster_path} 1x, ${IMG_URL_780}${poster_path} 2x`;
        }
        if (poster_path === null) {
          srcSet500 = `${emptyImge}`;
          srcSet342 = `${emptyImge}`;
        }

        genresData
          .map(genre => {
            if (genre_ids.includes(genre.id)) {
              allGenres.push(` ${genre.name}`);
            }
          })
          .join(', ');
        return `<li data-movie-id="${id}" class="card__item">
    <a class="card__link" href = "">
         <picture  class="card__img">
          <source srcset="${srcSet500}" media="(min-width: 1280px)">
          <source srcset="${srcSet342}" media="(max-width: 1279.98px)">

          <img
           class="card__img"
            src=${IMG_URL_342}${poster_path}
            width="395"
            height="574"
            alt="${title}"
            loading="lazy"
          />
        </picture> 

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
    )
    .join('');
  container.innerHTML = filmList;
}
export function renderFilmCardsInLibrary(parsedWatched, container) {
  const filmList = parsedWatched
    .map(({ id, title, vote_average, genres, release_date, poster_path }) => {
      const allGenres = [];
      genres
        .map(genre => {
          allGenres.push(` ${genre.name}`);
        })
        .join(', ');
      const srcSet500 = `${IMG_URL_500}${poster_path} 1x, ${IMG_URL_ORIGINAL}${poster_path} 2x`;
      const srcSet342 = `${IMG_URL_342}${poster_path} 1x, ${IMG_URL_780}${poster_path} 2x`;
      return `<li data-movie-id="${id}" class="card__item">
      <a class="card__link" href = "">
          <picture  class="card__img">
            <source srcset="${srcSet500}" media="(min-width: 1280px)">
            <source srcset="${srcSet342}" media="(max-width: 1279.98px)">

            <img
             class="card__img"
              src=${IMG_URL_342}${poster_path}
              width="395"
              height="574"
              alt="${title}"
              loading="lazy"
            />
          </picture>

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
    })
    .join('');
  container.innerHTML = filmList;
}
