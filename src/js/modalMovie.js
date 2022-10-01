import { dataMovie, dataTrailer, IMG_URL } from './API/api';
import { renderWatchedList, renderQueueList } from './render';

import { modalHandle } from './modalHandle';

let watched = [];
let queue = [];
let movie = {};

const watchedList = JSON.parse(localStorage.getItem('watched'));
const queueList = JSON.parse(localStorage.getItem('queue'));

if (watchedList) {
  watched = watchedList;
}

if (queueList) {
  queue = queueList;
}

const movieList = document.getElementById('gallery-list');
const movieDetail = document.getElementById('modal-movie-detail');
const movieTrailer = document.getElementById('modal-movie-trailer');

const movieDataMarkup = (movie, videoName) => {
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
        <div class="movie__tumb" data-id="${id}">
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
            <span class="stats__value stats__value--uppercase">
              ${original_title}
            </span>
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
        <button class="movie__button-trailer" data-movie-tailer-id="${id}">${videoName}</button>
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

const movieTrailerMarkup = ({ key, name }) => {
  return `<iframe class="modal-trailer__youtube" width="100%" height="100%" src="https://www.youtube.com/embed/${key}?autoplay=0&enablejsapi=1" title="${name}" frameborder="0" allow="accelerometer"; loading="lazy"; autoplay; clipboard-write; encrypted-media; allowfullscreen></iframe>`;
};

const renderMarkup = (container, markup) => {
  container.innerHTML = markup;
};

movieList.addEventListener('click', async event => {
  event.preventDefault();
  const id = event.target.closest('.card__item').dataset.movieId;
  movie = await dataMovie(id);
  const trailer = await dataTrailer(id);

  const video =
    trailer.results.find(
      result =>
        result.name ===
        ('Official Trailer' || 'Official Teaser' || 'Teaser Trailer')
    ) || trailer.results[0];

  renderMarkup(movieDetail, movieDataMarkup(movie, video.name));
  renderMarkup(movieTrailer, movieTrailerMarkup(video));
  modalHandle('movie', movieDetail);

  const trailerBtn = document.querySelector('[data-movie-tailer-id]');

  trailerBtn.addEventListener('click', () => {
    modalHandle('movie-trailer', movieTrailer);
  });

  const watchedBtnAdd = document.getElementById('watchedAdd');
  const watchedBtnRemove = document.getElementById('watchedRemove');
  const queueBtnAdd = document.getElementById('queueAdd');
  const queueBtnRemove = document.getElementById('queueRemove');

  for (const object of watched) {
    if (object.id === Number(id)) {
      watchedBtnAdd.classList.toggle('movie__button--hidden');
      watchedBtnRemove.classList.toggle('movie__button--hidden');
    }
  }

  for (const object of queue) {
    if (object.id === Number(id)) {
      queueBtnAdd.classList.toggle('movie__button--hidden');
      queueBtnRemove.classList.toggle('movie__button--hidden');
    }
  }

  function onWatchedBtnAddClick() {
    watchedBtnAdd.classList.toggle('movie__button--hidden');
    watchedBtnRemove.classList.toggle('movie__button--hidden');
    watched.push(movie);
    localStorage.setItem('watched', JSON.stringify(watched));
  }

  function onWatchedBtnRemoveClick() {
    watchedBtnAdd.classList.toggle('movie__button--hidden');
    watchedBtnRemove.classList.toggle('movie__button--hidden');
    watched.splice(watched.indexOf(movie), 1);
    localStorage.setItem('watched', JSON.stringify(watched));
    if (isLibraryOpen) {
      renderWatchedList;
    }
  }

  function onQueueBtnAddClick() {
    queueBtnAdd.classList.toggle('movie__button--hidden');
    queueBtnRemove.classList.toggle('movie__button--hidden');
    queue.push(movie);
    localStorage.setItem('queue', JSON.stringify(queue));
  }

  function onQueueBtnRemoveClick() {
    queueBtnAdd.classList.toggle('movie__button--hidden');
    queueBtnRemove.classList.toggle('movie__button--hidden');
    queue.splice(queue.indexOf(movie), 1);
    localStorage.setItem('queue', JSON.stringify(queue));
  }

  watchedBtnAdd.addEventListener('click', onWatchedBtnAddClick);
  watchedBtnRemove.addEventListener('click', onWatchedBtnRemoveClick);
  queueBtnAdd.addEventListener('click', onQueueBtnAddClick);
  queueBtnRemove.addEventListener('click', onQueueBtnRemoveClick);
  modalHandle('movie');
});
