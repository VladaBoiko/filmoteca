import { dataMovieList, dataGenre } from './API/api';
const galleryListEl = document.querySelector('#gallery-list');
const page = 1;
const language = 'en-US';
async function getAllGenres(language) {
  return await dataGenre(language);
}

async function request() {
  const data = await dataMovieList(page, language);
  renderFilmCards(data);
}

async function renderFilmCards(data) {
  const genresData = (await getAllGenres(language)).genres;
  const filmList = data.results.map(
    ({ title, vote_average, genre_ids, release_date, poster_path }) => {
      const allGenres = [];
      genresData
        .map(genre => {
          if (genre_ids.includes(genre.id)) {
            allGenres.push(genre.name);
          }
        })
        .join(', ');
      //   const genresList = genre_ids
      // .map(idNum => {
      //   //   for (const obj of genresData) {
      //   //     if (idNum === obj.id) {
      //   //       return (id = obj.name);
      //   //     }
      //   //   }
      //   for (const obj of genresData) {
      //     if (idNum === obj.id) {
      //       return (id = obj.name);
      //     }
      //   }
      // })
      // .join(', ');
      return `<li class="card__item">
    <a class="card__link" href = "">
        <img class="card__img"
        src="https://image.tmdb.org/t/p/original/${poster_path}"
        alt=""
    />
    
    <h2 class="card__title">${title}</h2>
    <div class="card__text">
        <p class="card__info">${allGenres} | ${release_date
        .split('', 4)
        .join('')}</p>
        <div class="card__rating">${vote_average}</div>
    </div>
    </a>

</li>`;
    }
  );
  galleryListEl.insertAdjacentHTML('beforeend', filmList.join(''));
}
request();
