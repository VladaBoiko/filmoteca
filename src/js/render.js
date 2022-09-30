import { dataMovieList, dataGenre } from './API/api';
import SweetScroll from 'sweet-scroll';
const headerEl = document.querySelector('header');
const galleryListEl = document.querySelector('#gallery-list');
const baseUrtlImg = 'https://image.tmdb.org/t/p/original/';
const page = 1;
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
  let imgSrc = null;
  const filmList = data.results
    .map(
      ({ id, title, vote_average, genre_ids, release_date, poster_path }) => {
        // console.log(poster_path);
        if (poster_path) {
          imgSrc = `${baseUrtlImg}${poster_path}`;
        }
        if (poster_path === null) {
          imgSrc =
            'data:image/png;base64,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';
        }
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
        src="${imgSrc}"
        alt="${title}"
        loading=lazy
    />
    
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
  galleryListEl.insertAdjacentHTML('beforeend', filmList);
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
