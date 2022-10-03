import { dataMovie, dataTrailer, dataGenre, dataByGenres } from './API/api';
import { movieDataMarkup, movieTrailerMarkup } from './markup';
import { renderWatchedList, renderQueueList, pageNavigation } from './render';
import { renderFilmCards } from './renderCard';
import { notification } from './search';
import { refs } from './refs';
import { modalHandle, closeModal } from './modalHandle';
import { loader } from './preLoader';

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
const language = 'en-US';
const page = 1;

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

const handlePagination = (id, queryF, list) => {
  refs.pageNavDivEl.onclick = async e => {
    if (e.target.textContent === 'next') {
      refs.currentPage++;
      loader.show();
      const data = await queryF(id, language, refs.currentPage);
      loader.hide();

      if (data.total_pages > 500) {
        data.total_pages = 500;
      }

      renderFilmCards(data.results, list);
      refs.scroller.to('header');
      pageNavigation(data);
    }
    if (e.target.textContent === 'prev') {
      refs.currentPage--;

      loader.show();
      const data = await queryF(id, language, refs.currentPage);
      loader.hide();

      if (data.total_pages > 500) {
        data.total_pages = 500;
      }

      renderFilmCards(data.results, list);
      refs.scroller.to('header');
      pageNavigation(data);
    }
    if (isFinite(e.target.textContent)) {
      loader.show();
      data = await queryF(id, language, e.target.textContent);
      loader.hide();

      if (data.total_pages > 500) {
        data.total_pages = 500;
      }

      await renderFilmCards(data.results, list);
      refs.scroller.to('header');
      await pageNavigation(data);
    }
  };
};

movieList.addEventListener('click', async event => {
  event.preventDefault();
  if (!event.target.closest('.card__item')) {
    return;
  }
  const id = event.target.closest('.card__item').dataset.movieId;
  const movie = await dataMovie(id, language);
  const trailers = await dataTrailer(id, language);
  const genresData = (await dataGenre(language)).genres;
  const videoInfo = getVideo(trailers);

  renderMarkup(movieDetail, movieDataMarkup(movie, videoInfo.slicedVideoName));

  videoInfo && renderMarkup(movieTrailer, movieTrailerMarkup(videoInfo));

  modalHandle('movie', movieDetail);

  const trailerBtn = document.querySelector('[data-movie-tailer-id]');

  trailerBtn &&
    trailerBtn.addEventListener('click', () => {
      modalHandle('movie-trailer', movieTrailer);
    });

  const findIdGenre = async queryGenre => {
    const genreId = genresData.find(genre => {
      if (queryGenre.toLowerCase() === genre.name.toLowerCase()) {
        return genre;
      }
    }).id;
    return genreId;
  };

  const genresCard = document.querySelectorAll('[data-genre]');

  genresCard.forEach(genre => {
    genre.addEventListener('click', async () => {
      loader.show();
      const id = await findIdGenre(genre.dataset.genre);
      const data = await dataByGenres(id, language, page);
      if (data.total_pages > 500) {
        data.total_pages = 500;
      }
      loader.hide();
      notification(data);
      renderFilmCards(data.results, refs.galleryListEl);
      pageNavigation(data);
      handlePagination(id, dataByGenres, refs.galleryListEl);
      refs.scroller.to('header');
      document
        .querySelector('[data-modal="movie"]')
        .closest('.backdrop')
        .classList.add('is-hidden');
      document.querySelector('body').classList.remove('noscroll');
    });
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
    console.log(refs.watchedListBtnInput.checked);
    watchedBtnAdd.classList.toggle('movie__button--hidden');
    watchedBtnRemove.classList.toggle('movie__button--hidden');
    watched.push(movie);
    localStorage.setItem('watched', JSON.stringify(watched));
    if (
      refs.pageNavDivEl.classList.contains('pagination--hidden') &&
      refs.watchedListBtnInput.checked
    ) {
      renderWatchedList();
    }
  }

  function onWatchedBtnRemoveClick() {
    console.log(refs.watchedListBtnInput.checked);
    watchedBtnAdd.classList.toggle('movie__button--hidden');
    watchedBtnRemove.classList.toggle('movie__button--hidden');
    for (const object of watched) {
      if (object.id === Number(id)) {
        watched.splice(watched.indexOf(object), 1);
        break;
      }
    }
    localStorage.setItem('watched', JSON.stringify(watched));
    if (
      refs.pageNavDivEl.classList.contains('pagination--hidden') &&
      refs.watchedListBtnInput.checked
    ) {
      renderWatchedList();
    }
  }

  function onQueueBtnAddClick() {
    console.log(refs.queueListBtnInput.checked);
    queueBtnAdd.classList.toggle('movie__button--hidden');
    queueBtnRemove.classList.toggle('movie__button--hidden');
    queue.push(movie);
    localStorage.setItem('queue', JSON.stringify(queue));
    if (
      refs.pageNavDivEl.classList.contains('pagination--hidden') &&
      refs.queueListBtnInput.checked
    ) {
      renderQueueList();
    }
  }

  function onQueueBtnRemoveClick() {
    console.log(refs.queueListBtnInput.checked);
    queueBtnAdd.classList.toggle('movie__button--hidden');
    queueBtnRemove.classList.toggle('movie__button--hidden');
    for (const object of queue) {
      if (object.id === Number(id)) {
        queue.splice(queue.indexOf(object), 1);
        break;
      }
    }
    localStorage.setItem('queue', JSON.stringify(queue));
    if (
      refs.pageNavDivEl.classList.contains('pagination--hidden') &&
      refs.queueListBtnInput.checked
    ) {
      renderQueueList();
    }
  }

  watchedBtnAdd.addEventListener('click', onWatchedBtnAddClick);
  watchedBtnRemove.addEventListener('click', onWatchedBtnRemoveClick);
  queueBtnAdd.addEventListener('click', onQueueBtnAddClick);
  queueBtnRemove.addEventListener('click', onQueueBtnRemoveClick);
  modalHandle('movie');
});
