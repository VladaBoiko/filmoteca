import { singInBtn, logOutBtn } from './refs';

export function saveUser(userName, email, password) {
  const formData = {
    userName,
    email,
    password,
  };
  localStorage.setItem('user', JSON.stringify(formData));
}

function checkLocalStorage() {
  const isLocalStorage = localStorage.getItem('user');
  const userData = JSON.parse(isLocalStorage);

  if (!isLocalStorage) {
    return;
  }

  singInBtn.textContent = `Welcome, ${userData.userName}`;
  singInBtn.disabled = true;
  logOutBtn.disabled = false;
}

checkLocalStorage();

export function clearUserOnLocalStorage() {
  localStorage.removeItem('user');
}
