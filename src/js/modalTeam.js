const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const isVisible = 'is-visible';

// console.log('openEls :>> ', openEls);
// console.log('closeEls :>> ', closeEls);
for (const el of openEls) {
  el.addEventListener('click', function () {
    const modalId = this.dataset.open;
    document.body.style.overflow = 'hidden';
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener('click', function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    document.body.style.overflow = 'visible';
  });
}

document.addEventListener('click', e => {
  if (e.target === document.querySelector('.modal-footer.is-visible')) {
    document
      .querySelector('.modal-footer.is-visible')
      .classList.remove(isVisible);
    document.body.style.overflow = 'visible';
  }
});

document.addEventListener('keyup', e => {
  // if we press the ESC
  if (
    e.code === 'Escape' &&
    document.querySelector('.modal-footer.is-visible')
  ) {
    document
      .querySelector('.modal-footer.is-visible')
      .classList.remove(isVisible);
    document.body.style.overflow = 'visible';
  }
});
const onBackdropClick = evt => {
  if (
    evt.target.classList.contains('modal-footer') &&
    document.querySelector('.modal-footer.is-visible')
  ) {
    document
      .querySelector('.modal-footer.is-visible')
      .classList.remove(isVisible);
    document.body.style.overflow = 'visible';
  }
};
// const closeModal = () => {
//   backdrop.classList.add('is-hidden');
//   modal.classList.add('is-hidden');
//   modalName !== 'movie-trailer' && body.classList.remove('noscroll');
//   closeModalBtn && closeModalBtn.removeEventListener('click', closeModal);
// };

// const onEscKeyPress = evt => {
//   if (evt.code === 'Escape') {
//     closeModal();
//     window.removeEventListener('keydown', onEscKeyPress);
//     handleVideo('stopVideo');
//   }
// };
