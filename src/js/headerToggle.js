import { refs } from './refs';
refs.homeBtn.addEventListener('click', switchHeaderHome);
refs.libraryBtn.addEventListener('click', switchHeaderLibrary);

function switchHeaderLibrary() {
  refs.headerIndex.style.display = 'none';
  refs.headerLibrary.style.display = 'block';
}
function switchHeaderHome() {
  refs.headerLibrary.style.display = 'none';
  refs.headerIndex.style.display = 'block';
}
