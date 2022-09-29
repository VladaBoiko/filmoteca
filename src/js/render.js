import { dataMovieList, dataGenre } from './API/api';
const galleryListEl = document.querySelector('#gallery-list');
const baseUrtlImg = 'https://image.tmdb.org/t/p/original/';
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
  let imgSrc = null;
  const filmList = data.results.map(
    ({ id, title, vote_average, genre_ids, release_date, poster_path }) => {
      // console.log(poster_path);
      if (poster_path) {
        imgSrc = `${baseUrtlImg}${poster_path}`;
      }
      if (poster_path === null) {
        imgSrc =
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgryyjHUbuEM2wTOX4XBVAZr1gXeKZ3Zp4Og&usqp=CAU';
      }
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
  galleryListEl.insertAdjacentHTML('beforeend', filmList.join(''));
}

request();
