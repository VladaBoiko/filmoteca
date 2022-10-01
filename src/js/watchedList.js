const watchedListBtn = document.getElementById('js-WatchedButton');
const queueListBtn = document.getElementById('js-QueueButton');
const parsedWatched = JSON.parse(localStorage.getItem('watched'));
const parsedQueue = JSON.parse(localStorage.getItem('queue'));

watchedListBtn.addEventListener('click', renderWatchedList);
queueListBtn.addEventListener('click', renderQueueList);

function renderWatchedList() {
  console.log(parsedWatched);
}

function renderQueueList() {
  console.log(parsedQueue);
}
