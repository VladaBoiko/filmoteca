import { dataMovie, dataTrailer } from './API/api';
import { movieDataMarkup, movieTrailerMarkup } from './markup';
import { renderWatchedList, renderQueueList } from './render';
import { refs } from './refs';

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
const { movieList, movieDetail, movieTrailer } = refs;

const renderMarkup = (container, markup) => {
  container.innerHTML = markup;
};

const getVideo = trailers => {
  const video =
    trailers.results.find(
      result =>
        result.name ===
        ('Official Trailer' || 'Official Teaser' || 'Teaser Trailer')
    ) || trailers.results[0];

  const videoName = video ? video.name : '';
  const slicedVideoName =
    videoName.length > 40 ? `${videoName.slice(0, 40)}...` : videoName;

  return { ...video, slicedVideoName };
};

movieList.addEventListener('click', async event => {
  event.preventDefault();
  if (!event.target.closest('.card__item')) {
    return;
  }
  id = event.target.closest('.card__item').dataset.movieId;
  const movie = await dataMovie(id);
  const trailers = await dataTrailer(id);
  const videoInfo = getVideo(trailers);

  renderMarkup(movieDetail, movieDataMarkup(movie, videoInfo.slicedVideoName));

  videoInfo && renderMarkup(movieTrailer, movieTrailerMarkup(videoInfo));

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
