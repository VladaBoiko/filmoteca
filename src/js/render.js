import { dataMovieList, dataGenre } from './API/api';
import SweetScroll from 'sweet-scroll';
const headerEl = document.querySelector('header');
const galleryListEl = document.querySelector('#gallery-list');
const language = 'en-US';
const pageNavDivEl = document.querySelector('.pagination');
const prevBtnEl = document.querySelector('.pagination_previousBtn');
const nextBtnEl = document.querySelector('.pagination_nextBtn');
const currentPageEl = document.querySelector('.pagination_currentPage');
const firstPageEl = document.querySelector('.pagination_firstPage');
const lastPageEl = document.querySelector('.pagination_lastPage');
const leftPointsEl = document.querySelector('.pagination_leftPoints');
const rightPointsEl = document.querySelector('.pagination_rightPoints');
const rightFirstPageEl = document.querySelector('.pagination_rightFirstPage');
const rightSecondPageEl = document.querySelector('.pagination_rightSecondPage');
const leftFirstPageEl = document.querySelector('.pagination_leftFirstPage');
const leftSecondPageEl = document.querySelector('.pagination_leftSecondPage');
let currentPage = 1;
let totalPages = 1;
const scroller = new SweetScroll({ duration: 6000 });

async function getAllGenres(language) {
  return await dataGenre(language);
}

async function request(page, language) {
  const data = await dataMovieList(page, language);
  renderFilmCards(data);
  pageNavigation(data);
}

async function renderFilmCards(data) {
  const genresData = (await getAllGenres(language)).genres;
  const filmList = data.results.map(
    ({ id, title, vote_average, genre_ids, release_date, poster_path }) => {
      const allGenres = [];
      genresData
        .map(genre => {
          if (genre_ids.includes(genre.id)) {
            allGenres.push(genre.name);
          }
        })
        .join(', ');
      return `<li data-movie-id="${id}" class="card__item">
    <a class="card__link" href = "">
        <img class="card__img"
        src="https://image.tmdb.org/t/p/original/${poster_path}"
        alt=""
    />
    
    <h2 class="card__title">${title}</h2>
    <div class="card__text">
        <p class="card__info">${allGenres.join(', ')} | ${release_date
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
  );
  galleryListEl.innerHTML = filmList.join('');
}

request(1);
async function pageNavigation(data) {
  if (data.total_results <= 20) {
    pageNavDivEl.style.display = 'none';
    return;
  } else {
    pageNavDivEl.style.display = 'flex';
  }
  currentPage = data.page;
  totalPages = data.total_pages;
  leftFirstPageEl.textContent = currentPage - 1;
  leftSecondPageEl.textContent = currentPage - 2;
  rightFirstPageEl.textContent = currentPage + 1;
  rightSecondPageEl.textContent = currentPage + 2;
  currentPageEl.textContent = currentPage;
  lastPageEl.textContent = totalPages;

  if (!currentPage > 0) {
    return;
  }

  if (currentPage === 1) {
    prevBtnEl.setAttribute('disabled', true);
  } else {
    prevBtnEl.removeAttribute('disabled');
  }

  if (currentPage === totalPages) {
    nextBtnEl.setAttribute('disabled', true);
  } else {
    nextBtnEl.removeAttribute('disabled');
  }

  if (currentPage > 4) {
    leftPointsEl.style.display = 'block';
  } else {
    leftPointsEl.style.display = 'none';
  }

  if (Number(leftFirstPageEl.textContent) <= 1) {
    leftFirstPageEl.style.display = 'none';
  } else if (currentPage > 2) {
    leftFirstPageEl.style.display = 'block';
  }

  if (Number(leftSecondPageEl.textContent) <= 1) {
    leftSecondPageEl.style.display = 'none';
  } else {
    if (currentPage > 1) {
      leftSecondPageEl.style.display = 'block';
    }
  }

  if (Number(leftSecondPageEl.textContent) <= -1) {
    firstPageEl.style.display = 'none';
  } else {
    firstPageEl.style.display = 'block';
  }

  if (totalPages - currentPage <= 3) {
    rightPointsEl.style.display = 'none';
    rightFirstPageEl.textContent = currentPage + 1;
    rightSecondPageEl.textContent = currentPage + 2;
  } else {
    rightPointsEl.style.display = 'block';
  }

  if (totalPages - Number(rightFirstPageEl.textContent) <= 0) {
    rightFirstPageEl.style.display = 'none';
  } else if (totalPages - currentPage >= 0) {
    rightFirstPageEl.textContent = currentPage + 1;
    rightSecondPageEl.textContent = currentPage + 2;
    rightFirstPageEl.style.display = 'block';
  }

  if (totalPages - Number(rightSecondPageEl.textContent) <= 0) {
    rightSecondPageEl.style.display = 'none';
  } else {
    if (totalPages - currentPage >= 0) {
      rightSecondPageEl.style.display = 'block';
    }
  }
  if (Number(lastPageEl.textContent) === currentPage) {
    lastPageEl.style.display = 'none';
  } else {
    lastPageEl.style.display = 'block';
  }
}

pageNavDivEl.addEventListener('click', e => {
  if (e.target.textContent === 'next') {
    currentPage++;
    request(currentPage);
    scroller.to('header');
  }
  if (e.target.textContent === 'prev') {
    currentPage--;
    request(currentPage);
    scroller.to('header');
  }
  if (isFinite(e.target.textContent)) {
    request(e.target.textContent);
    scroller.to('header');
  }
});
