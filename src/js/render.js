import {
  dataMovieList,
  dataGenre,
  IMG_URL_342,
  IMG_URL_500,
  IMG_URL_780,
  IMG_URL_ORIGINAL,
} from './API/api';
import { refs } from './refs';
import SweetScroll from 'sweet-scroll';
import emptyImg from '../images/no-image.jpg';
const galleryListEl = document.querySelector('#gallery-list');
const galleryListWatchedEl = document.querySelector('.gallery__list-watched');
const baseUrtlImg = 'https://image.tmdb.org/t/p/original/';
// const page = 1;
const language = 'en-US';
const pageNavDivEl = document.querySelector('.pagination');
// const prevBtnEl = document.querySelector('.pagination_previousBtn');
// const nextBtnEl = document.querySelector('.pagination_nextBtn');
// const currentPageEl = document.querySelector('.pagination_currentPage');
// const firstPageEl = document.querySelector('.pagination_firstPage');
// const lastPageEl = document.querySelector('.pagination_lastPage');
// const leftPointsEl = document.querySelector('.pagination_leftPoints');
// const rightPointsEl = document.querySelector('.pagination_rightPoints');
// const rightFirstPageEl = document.querySelector('.pagination_rightFirstPage');
// const rightSecondPageEl = document.querySelector('.pagination_rightSecondPage');
// const leftFirstPageEl = document.querySelector('.pagination_leftFirstPage');
// const leftSecondPageEl = document.querySelector('.pagination_leftSecondPage');
const galleryContainer = document.querySelector('.gallery.watched .container');

const watchedListBtn = document.getElementById('js-WatchedButton');
const queueListBtn = document.getElementById('js-QueueButton');
// const movieListRef = document.getElementById('gallery-list');

watchedListBtn.addEventListener('click', renderWatchedList);
queueListBtn.addEventListener('click', renderQueueList);

// let currentPage = 1;
// let totalPages = 1;
const scroller = new SweetScroll({ duration: 6000 });

async function getAllGenres(language) {
  return await dataGenre(language);
}

export async function request(page, language) {
  const data = await dataMovieList(page, language);
  renderFilmCards(data);
  pageNavigation(data);
}

async function renderFilmCards(data) {
  const genresData = (await getAllGenres(language)).genres;
  let imgSrc = null;
  const filmList = data.results
    .map(
      ({ id, title, vote_average, genre_ids, release_date, poster_path }) => {
        // if (poster_path) {
        //   imgSrc = `${baseUrtlImg}${poster_path}`;
        // }
        // if (poster_path === null) {
        //   imgSrc = imgSrc = emptyImg;
        // }
        const allGenres = [];
        genresData
          .map(genre => {
            if (genre_ids.includes(genre.id)) {
              allGenres.push(` ${genre.name}`);
            }
          })
          .join(', ');

        const srcSet500 = `${IMG_URL_500}${poster_path} 1x, ${IMG_URL_ORIGINAL}${poster_path} 2x`;
        const srcSet342 = `${IMG_URL_342}${poster_path} 1x, ${IMG_URL_780}${poster_path} 2x`;

        return `<li data-movie-id="${id}" class="card__item">
    <a class="card__link" href = "">
    
    <!--    <img class="card__img"
        src="${imgSrc}"
        alt="${title}"
        loading=lazy
    /> -->
        <picture>
          <source srcset="${srcSet500}" media="(min-width: 1280px)">
          <source srcset="${srcSet342}" media="(max-width: 1279.98px)">

          <img
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
  galleryListEl.innerHTML = filmList;
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

  pageNavDivEl.remove();
  if (!parsedWatched || parsedWatched.length === 0) {
    galleryContainer.innerHTML =
      '<h1 class="alert">No movies here yet</h1><img class="alert-img" src="https://i.kym-cdn.com/entries/icons/original/000/019/277/confusedtravolta.jpg" alt="Confused Travolta">';
    return;
  }

  let imgSrc = null;
  const filmList = parsedWatched
    .map(({ id, title, vote_average, genres, release_date, poster_path }) => {
      // if (poster_path) {
      //   imgSrc = `${baseUrtlImg}${poster_path}`;
      // }
      // if (poster_path === null) {
      //   imgSrc = imgSrc = emptyImg;
      // }
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
        <picture>
          <source srcset="${srcSet500}" media="(min-width: 1280px)">
          <source srcset="${srcSet342}" media="(max-width: 1279.98px)">

          <img
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
  galleryListWatchedEl.innerHTML = filmList;
}

export function renderQueueList() {
  const parsedQueue = JSON.parse(localStorage.getItem('queue'));
  pageNavDivEl.remove();

  if (!parsedQueue || parsedQueue.length === 0) {
    galleryContainer.innerHTML =
      '<h1 class="alert">No movies here yet</h1><img class="alert-img" src="https://i.kym-cdn.com/entries/icons/original/000/019/277/confusedtravolta.jpg" alt="Confused Travolta">';
    return;
  }

  let imgSrc = null;
  const filmList = parsedQueue
    .map(({ id, title, vote_average, genres, release_date, poster_path }) => {
      if (poster_path) {
        imgSrc = `${baseUrtlImg}${poster_path}`;
      }
      if (poster_path === null) {
        imgSrc = imgSrc = emptyImg;
      }
      const allGenres = [];
      genres
        .map(genre => {
          allGenres.push(genre.name);
        })
        .join(', ');
      const srcSet500 = `${IMG_URL_500}${poster_path} 1x, ${IMG_URL_ORIGINAL}${poster_path} 2x`;
      const srcSet342 = `${IMG_URL_342}${poster_path} 1x, ${IMG_URL_780}${poster_path} 2x`;
      return `<li data-movie-id="${id}" class="card__item">
    <a class="card__link" href = "">
        <picture>
          <source srcset="${srcSet500}" media="(min-width: 1280px)">
          <source srcset="${srcSet342}" media="(max-width: 1279.98px)">

          <img
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
  galleryListWatchedEl.innerHTML = filmList;
}
