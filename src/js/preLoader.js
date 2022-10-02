// import '../sass/index.scss';
export const loader = {
  preLoader: document.querySelector('.loader'),
  backdrop: document.querySelector('.backdrop__loader'),

  hide() {
    setTimeout(() => {
      this.preLoader.classList.add('is-hidden');
      this.backdrop.classList.add('is-hidden');
    }, 800);
  },
  show() {
    this.preLoader.classList.remove('is-hidden');
    this.backdrop.classList.remove('is-hidden');
  },
};
