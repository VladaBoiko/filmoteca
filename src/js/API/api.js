import axios from 'axios';
const KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';
const URL = 'https://api.themoviedb.org/';
export const IMG_URL_342 = 'https://image.tmdb.org/t/p/w342';
export const IMG_URL_500 = 'https://image.tmdb.org/t/p/w500';
export const IMG_URL_780 = 'https://image.tmdb.org/t/p/w780';
export const IMG_URL_ORIGINAL = 'https://image.tmdb.org/t/p/original';
import emptyImg from '../../images/no-image.jpg';
export const emptyImge = emptyImg;
import { language } from '../changeLangs';
axios.defaults.baseURL = URL;

// Загальна інформація про фільми
export const dataMovieList = async (page = 1) => {
  try {
    const server = await axios.get(
      `3/trending/movie/day?api_key=${KEY}&page=${page}&language=${language}`
    );

    const data = await server.data;

    return data;
  } catch (error) {
    console.error(error);
  }
};

// пошук по ключовому слову
export const dataSearch = async (name, page = 1) => {
  try {
    const server = await axios.get(
      `3/search/movie?api_key=${KEY}&language=${language}&query=${name}&page=${page}&include_adult=false`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// список усіх жанрів
export const dataGenre = async () => {
  try {
    const server = await axios.get(
      `3/genre/movie/list?api_key=${KEY}&language=${language}`
    );

    const data = await server.data;

    return data;
  } catch (error) {
    console.error(error);
  }
};

// Повна інформація про фільм
export const dataMovie = async id => {
  try {
    const server = await axios.get(
      `3/movie/${id}?api_key=${KEY}&language=${language}`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Список акторів
export const dataAuthors = async id => {
  try {
    const server = await axios.get(
      `3/movie/${id}/credits?api_key=${KEY}&language=${language}`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// пошук фільмів по актору
export const dataAuthorMovie = async id => {
  try {
    const server = await axios.get(
      `3/person/${id}/movie_credits?api_key=${KEY}&language=${language}`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Трейлер
export const dataTrailer = async id => {
  try {
    const server = await axios.get(`3/movie/${id}/videos?api_key=${KEY}`);
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
// пошук по жанру
export const dataByGenres = async (
  genreId = 28,
  language = 'en-US',
  page = 1
) => {
  try {
    const server = await axios.get(
      `3/discover/movie?api_key=${KEY}&language=${language}&page=${page}&with_genres=${genreId}`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
