import axios from 'axios';
const KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';
const URL = 'https://api.themoviedb.org/';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = URL;

const dataMovieList = async (page = 1, language = 'en-US') => {
  try {
    const server = await axios.get(
      `3/trending/movie/day?api_key=${KEY}&page=${page}&language=${language}`
    );

    const data = await server.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

dataMovieList();
