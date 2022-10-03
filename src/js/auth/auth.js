import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDi-ICz73fxtdr7-RyJz1uHSFQUh0rXdhQ',
  authDomain: 'filmoteka-auth-f095a.firebaseapp.com',
  databaseURL: 'https://filmoteka-auth-f095a-default-rtdb.firebaseio.com',
  projectId: 'filmoteka-auth-f095a',
  storageBucket: 'filmoteka-auth-f095a.appspot.com',
  messagingSenderId: '579941014930',
  appId: '1:579941014930:web:cda5220011d3007db5354b',
};

import { toggleModal } from './modalSingUp';

import { toggleModalSingIn } from './modalSingIn';

import { formSingUp, formSingIn, logOutBtn, singInBtn } from './refs';

import { saveUser, clearUserOnLocalStorage } from './localStorage';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

formSingUp.addEventListener('submit', regNewUser);
formSingIn.addEventListener('submit', authUser);
logOutBtn.addEventListener('click', logOut);

// реєстрація нового користувача
async function regNewUser(evt) {
  evt.preventDefault();

  const email = evt.currentTarget.elements.email.value.trim();
  const password = evt.currentTarget.elements.password.value.trim();
  const indexInEmail = email.indexOf('@');
  const userName = email.slice(0, indexInEmail).toUpperCase();

  if (password.length < 6) {
    Notify.failure('Password should be at least 6 characters!');
    return;
  }

  try {
    Loading.pulse({
      svgColor: '#ff6b08',
    });
    Loading.remove(250);

    await createUserWithEmailAndPassword(auth, email, password);

    saveUser(userName, email, password);

    singInBtn.textContent = `Welcome, ${userName}`;
    toggleModal();
    singInBtn.disabled = true;
    logOutBtn.disabled = false;
    logOutBtn.textContent = 'LOG OUT';
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    Notify.failure(`${errorMessage}`);
  }
}

// вхід зареєстрованого користувача

async function authUser(evt) {
  evt.preventDefault();

  const email = evt.currentTarget.elements.email.value.trim();
  const password = evt.currentTarget.elements.password.value.trim();
  const indexInEmail = email.indexOf('@');
  const userName = email.slice(0, indexInEmail).toUpperCase();

  try {
    Loading.pulse({
      svgColor: '#ff6b08',
    });
    Loading.remove(250);

    await signInWithEmailAndPassword(auth, email, password);

    saveUser(userName, email, password);
    singInBtn.textContent = `Welcome, ${userName}!`;
    singInBtn.disabled = true;
    logOutBtn.disabled = false;
    logOutBtn.textContent = 'LOG OUT';
    toggleModalSingIn();
  } catch (error) {
    Notify.failure('Oooops! User not found or wrong password:( Try again!');
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
    logOutBtn.disabled = true;
    logOutBtn.textContent = 'Log in to your account!';
    singInBtn.textContent = 'SING IN';
    singInBtn.disabled = false;
    clearUserOnLocalStorage();
  } catch (error) {
    console.log(error);
  }
}
