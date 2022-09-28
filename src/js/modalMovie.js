import { refs } from './refs';

export const movieModal = () => {
  console.log('movieModal');
  const body = document.querySelector('body');
  const backDropMovie = document.querySelector('[data-movie-modal]');

  const toggleMovieModal = () => {
    backDropMovie.classList.toggle('is-hidden');
    body.classList.toggle('noscroll');
    console.log('click');
  };
  const onEscKeyPress = evt => {
    if (evt.code === 'Escape') {
      toggleMovieModal();
    }
  };

  refs.openModalMovie.addEventListener('click', toggleMovieModal);
  refs.closeModalMovie.addEventListener('click', toggleMovieModal);
};
