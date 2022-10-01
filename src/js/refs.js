import SweetScroll from 'sweet-scroll';
export const refs = {
  headerIndex: document.querySelector('.header-index'),
  headerLibrary: document.querySelector('.header__library'),
  homeBtn: document.querySelector('.menu__home'),
  libraryBtn: document.querySelector('.menu__library'),
  // libraryCurBtn: document.querySelector('current-btn-library'),
  // homeCurBtn: document.querySelector('current-btn-home'),
  searchForm: document.querySelector('#search-form'),
  errorSearch: document.querySelector('.warning-notification'),
  chosenNameBtn: document.querySelector('.search-choice-btn.name'),
  chosenGenreBtn: document.querySelector('.search-choice-btn.genre'),
  header: document.querySelector('.header-index'),
  // myLibrary
  // interface
  // genere
  // movie
  headerEl: document.querySelector('header'),
  pageNavDivEl: document.querySelector('.pagination'),
  prevBtnEl: document.querySelector('.pagination_previousBtn'),
  nextBtnEl: document.querySelector('.pagination_nextBtn'),
  currentPageEl: document.querySelector('.pagination_currentPage'),
  firstPageEl: document.querySelector('.pagination_firstPage'),
  lastPageEl: document.querySelector('.pagination_lastPage'),
  leftPointsEl: document.querySelector('.pagination_leftPoints'),
  rightPointsEl: document.querySelector('.pagination_rightPoints'),
  rightFirstPageEl: document.querySelector('.pagination_rightFirstPage'),
  rightSecondPageEl: document.querySelector('.pagination_rightSecondPage'),
  leftFirstPageEl: document.querySelector('.pagination_leftFirstPage'),
  leftSecondPageEl: document.querySelector('.pagination_leftSecondPage'),
  currentPage: 1,
  totalPages: 1,
  scroller: new SweetScroll({ duration: 6000 }),
  pagSerchQuery: '',
  // footer
  // modalMovie
  openModalMovie: document.querySelector('[data-movie-modal-open]'),
  closeModalMovie: document.querySelector('[data-movie-modal-close]'),
  // modalTeam
};
