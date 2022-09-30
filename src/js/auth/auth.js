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

import { toggleModal } from './modalSingUp';
import { openSingUpBtn } from './modalSingUp';

import 'firebaseui/dist/firebaseui.css';
// import {
//   getDatabase,
//   set,
//   ref,
//   onValue,
//   update,
//   remove,
// } from 'firebase/database';

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { formSingUp, logOutBtn, singUpBtn, body } from './refs';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const database = getDatabase(app);

// регистрация нового пользователя
async function regNewUser(evt) {
  evt.preventDefault();

  const userName = evt.currentTarget.elements.name.value;
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

    const user = userCredential.user;
    singUpBtn.textContent = `Welcome, ${userName}`;
    toggleModal();
    openSingUpBtn.disabled = true;
    logOutBtn.classList.remove('is-hidden');
    console.log(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorMessage) {
      Notify.failure('Password should be at least 6 characters!');
    }
    console.log(error);
  }
}

formSingUp.addEventListener('submit', regNewUser);

// вход зарегистрированного пользователя
