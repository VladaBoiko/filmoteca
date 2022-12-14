export const modalHandle = (modalName, container) => {
  const body = document.querySelector('body');
  const modal = document.querySelector(`[data-modal="${modalName}"]`);
  const backdrop = modal.closest('.backdrop');
  const closeModalBtn = document.querySelector(
    `[data-modal-close="${modalName}"]`
  );

  const openModal = () => {
    backdrop.classList.remove('is-hidden');
    modal.classList.remove('is-hidden');
    body.classList.add('noscroll');
    closeModalBtn && closeModalBtn.addEventListener('click', closeModal);
  };

  const closeModal = () => {
    backdrop.classList.add('is-hidden');
    modal.classList.add('is-hidden');
    modalName !== 'movie-trailer' && body.classList.remove('noscroll');
    closeModalBtn && closeModalBtn.removeEventListener('click', closeModal);
  };

  const onEscKeyPress = evt => {
    if (evt.code === 'Escape') {
      closeModal();
      window.removeEventListener('keydown', onEscKeyPress);
      handleVideo('stopVideo');
    }
  };

  const onBackdropClick = evt => {
    if (evt.target.classList.contains('backdrop')) {
      closeModal();
      backdrop.removeEventListener('click', onBackdropClick);
      handleVideo('stopVideo');
    }
  };

  const handleVideo = operation => {
    const iframe = document.querySelector('.modal-trailer__youtube');
    iframe &&
      iframe.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: operation,
        }),
        '*'
      );
  };

  openModal();
  window.addEventListener('keydown', onEscKeyPress);
  backdrop.addEventListener('click', onBackdropClick);
  closeModalBtn && closeModalBtn.addEventListener('click', closeModal);
};
