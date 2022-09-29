export const modalHandle = modalName => {
  const body = document.querySelector('body');
  const backdrop = document.querySelector('.backdrop');
  const modal = document.querySelector(`[data-modal="${modalName}"]`);
  const closeModalBtn = document.querySelector(`[data-modal="${modalName}"]`);

  const toggleModal = () => {
    backdrop.classList.toggle('is-hidden');
    modal.classList.toggle('is-hidden');
    body.classList.toggle('noscroll');
    closeModalBtn.removeEventListener('click', toggleModal);
  };

  const onEscKeyPress = evt => {
    if (evt.code === 'Escape') {
      toggleModal();
      window.removeEventListener('keydown', onEscKeyPress);
    }
  };

  const onBackdropClick = evt => {
    if (evt.target.classList.contains('backdrop')) {
      toggleModal();
      backdrop.removeEventListener('click', onBackdropClick);
    }
  };

  toggleModal();
  window.addEventListener('keydown', onEscKeyPress);
  backdrop.addEventListener('click', onBackdropClick);
  closeModalBtn.addEventListener('click', toggleModal);
};
