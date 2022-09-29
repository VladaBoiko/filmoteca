import { refs } from '../new/refs';
import { dataSearch } from '../API/api';

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();
  console.log(refs.searchForm);
  const searchQuery = evt.currentTarget.query.value;
  console.log(searchQuery);
  dataSearch(searchQuery);
}
