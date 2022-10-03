import {
  logOutBtn,
  singInBtn,
  modalSingUpBtn,
  modalSingInBtn,
  singIn,
  singUp,
  formSingUpInputEmail,
  formSingUpInputPassword,
  formSingInInputEmail,
  formSingInInputPassword,
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
    formSingUpInputEmail.placeholder = 'Введіть електронну адресу';
    formSingInInputEmail.placeholder = 'Введіть електронну адресу';
    formSingUpInputPassword.placeholder = 'Введіть ваш пароль';
    formSingInInputPassword.placeholder = 'Введіть ваш пароль';
  }

  if (language === 'es') {
    singUp.textContent = 'Los registros';
    singIn.textContent = 'INGRESAR';
    singInBtn.textContent = 'INGRESAR';
    logOutBtn.textContent = 'Iniciar sesión en una cuenta!';
    modalSingUpBtn.textContent = 'Los registros!';
    modalSingInBtn.textContent = 'Ingresar';
    formSingUpInputEmail.placeholder = 'Introduce tu correo electrónico';
    formSingInInputEmail.placeholder = 'Introduce tu correo electrónico';
    formSingUpInputPassword.placeholder = 'Ingresa tu contraseña';
    formSingInInputPassword.placeholder = 'Ingresa tu contraseña';
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
