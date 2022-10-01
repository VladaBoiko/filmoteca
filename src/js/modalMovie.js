import { dataMovie, dataTrailer } from './API/api';
import { movieDataMarkup, movieTrailerMarkup } from './markup';
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

const movieList = document.querySelector('main');
const movieDetail = document.getElementById('modal-movie-detail');
const movieTrailer = document.getElementById('modal-movie-trailer');

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

  const videoName = video ? video.name : '';

  const videoNameSliced =
    videoName.length > 60 ? `${videoName.slice(0, 60)}...` : videoName;

  renderMarkup(movieDetail, movieDataMarkup(movie, videoNameSliced));
  video && renderMarkup(movieTrailer, movieTrailerMarkup(video));

  modalHandle('movie', movieDetail);

  const trailerBtn = document.querySelector('[data-movie-tailer-id]');

  trailerBtn &&
    trailerBtn.addEventListener('click', () => {
      modalHandle('movie-trailer', movieTrailer);
    });

  // ============================================================================

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
