import { refs } from './refs';
refs.langs.addEventListener('change', changeLangs);
let language = null;

function changeLangs() {
  let langs = refs.langs.value;
  localStorage.setItem('lang', langs);

  location.reload();
}
let languages = localStorage.getItem('lang');
if (languages === 'uk') {
  language = 'uk';
}
if (languages === 'en') {
  language = 'en';
}
if (languages === 'spa') {
  language = 'es';
}
changeData();
export { language };

export function changeData() {
  if (language === 'uk') {
    refs.homeBtn.textContent = 'додому';
    refs.homeFirstBtn.textContent = 'додому';
    refs.libraryBtn.textContent = 'бібліотека';
    refs.librarySecondBtn.textContent = 'бібліотека';
    refs.input.placeholder = 'Введіть пошуковий запит';
    refs.errorSearch.textContent =
      'Упс, щось пішло не так. Введіть ваш запит, будь-ласка!';
    refs.chosenNameBtn.textContent = 'іменем';
    refs.chosenGenreBtn.textContent = 'жанром';
    refs.search.textContent = 'Пошук за:';
    refs.prevBtnEl.textContent = 'Назад';
    refs.nextBtnEl.textContent = 'Вперед';
    refs.watchedListBtn.textContent = 'Черга';
    refs.queueListBtn.textContent = 'Вподобайки';

    // refs.watchedBtnAdd.textContent = 'Додати в чергу';
    // refs.watchedBtnRemove.textContent = 'Видалити з черги';
    // refs.queueBtnAdd.textContent = 'Вподобати';
    // refs.queueBtnRemove.textContent = 'Пройшла любов';
  }
}
