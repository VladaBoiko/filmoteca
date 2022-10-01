import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebaseui/dist/firebaseui.css';

import {
  getAuth,
  // onAuthStateChanged,
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

// import firebase from 'firebase/compat/app';
// import * as firebaseui from 'firebaseui';

import { toggleModal, resetForm } from './modalSingUp';

import { toggleModalSingIn } from './modalSingIn';

import { formSingUp, formSingIn, logOutBtn, singUpBtn } from './refs';

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

  if (password.length < 6) {
    Notify.failure('Password should be at least 6 characters!');
    return;
  }

  try {
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
    const indexInEmail = email.indexOf('@');
    const userName = email.slice(0, indexInEmail).toUpperCase();
    const uid = user.uid;

    singUpBtn.textContent = `Welcome, ${userName}`;
    toggleModal();
    singUpBtn.disabled = true;
    logOutBtn.classList.remove('is-hidden');
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
  try {
    Loading.pulse({
      svgColor: '#ff6b08',
    });
    Loading.remove(250);

    await signInWithEmailAndPassword(auth, email, password);
    resetForm();
    const indexInEmail = email.indexOf('@');
    const userName = email.slice(0, indexInEmail).toUpperCase();

    singUpBtn.textContent = `Welcome, ${userName}!`;
    toggleModalSingIn();
    singUpBtn.disabled = true;
    logOutBtn.classList.remove('is-hidden');
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
    logOutBtn.classList.add('is-hidden');
    singUpBtn.textContent = 'SING UP';
    singUpBtn.disabled = false;
  } catch (error) {
    console.log(error);
  }
}
