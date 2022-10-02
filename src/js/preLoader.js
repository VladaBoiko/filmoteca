export const loader = {
  preloader: document.querySelector('.loader'),
  backdrop: this.preloader.closest('.backdrop'),

  hide() {
    const timeOut = setTimeout(() => {
      this.preloader.classList.add('is-hidden');
      this.backdrop.classList.add('is-hidden');
    }, 500);
  },
  show() {
    this.preloader.classList.remove('is-hidden');
    this.backdrop.classList.remove('is-hidden');
  },
};
