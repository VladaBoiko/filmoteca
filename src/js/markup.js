import emptyImg from '../images/no-image.jpg';

import {
  IMG_URL_342,
  IMG_URL_500,
  IMG_URL_780,
  IMG_URL_ORIGINAL,
} from './API/api';

export const movieDataMarkup = (movie, videoName) => {
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
    id,
  } = movie;
  const srcSet500 = `${IMG_URL_500}${poster_path} 1x, ${IMG_URL_ORIGINAL}${poster_path} 2x`;
  const srcSet342 = `${IMG_URL_342}${poster_path} 1x, ${IMG_URL_780}${poster_path} 2x`;
  let poster = '';
  if (poster_path !== null) {
    poster = `<picture>
                      <source srcset="${srcSet500}" media="(min-width: 1280px)">
                      <source srcset="${srcSet342}" media="(max-width: 1279.98px)">

                      <img
                        src=${IMG_URL_342}${poster_path}
                        width="375"
                        height="478"
                        alt="${title}"
                        loading="lazy"
                      />
                    </picture> `;
  } else {
    poster = `<img class="card__img"
                      src="${emptyImg}"
                      alt="${title}"
                      loading="lazy"
                    />`;
  }

  return `
      <div class="movie__tumb" data-id="${id}">
      ${poster}
      </div>
      <div class="movie__content">
      <div class="movie__body">
      <h2 class="movie__title">${title}</h2>
        <ul class="movie__stats stats">
          <li class="stats__row">
            <span class="stats__name">Vote / Votes</span>
            <span class="statss__value">
              <span class="stats__vote">${
                Math.round(vote_average * 10) / 10
              }</span>
              /
              <span class="stats__votes">${vote_count}</span>
            </span>
          </li>
          <li class="stats__row">
            <span class="stats__name">Popularity</span>
            <span class="stats__value">
              ${Math.round(popularity * 10) / 10}
            </span>
          </li>
          <li class="stats__row">
            <span class="stats__name">Original Title</span>
            <span class="stats__value stats__value--uppercase">
              ${original_title}
            </span>
          </li>
          <li class="stats__row">
            <span class="stats__name">Genre</span>
            <span class="stats__value">
              ${genres.map(genre => genre.name).join(', ')}</span>
          </li>
        </ul>
        <h3 class="movie__sub-title">About</h3>
        <p class="movie__description">
          ${overview}
        </p>
        ${
          videoName
            ? `<button class="movie__button-trailer" data-movie-tailer-id="${id}">${videoName}</button>`
            : ''
        }
        </div>  
        <div class="movie__actions">
          <button type="button" class="movie__button" id="watchedAdd">Add to watched</button>
          <button type="button" class="movie__button movie__button--hidden" id="watchedRemove">Remove from watched</button>
          <button type="button" class="movie__button" id="queueAdd">Add to Queue</button>
          <button type="button" class="movie__button movie__button--hidden" id="queueRemove">Remove from Queue</button>
        </div>
      </div>
  `;
};

export const movieTrailerMarkup = ({ key, name }) => {
  return `<iframe class="modal-trailer__youtube" width="100%" height="100%" src="https://www.youtube.com/embed/${key}?autoplay=0&enablejsapi=1" title="${name}" frameborder="0" allow="accelerometer"; loading="lazy"; autoplay; clipboard-write; encrypted-media; allowfullscreen></iframe>`;
};
