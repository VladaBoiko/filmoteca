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
  refs.homeGallery.classList.add('is-hidden');
  refs.libraryGallery.classList.remove('is-hidden');
}
function switchHeaderHome() {
  refs.headerLibrary.classList.add('is-hidden');
  refs.headerIndex.classList.remove('is-hidden');
  refs.libraryGallery.classList.add('is-hidden');
  refs.homeGallery.classList.remove('is-hidden');
}
// homeGallery: document.querySelector('.home'),
//   libraryGallery: document.querySelector('.watched'),
