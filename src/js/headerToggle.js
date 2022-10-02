import { refs } from './refs';
import { renderWatchedList } from './render';
refs.homeBtn.addEventListener('click', switchHeaderHome);
refs.libraryBtn.addEventListener('click', () => {
  switchHeaderLibrary();
  renderWatchedList();
});

function switchHeaderLibrary() {
  refs.headerIndex.classList.add('is-hidden');
  refs.headerLibrary.classList.remove('is-hidden');
  refs.homeGallery.classList.add('visually-hidden');
  refs.libraryGallery.classList.remove('visually-hidden');
  refs.pageNavDivEl.classList.add('pagination--hidden');
}
function switchHeaderHome() {
  refs.headerLibrary.classList.add('is-hidden');
  refs.headerIndex.classList.remove('is-hidden');
  refs.libraryGallery.classList.add('visually-hidden');
  refs.homeGallery.classList.remove('visually-hidden');
  refs.pageNavDivEl.classList.remove('pagination--hidden');
}
// homeGallery: document.querySelector('.home'),
//   libraryGallery: document.querySelector('.watched'),
