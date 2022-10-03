import { dataMovieList } from './API/api';
import { refs } from './refs';
import { renderFilmCards, renderFilmCardsInLibrary } from './renderCard';

import { loader } from './preLoader';

const galleryListEl = document.querySelector('#gallery-list');
const galleryListWatchedEl = document.querySelector('.gallery__list-watched');

refs.watchedListBtn.addEventListener('click', renderWatchedList);
refs.queueListBtn.addEventListener('click', renderQueueList);

export async function request(page) {
  loader.show();

  const data = await dataMovieList(page);
  renderFilmCards(data.results, galleryListEl);
  pageNavigation(data);

  loader.hide();
}

request(1);
export async function pageNavigation(data) {
  if (data.total_results <= 20) {
    refs.pageNavDivEl.style.display = 'none';
    return;
  } else {
    refs.pageNavDivEl.style.display = 'flex';
  }
  refs.currentPage = data.page;
  refs.totalPages = data.total_pages;
  refs.leftFirstPageEl.textContent = refs.currentPage - 1;
  refs.leftSecondPageEl.textContent = refs.currentPage - 2;
  refs.rightFirstPageEl.textContent = refs.currentPage + 1;
  refs.rightSecondPageEl.textContent = refs.currentPage + 2;
  refs.currentPageEl.textContent = refs.currentPage;
  refs.lastPageEl.textContent = refs.totalPages;

  if (!refs.currentPage > 0) {
    return;
  }

  if (refs.currentPage === 1) {
    refs.prevBtnEl.setAttribute('disabled', true);
  } else {
    refs.prevBtnEl.removeAttribute('disabled');
  }

  if (refs.currentPage === refs.totalPages) {
    refs.nextBtnEl.setAttribute('disabled', true);
  } else {
    refs.nextBtnEl.removeAttribute('disabled');
  }

  if (refs.currentPage > 4) {
    refs.leftPointsEl.style.display = 'block';
  } else {
    refs.leftPointsEl.style.display = 'none';
  }

  if (Number(refs.leftFirstPageEl.textContent) <= 1) {
    refs.leftFirstPageEl.style.display = 'none';
  } else if (refs.currentPage > 2) {
    refs.leftFirstPageEl.style.display = 'block';
  }

  if (Number(refs.leftSecondPageEl.textContent) <= 1) {
    refs.leftSecondPageEl.style.display = 'none';
  } else {
    if (refs.currentPage > 1) {
      refs.leftSecondPageEl.style.display = 'block';
    }
  }

  if (Number(refs.leftSecondPageEl.textContent) <= -1) {
    refs.firstPageEl.style.display = 'none';
  } else {
    refs.firstPageEl.style.display = 'block';
  }

  if (refs.totalPages - refs.currentPage <= 3) {
    refs.rightPointsEl.style.display = 'none';
    refs.rightFirstPageEl.textContent = refs.currentPage + 1;
    refs.rightSecondPageEl.textContent = refs.currentPage + 2;
  } else {
    refs.rightPointsEl.style.display = 'block';
  }

  if (refs.totalPages - Number(refs.rightFirstPageEl.textContent) <= 0) {
    refs.rightFirstPageEl.style.display = 'none';
  } else if (refs.totalPages - refs.currentPage >= 0) {
    refs.rightFirstPageEl.textContent = refs.currentPage + 1;
    refs.rightSecondPageEl.textContent = refs.currentPage + 2;
    refs.rightFirstPageEl.style.display = 'block';
  }

  if (refs.totalPages - Number(refs.rightSecondPageEl.textContent) <= 0) {
    refs.rightSecondPageEl.style.display = 'none';
  } else {
    if (refs.totalPages - refs.currentPage >= 0) {
      refs.rightSecondPageEl.style.display = 'block';
    }
  }
  if (Number(refs.lastPageEl.textContent) === refs.currentPage) {
    refs.lastPageEl.style.display = 'none';
  } else {
    refs.lastPageEl.style.display = 'block';
  }
}

refs.pageNavDivEl.onclick = e => {
  if (e.target.textContent === 'next') {
    console.log('refs');
    refs.currentPage++;
    request(refs.currentPage);
    refs.scroller.to('header');
  }
  if (e.target.textContent === 'prev') {
    refs.currentPage--;
    request(refs.currentPage);
    refs.scroller.to('header');
  }
  if (isFinite(e.target.textContent)) {
    request(e.target.textContent);
    refs.scroller.to('header');
  }
};

export function renderWatchedList() {
  const parsedWatched = JSON.parse(localStorage.getItem('watched'));

  if (!parsedWatched || parsedWatched.length === 0) {
    refs.noMoviesAlert.classList.remove('alert-block--hidden');
    refs.galleryListWatchedEl.classList.add('gallery__list-watched--hidden');
    return;
  }

  refs.noMoviesAlert.classList.add('alert-block--hidden');
  refs.galleryListWatchedEl.classList.remove('gallery__list-watched--hidden');
  renderFilmCardsInLibrary(parsedWatched, galleryListWatchedEl);
}

export function renderQueueList() {
  const parsedQueue = JSON.parse(localStorage.getItem('queue'));

  if (!parsedQueue || parsedQueue.length === 0) {
    refs.noMoviesAlert.classList.remove('alert-block--hidden');
    refs.galleryListWatchedEl.classList.add('gallery__list-watched--hidden');
    return;
  }

  refs.noMoviesAlert.classList.add('alert-block--hidden');
  refs.galleryListWatchedEl.classList.remove('gallery__list-watched--hidden');
  renderFilmCardsInLibrary(parsedQueue, galleryListWatchedEl);
  
}
