import { onClickSingInBtn, openSingInBtn } from './modalSingIn';

refs = {
  openSingUpBtn: document.querySelector('[data-modal-open="singUp"]'),
  body: document.querySelector('body'),
  backdropSingUp: document.querySelector('.backdrop-reg-modal'),
  btnCloseSingUp: document.querySelector('[data-modal-close="reg"]'),
};

export const { openSingUpBtn, body, backdropSingUp, btnCloseSingUp } = refs;

openSingUpBtn.addEventListener('click', onClickSingUp);

export function onClickSingUp() {
  toggleModal();
  window.addEventListener('keydown', onPressEsk);
  backdropSingUp.addEventListener('click', onClickBackdrop);
  btnCloseSingUp.addEventListener('click', toggleModal);
  openSingInBtn.addEventListener('click', () => {
    toggleModal();
    onClickSingInBtn();
  });
}

export function toggleModal() {
  backdropSingUp.classList.toggle('is-hidden');
  body.classList.toggle('noscroll');
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
