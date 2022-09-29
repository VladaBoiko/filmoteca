import { dataMovie, IMG_URL } from './API/api';

import { modalHandle } from './modalHandle';

const movieList = document.getElementById('gallery-list');
const movieDetail = document.getElementById('modal-movie-detail');

const movieDataMarkup = movie => {
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = movie;
  return `
        <div class="movie__tumb">
        <img
          src=${IMG_URL}${poster_path}
          width="375"
          height="478"
          alt="${title}"
        />
      </div>
      <div class="movie__content">
        <h2 class="movie__title">${title}</h2>
        <ul class="movie__stats stats">
          <li class="stats__row">
            <span class="stats__name">Vote / Votes</span>
            <span class="statss__value">
              <span class="stats__vote">${vote_average}</span>
              /
              <span class="stats__votes">${vote_count}</span>
            </span>
          </li>
          <li class="stats__row">
            <span class="stats__name">Popularity</span>
            <span class="stats__value">${popularity}</span>
          </li>
          <li class="stats__row">
            <span class="stats__name">Original Title</span>
            <sapn class="stats__value stats__value--uppercase">
              ${original_title}
            </sapn>
          </li>
          <li class="stats__row">
            <span class="stats__name">Genre</span>
            <span class="stats__value">${genres
              .map(genre => genre.name)
              .join(', ')}</span>
          </li>
        </ul>
        <h3 class="movie__sub-title">About</h3>
        <p class="movie__description">
          ${overview}
        </p>
        <div class="movie__actions">
          <button type="button" class="movie__button">Add to watched</button>
          <button type="button" class="movie__button">Add to Queue</button>
        </div>
      </div>
  `;
};

movieList.addEventListener('click', async event => {
  event.preventDefault();
  const movie = await dataMovie(30150);
  movieDetail.innerHTML = movieDataMarkup(movie);
  modalHandle('movie');
});
