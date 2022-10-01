import { onPressEsk } from './modalSingUp';

export const openSingInBtn = document.querySelector('.modal-btn-singIn');

refs = {
  body: document.querySelector('body'),
  backdropSingIn: document.querySelector('.backdrop-singIn-modal'),
  btnCloseSingIn: document.querySelector('[data-modal-close="singIn"]'),
};

const { body, backdropSingIn, btnCloseSingIn } = refs;

export function toggleModalSingIn() {
  backdropSingIn.classList.toggle('is-hidden');
  body.classList.toggle('noscroll');
}

function onClickBackdrop(e) {
  if (e.target.classList.contains('backdrop')) {
    toggleModalSingIn();
    backdropSingIn.removeEventListener('click', onClickBackdrop);
  }
}

export function onClickSingInBtn() {
  toggleModalSingIn();
  window.addEventListener('keydown', onPressEsk);
  backdropSingIn.addEventListener('click', onClickBackdrop);
  btnCloseSingIn.addEventListener('click', toggleModalSingIn);
}
