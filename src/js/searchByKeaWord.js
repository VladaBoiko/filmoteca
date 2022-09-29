import { refs } from './refs';
import { dataSearch } from './API/api';
import Notiflix from 'notiflix';

refs.searchForm.addEventListener('submit', onSearch);

async function onSearch(evt) {
  evt.preventDefault();
  console.log(refs.searchForm);
  const data = await dataSearch(searchQuery);
  check(data);
  const searchQuery = evt.currentTarget.query.value.trim();
  if (!searchQuery) {
    Notiflix.Notify.failure(`Oops, the search is empty`);
    return;
  }
  console.log(searchQuery);
}

function check(data) {
  console.log(data);
}
