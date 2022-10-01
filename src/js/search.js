import { refs } from './refs';
import { dataSearch, dataGenre, dataByGenres } from './API/api';
import { renderFilmCards } from './searchByName';
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
      console.log(isChosenName);
      data = await dataSearch(searchQuery, language, page);
      notification(data);
      renderFilmCards(data);
      pageNavigation(data);
    }
    if (isChosenGenre) {
      let genre = null;
      const genresData = (await getAllGenres(language)).genres;
      genre = genresData.find(genre => {
        if (searchQuery === genre.name.toLowerCase()) {
          return genre;
        }
      });
      console.log(genre);
      if (!genre) {
        Notiflix.Notify.failure(
          'Sorry! The search has no results, change your serch word, please!'
        );
        return;
      }
      if (genre) {
        refs.errorSearch.style.display = 'none';
        data = await dataByGenres(genre.id, language, page);
        notification(data);
        renderFilmCards(data);
        pageNavigation(data);
      }
    }
    refs.pageNavDivEl.onclick = async e => {
      if (e.target.textContent === 'next') {
        console.log('refs');
        refs.currentPage++;
        data = await dataSearch(refs.pagSerchQuery, language, refs.currentPage);
        renderFilmCards(data);
        refs.scroller.to('header');
        pageNavigation(data);
      }
      if (e.target.textContent === 'prev') {
        refs.currentPage--;
        data = await dataSearch(refs.pagSerchQuery, language, refs.currentPage);
        renderFilmCards(data);
        refs.scroller.to('header');
        pageNavigation(data);
      }
      if (isFinite(e.target.textContent)) {
        data = await dataSearch(
          refs.pagSerchQuery,
          language,
          e.target.textContent
        );
        await renderFilmCards(data);
        await refs.scroller.to('header');
        await pageNavigation(data);
      }
    };
  }

  console.log(searchQuery);
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
