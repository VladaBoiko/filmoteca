import {
  body,
  backdropSingIn,
  btnCloseSingIn,
  modalSingUpBtn,
  singInBtn,
} from './refs.js';

import { onPressEsk, onClickSingUp, resetForm } from './modalSingUp';
export function toggleModalSingIn() {
  backdropSingIn.classList.toggle('is-hidden');
  body.classList.toggle('noscroll');
  resetForm();
}

singInBtn.addEventListener('click', onClickSingInBtn);

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
  modalSingUpBtn.addEventListener('click', onSingUp);
}

function onSingUp() {
  toggleModalSingIn();
  onClickSingUp();
  modalSingUpBtn.removeEventListener('click', onSingUp);
}
