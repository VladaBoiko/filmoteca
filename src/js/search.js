import { refs } from './refs';
import { dataSearch, dataGenre, dataByGenres } from './API/api';
import { renderFilmCards } from './renderCard';
import Notiflix from 'notiflix';
import { pageNavigation } from './render';
const page = 1;

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
  refs.chosenNameBtn.style.textDecoration = 'underline';
  refs.chosenGenreBtn.style.textDecoration = 'none';
  refs.header.classList.remove('header-genre');
  refs.header.classList.add('header-name');
}

function chosenTypeGenre() {
  isChosenName = false;
  isChosenGenre = true;
  refs.chosenNameBtn.style.textDecoration = 'none';
  refs.chosenGenreBtn.style.textDecoration = 'underline';
  refs.header.classList.remove('header-name');
  refs.header.classList.add('header-genre');
}
async function onSearch(evt) {
  evt.preventDefault();
  const searchQuery = evt.currentTarget.query.value.trim().toLowerCase();
  refs.pagSerchQuery = searchQuery;
  if (searchQuery !== '') {
    refs.errorSearch.style.display = 'none';
    if (isChosenName) {
      data = await dataSearch(searchQuery, page);
      if (data.total_pages > 500) {
        data.total_pages = 500;
      }
      notification(data);
      renderFilmCards(data.results, galleryBySearch);
      pageNavigation(data, searchQuery);
    }
    if (isChosenGenre) {
      let genre = null;
      const genresData = (await getAllGenres()).genres;
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
        if (data.total_pages > 500) {
          data.total_pages = 500;
        }
        data = await dataByGenres(genre.id, page);
        notification(data);
        renderFilmCards(data.results, galleryBySearch);
        pageNavigation(data, searchQuery);
      }
    }
    refs.pageNavDivEl.onclick = e => {
      if (e.target.dataset.paginationNav === 'next') {
        refs.currentPage++;
        renderFilmCards(data.results, galleryBySearch);
        refs.scroller.to('header');
        paginationRequest(refs.currentPage, searchQuery);
      }
      if (e.target.dataset.paginationNav === 'prev') {
        refs.currentPage--;
        renderFilmCards(data.results, galleryBySearch);
        refs.scroller.to('header');
        paginationRequest(refs.currentPage, searchQuery);
      }
      if (isFinite(e.target.textContent)) {
        renderFilmCards(data.results, galleryBySearch);
        refs.scroller.to('header');
        paginationRequest(e.target.textContent, searchQuery);
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
export function notification(data) {
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
async function getAllGenres() {
  return await dataGenre();
}

async function paginationRequest(page, searchQuery) {
  if (isChosenName) {
    // console.log(searchQuery);
    data = await dataSearch(searchQuery, page);
    if (data.total_pages > 500) {
      data.total_pages = 500;
    }
    notification(data);
    renderFilmCards(data.results, galleryBySearch);
    pageNavigation(data);
  }
  if (isChosenGenre) {
    data = await dataByGenres(refs.genre, page);
    if (data.total_pages > 500) {
      data.total_pages = 500;
    }
    notification(data);
    renderFilmCards(data.results, galleryBySearch);
    pageNavigation(data);
  }
}
