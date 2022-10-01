import { onClickSingInBtn } from './modalSingIn';
import {
  body,
  formSingUpInputEmail,
  formSingUpInputPassword,
  formSingInInputEmail,
  formSingInInputPassword,
  singUpBtn,
  singInBtn,
  backdropSingUp,
  btnCloseSingUp,
} from './refs.js';

singUpBtn.addEventListener('click', onClickSingUp);

export function onClickSingUp() {
  toggleModal();
  window.addEventListener('keydown', onPressEsk);
  backdropSingUp.addEventListener('click', onClickBackdrop);
  btnCloseSingUp.addEventListener('click', toggleModal);
  singInBtn.addEventListener('click', onSingIn);
}

function onSingIn() {
  toggleModal();
  onClickSingInBtn();
  singInBtn.removeEventListener('click', onSingIn);
}

export function toggleModal() {
  backdropSingUp.classList.toggle('is-hidden');
  body.classList.toggle('noscroll');
  resetForm();
}

export function onPressEsk(e) {
  if (e.code === 'Escape') {
    toggleModal();
    window.removeEventListener('keydown', onPressEsk);
  }
}

function onClickBackdrop(e) {
  if (e.target.classList.contains('backdrop')) {
    toggleModal();
    backdropSingUp.removeEventListener('click', onClickBackdrop);
  }
}

export function resetForm() {
  formSingUpInputEmail.value = '';
  formSingUpInputPassword.value = '';
  formSingInInputEmail.value = '';
  formSingInInputPassword.value = '';
}
