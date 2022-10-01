import { dataMovieList, dataGenre } from './API/api';
import { refs } from './refs';
import SweetScroll from 'sweet-scroll';
import emptyImg from '../images/no-image.jpg';
const galleryListEl = document.querySelector('#gallery-list');
const baseUrtlImg = 'https://image.tmdb.org/t/p/original/';
const page = 1;
const language = 'en-US';

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
        if (poster_path) {
          imgSrc = `${baseUrtlImg}${poster_path}`;
        }
        if (poster_path === null) {
          imgSrc = imgSrc = emptyImg;
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
