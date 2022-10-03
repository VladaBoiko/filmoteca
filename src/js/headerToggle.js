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
  // refs.footer.style.position = 'fixed';
  // refs.footer.style.bottom = '0';
  // refs.footer.style.width = '100%';
  refs.pageNavDivEl.classList.add('visually-hidden');
  refs.watchedListBtnInput.checked = true;
}
function switchHeaderHome() {
  refs.headerLibrary.classList.add('is-hidden');
  refs.headerIndex.classList.remove('is-hidden');
  refs.libraryGallery.classList.add('visually-hidden');
  refs.homeGallery.classList.remove('visually-hidden');
  // refs.footer.style.position = 'relative';
  refs.pageNavDivEl.classList.remove('visually-hidden');
}
// homeGallery: document.querySelector('.home'),
//   libraryGallery: document.querySelector('.watched'),
