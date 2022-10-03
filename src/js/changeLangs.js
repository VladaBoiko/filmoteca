import { refs } from './refs';
refs.langs.addEventListener('change', changeLangs);
let language = 'en';

function changeLangs() {
  let langs = refs.langs.value;
  localStorage.setItem('lang', langs);

  location.reload();
}
let languages = localStorage.getItem('lang');
if (languages === 'uk') {
  language = 'uk';
}
if (languages === 'en') {
  language = 'en';
}
if (languages === 'spa') {
  language = 'es';
}
const modalBtn = {
  addWatch: null,
  addLib: null,
  removeWatch: null,
  removeLib: null,
};
const authModal = {
  signIn: null,
  signUp: null,
  logIn: null,
  logOut: null,
  hello: null,
  come: null,
  notifiPass: null,
  notifiErorr: null,
};
changeData();
export { language };

export function changeData() {
  if (language === 'uk') {
    refs.langs.value = 'uk';
    refs.homeBtn.textContent = 'додому';
    refs.homeFirstBtn.textContent = 'додому';
    refs.libraryBtn.textContent = 'бібліотека';
    refs.librarySecondBtn.textContent = 'бібліотека';
    refs.input.placeholder = 'Введіть пошуковий запит';
    refs.errorSearch.textContent =
      'Упс, щось пішло не так. Введіть ваш запит, будь-ласка!';
    refs.chosenNameBtn.textContent = 'іменем';
    refs.chosenGenreBtn.textContent = 'жанром';
    refs.search.textContent = 'Пошук за:';
    refs.prevBtnEl.textContent = 'Назад';
    refs.nextBtnEl.textContent = 'Вперед';
    refs.watchedListBtn.textContent = 'Черга';
    refs.queueListBtn.textContent = 'Вподобайки';
    modalBtn.addWatch = 'Додати в чергу';
    modalBtn.addLib = 'Вподобати';
    modalBtn.removeWatch = 'Видалити з черги';
    modalBtn.removeLib = 'Пройшла любов';
    authModal.signIn = 'Увійти';
    // authModal.signIn = 'Авторизуватися';
    authModal.signUp = 'Зареєструватися';
    authModal.logIn = 'Увійти';
    authModal.logOut = 'Вийти';
    authModal.hello = 'Вітаємо, ';
    authModal.come = 'Увійдіть у свій аккаунт!';
    authModal.notifiPass = 'Пароль повинен містити мінімум 6 символів!';
    authModal.notifiErorr =
      'Упс! Ви ввели некоректний логін або пароль, спробуйте ще раз!';
    refs.modalRegTitle.textContent = 'Реєстрація';
    refs.modalRegAlready.textContent = 'Є аккаунт?';

    refs.modalLogTitle.textContent = 'Авторизація';
    refs.modalLogAlready.textContent = 'Не зареєстровані?';
  }
  if (language === 'es') {
    refs.langs.value = 'spa';
    refs.homeBtn.textContent = 'página de inicio';
    refs.homeFirstBtn.textContent = 'página de inicio';
    refs.libraryBtn.textContent = 'biblioteca';
    refs.librarySecondBtn.textContent = 'biblioteca';
    refs.input.placeholder = 'La búsqueda de mapas';
    refs.errorSearch.textContent = 'Algo salió mal =(';
    refs.chosenNameBtn.textContent = 'nombre';
    refs.chosenGenreBtn.textContent = 'género';
    refs.search.textContent = 'Búsqueda en:';
    refs.prevBtnEl.textContent = 'Detrás';
    refs.nextBtnEl.textContent = 'Delante';
    refs.watchedListBtn.textContent = 'Vistos';
    refs.queueListBtn.textContent = 'Agradó';
    modalBtn.addWatch = 'Agregar vistos';
    modalBtn.addLib = 'Agregar agradó';
    modalBtn.removeWatch = 'Eliminar vistos';
    modalBtn.removeLib = 'Eliminar agradó';
    // authModal.signIn = 'Autorizar que';
    authModal.signUp = 'Los registros';
    authModal.logIn = 'Ingresar';
    authModal.logOut = 'Salir';
    authModal.hello = 'Hola, ';
    authModal.come = 'Iniciar sesión en una cuenta!';
    authModal.notifiPass = 'La frase de paso es demasiado corta!';
    authModal.notifiErorr = 'Mala contraseña intentar de nuevo!';
    refs.modalRegTitle.textContent = 'Los registros';
    refs.modalRegAlready.textContent = 'Tiene una cuenta?';

    refs.modalLogTitle.textContent = 'Autorizar que';
    refs.modalLogAlready.textContent = 'Autorizar?';
  }
  if (language === 'en') {
    refs.langs.value = 'en';
    modalBtn.addWatch = 'add to Watched';
    modalBtn.addLib = 'add to queue';
    modalBtn.removeWatch = 'remove from Watched';
    modalBtn.removeLib = 'remove from queue';
    authModal.hello = 'Welcome, ';
    authModal.come = ' Log in to your account!';
    authModal.logIn = 'SING IN';
    authModal.logOut = 'LOG OUT';
    authModal.notifiPass = 'Password must have at least 6 characters!';
    authModal.notifiErorr =
      'Ooops..You entered an incorrect login or password, try again!';
  }
}
export { modalBtn, authModal };
