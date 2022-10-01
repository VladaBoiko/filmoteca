import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDi-ICz73fxtdr7-RyJz1uHSFQUh0rXdhQ',
  authDomain: 'filmoteka-auth-f095a.firebaseapp.com',
  databaseURL: 'https://filmoteka-auth-f095a-default-rtdb.firebaseio.com',
  projectId: 'filmoteka-auth-f095a',
  storageBucket: 'filmoteka-auth-f095a.appspot.com',
  messagingSenderId: '579941014930',
  appId: '1:579941014930:web:cda5220011d3007db5354b',
};

// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui';

import { toggleModal, openSingUpBtn, onClickSingUp } from './modalSingUp';
// import { openSingUpBtn } from './modalSingUp';
import { toggleModalSingIn } from './modalSingIn';

import 'firebaseui/dist/firebaseui.css';

import {
  getAuth,
  // onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {
  formSingUp,
  formSingIn,
  logOutBtn,
  singUpBtn,
  modalSingUpBtn,
} from './refs';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.dir(auth);

formSingUp.addEventListener('submit', regNewUser);
formSingIn.addEventListener('submit', authUser);
logOutBtn.addEventListener('click', logOut);
modalSingUpBtn.addEventListener('click', () => {
  onClickSingUp();
  toggleModalSingIn();
});

// реєстрація нового користувача
async function regNewUser(evt) {
  evt.preventDefault();

  const email = evt.currentTarget.elements.email.value;
  const password = evt.currentTarget.elements.password.value;

  try {
    // тут еще нужно проверить на сущ. пользователя

    Loading.pulse({
      svgColor: '#ff6b08',
    });
    Loading.remove(250);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    console.log(userCredential.user.displayName);
    const user = userCredential.user;

    if (user !== null) {
      const uid = user.uid;

      singUpBtn.textContent = `Welcome, ${email}`;
      toggleModal();
      openSingUpBtn.disabled = true;
      logOutBtn.classList.remove('is-hidden');
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorMessage) {
      Notify.failure('Password should be at least 6 characters!');
    }
    console.log(error);
  }
}

// вхід зареєстрованого користувача

async function authUser(evt) {
  evt.preventDefault();

  const email = evt.currentTarget.elements.email.value;
  const password = evt.currentTarget.elements.password.value;
  try {
    Loading.pulse({
      svgColor: '#ff6b08',
    });
    Loading.remove(250);

    await signInWithEmailAndPassword(auth, email, password);
    singUpBtn.textContent = `Welcome, ${email}!`;
    toggleModalSingIn();
    openSingUpBtn.disabled = true;
    logOutBtn.classList.remove('is-hidden');
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorMessage) {
      // тут другое предупреждение!!!
      // Notify.failure('Password should be at least 6 characters!');
    }
    console.log(error);
  }
}

// log out

async function logOut() {
  try {
    await signOut(auth);
    Loading.pulse({
      svgColor: '#ff6b08',
    });
    Loading.remove(150);
    logOutBtn.classList.add('is-hidden');
    singUpBtn.textContent = 'SING UP';
    openSingUpBtn.disabled = false;
  } catch (error) {
    console.log(error);
  }
}
