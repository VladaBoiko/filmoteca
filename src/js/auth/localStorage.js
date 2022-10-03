import { singInBtn, logOutBtn } from './refs';
import { authModal } from '../changeLangs';

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

  singInBtn.textContent = `${authModal.hello} ${userData.userName}`;
  singInBtn.disabled = true;
  logOutBtn.disabled = false;
  logOutBtn.textContent = `${authModal.logOut}`;
}

checkLocalStorage();

export function clearUserOnLocalStorage() {
  localStorage.removeItem('user');
}
