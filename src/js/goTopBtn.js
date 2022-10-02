import throttle from 'lodash.throttle';
import { refs } from './refs';

window.addEventListener('scroll', throttle(btnVisibility, 1500));

refs.goTopBtn.addEventListener('click', () => {
  refs.scroller.to('header');
});

function btnVisibility() {
  if (!(window.innerWidth > 1279)) {
    return;
  }
  if (window.pageYOffset > 1000) {
    refs.goTopBtn.style.display = 'block';
  } else {
    refs.goTopBtn.style.display = 'none';
  }
}
