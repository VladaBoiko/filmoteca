import { refs } from './refs';
import { dataSearch, dataGenre, dataByGenres } from './API/api';
import { renderFilmCards } from './renderCard';
import Notiflix from 'notiflix';
import { pageNavigation } from './render';
import SweetScroll from 'sweet-scroll';

const page = 1;
const language = 'en-US';
let isChosenName = true;
let isChosenGenre = false;
refs.chosenNameBtn.style.textDecoration = 'underline';
refs.header.classList.add('header-name');
let data = null;

refs.searchForm.addEventListener('submit', onSearch);
refs.chosenNameBtn.addEventListener('click', chosenTypeName);
refs.chosenGenreBtn.addEventListener('click', chosenTypeGenre);
const galleryBySearch = document.querySelector('#gallery-list');

function chosenTypeName() {
  isChosenName = true;
  isChosenGenre = false;
  // refs.genreInput.classList.add('visually-hidden');
  // refs.nameInput.classList.remove('visually-hidden');
  refs.chosenNameBtn.style.textDecoration = 'underline';
  refs.chosenGenreBtn.style.textDecoration = 'none';
  refs.header.classList.remove('header-genre');
  refs.header.classList.add('header-name');
}

function chosenTypeGenre() {
  isChosenName = false;
  isChosenGenre = true;
  // refs.nameInput.classList.add('visually-hidden');
  // refs.genreInput.classList.remove('visually-hidden');
  refs.chosenNameBtn.style.textDecoration = 'none';
  refs.chosenGenreBtn.style.textDecoration = 'underline';
  refs.header.classList.remove('header-name');
  refs.header.classList.add('header-genre');
}
async function onSearch(evt) {
  evt.preventDefault();
  // const genresData = (await getAllGenres(language)).genres;
  const searchQuery = evt.currentTarget.query.value.trim().toLowerCase();
  refs.pagSerchQuery = searchQuery;
  if (searchQuery !== '') {
    refs.errorSearch.style.display = 'none';
    if (isChosenName) {
      data = await dataSearch(searchQuery, language, page);
      if (data.total_pages > 500) {
        data.total_pages = 500;
      }
      notification(data);
      renderFilmCards(data.results, galleryBySearch);
      pageNavigation(data);
    }
    if (isChosenGenre) {
      let genre = null;
      const genresData = (await getAllGenres(language)).genres;
      genre = genresData.find(genre => {
        if (searchQuery === genre.name.toLowerCase()) {
          refs.genre = genre.id;
          return genre;
        }
      });
      if (!genre) {
        Notiflix.Notify.failure(
          'Sorry! The search has no results, change your serch word, please!'
        );
        return;
      }
      if (genre) {
        refs.errorSearch.style.display = 'none';
        data = await dataByGenres(genre.id, language, page);
        if (data.total_pages > 500) {
          data.total_pages = 500;
        }
        notification(data);
        renderFilmCards(data.results, galleryBySearch);
        pageNavigation(data);
      }
    }
    refs.pageNavDivEl.onclick = e => {
      if (e.target.textContent === 'next') {
        refs.currentPage++;
        refs.scroller.to('header');
        paginationRequest(refs.currentPage);
      }
      if (e.target.textContent === 'prev') {
        refs.currentPage--;
        refs.scroller.to('header');
        paginationRequest(refs.currentPage);
      }
      if (isFinite(e.target.textContent)) {
        refs.scroller.to('header');
        paginationRequest(e.target.textContent);
      }
    };
  }

  if (searchQuery === '') {
    refs.errorSearch.style.display = 'block';
    Notiflix.Notify.failure(`Oops, the search is empty, try again.`);
    return;
  }
  refs.searchForm.reset();
}
function notification(data) {
  if (data.total_results > 0) {
    Notiflix.Notify.success(
      `Success! We've found ${data.total_results} movies for you!!!`
    );
  }

  if (data.total_results === 0) {
    Notiflix.Notify.warning(
      'Sorry! The search has no results, change your serch word, please!'
    );
  }
}
async function getAllGenres(language) {
  return await dataGenre(language);
}

async function paginationRequest(page) {
  if (isChosenName) {
    data = await dataSearch(refs.searchQuery, language, page);
    if (data.total_pages > 500) {
      data.total_pages = 500;
    }
    notification(data);
    renderFilmCards(data.results, galleryBySearch);
    pageNavigation(data);
  }
  if (isChosenGenre) {
    data = await dataByGenres(refs.genre, language, page);
    if (data.total_pages > 500) {
      data.total_pages = 500;
    }
    notification(data);
    renderFilmCards(data.results, galleryBySearch);
    pageNavigation(data);
  }
}
