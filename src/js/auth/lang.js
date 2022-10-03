import {
  logOutBtn,
  singInBtn,
  modalSingUpBtn,
  modalSingInBtn,
  singIn,
  singUp,
} from './refs.js';

import { language } from '../changeLangs.js';

export function changeLangModalReg() {
  if (language === 'uk') {
    singUp.textContent = 'ДОЄДНАТИСЯ';
    singIn.textContent = 'УВІЙТИ';
    singInBtn.textContent = 'УВІЙТИ';
    logOutBtn.textContent = 'Увійдіть у свій аккаунт!';
    modalSingUpBtn.textContent = 'Доєднуйтесь!';
    modalSingInBtn.textContent = 'Увійти';
  }

  if (language === 'es') {
    singUp.textContent = 'Los registros';
    singIn.textContent = 'INGRESAR';
    singInBtn.textContent = 'INGRESAR';
    logOutBtn.textContent = 'Iniciar sesión en una cuenta!';
    modalSingUpBtn.textContent = 'Los registros!';
    modalSingInBtn.textContent = 'Ingresar';
  }

  if (language === 'en') {
    singUp.textContent = 'SING UP';
    singIn.textContent = 'SING IN';
    singInBtn.textContent = 'SING IN';
    logOutBtn.textContent = ' Log in to your account!';
    modalSingUpBtn.textContent = 'Sing up!';
    modalSingInBtn.textContent = 'Sing in';
  }
}
