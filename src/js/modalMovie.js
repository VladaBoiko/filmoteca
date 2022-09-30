import { dataMovie, dataTrailer, IMG_URL } from './API/api';

import { modalHandle } from './modalHandle';

const movieList = document.getElementById('gallery-list');
const movieDetail = document.getElementById('modal-movie-detail');
const movieTrailer = document.getElementById('modal-movie-trailer');

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
    id,
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
            <span class="stats__value">${
              Math.round(popularity * 10) / 10
            }</span>
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
        <button class="movie__button-trailer" data-movie-tailer-id="${id}"></button>
        </div>  
        <div class="movie__actions">
          <button type="button" class="movie__button">Add to watched</button>
          <button type="button" class="movie__button">Add to Queue</button>
        </div>
      </div>
  `;
};

const movieTrailerMarkup = trailer => {
  return `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${trailer.results[0].key}?autoplay=1" title="${trailer.results[0].name}" frameborder="0" allow="accelerometer"; autoplay; clipboard-write; encrypted-media; allowfullscreen></iframe>`;
};

const renderMarkup = (container, markup) => {
  container.innerHTML = markup;
};

movieList.addEventListener('click', async event => {
  event.preventDefault();
  const id = event.target.closest('.card__item').dataset.movieId;
  const movie = await dataMovie(id);
  const trailer = await dataTrailer(id);

  renderMarkup(movieDetail, movieDataMarkup(movie));
  modalHandle('movie', movieDetail);

  const trailerBtn = document.querySelector('[data-movie-tailer-id]');

  trailerBtn.addEventListener('click', () => {
    renderMarkup(movieTrailer, movieTrailerMarkup(trailer));
    modalHandle('movie-trailer', movieTrailer);
  });
});
