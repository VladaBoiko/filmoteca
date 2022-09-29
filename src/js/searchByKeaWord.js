import { refs } from './refs';
import { dataSearch, dataGenre } from './API/api';
import Notiflix from 'notiflix';
const baseUrtlImg = 'https://image.tmdb.org/t/p/original/';
const page = 1;
const language = 'en-US';
refs.searchForm.addEventListener('submit', onSearch);
const galleryBySearch = document.querySelector('#gallery-list');
async function getAllGenres(language) {
  return await dataGenre(language);
}

async function onSearch(evt) {
  evt.preventDefault();
  console.log(refs.searchForm);
  const searchQuery = evt.currentTarget.query.value.trim();
  console.log(searchQuery);
  const data = await dataSearch(searchQuery, language, page);
  console.log(data);
  renderFilmCards(data);
  refs.searchForm.reset();
  if (!searchQuery) {
    Notiflix.Notify.failure(`Oops, the search is empty`);
    return;
  }

  if (data.total_results > 0) {
    Notiflix.Notify.success(`Success! We've found ${data.total_results}`);
  }

  if (data.total_results === 0) {
    Notiflix.Notify.warning('Sorry! The search has no results');
  }
}

async function renderFilmCards(data) {
  const genresData = (await getAllGenres(language)).genres;
  const filmList = data.results.map(
    ({
      id,
      title,
      vote_average,
      genre_ids,
      release_date = 'un',
      poster_path,
    }) => {
      const allGenres = [];
      let imgSrc = null;
      if (poster_path) {
        imgSrc = `${baseUrtlImg}${poster_path}`;
      }
      if (poster_path === null) {
        imgSrc =
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgryyjHUbuEM2wTOX4XBVAZr1gXeKZ3Zp4Og&usqp=CAU';
      }

      genresData
        .map(genre => {
          if (genre_ids.includes(genre.id)) {
            allGenres.push(genre.name);
          }
        })
        .join(', ');
      return `<li data-movie-id="${id}" class="card__item">
    <a class="card__link" href = "">
        <img class="card__img"
        src="${imgSrc}"
        alt=""
    />

    <h2 class="card__title">${title}</h2>
    <div class="card__text">
        <p class="card__info">${allGenres} | ${release_date
        .split('', 4)
        .join('')}</p>
        <div class="card__rating">${vote_average
          .toString()
          .split('', 3)
          .join('')}</div>
    </div>
    </a>

</li>`;
    }
  );
  galleryBySearch.innerHTML = filmList.join('');
}
