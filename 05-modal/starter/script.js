'use strict';

console.log('=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===');

console.log('Modal project ready!');

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const btnCloseModalEl = document.querySelector('.close-modal');
const btnsOpenModalEl = document.querySelectorAll('.show-modal');
console.log('Open buttons:', btnsOpenModalEl.length);

let lastFocusedButton = null;

const openModal = function () {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
  modalEl.focus();
  lastFocusedButton = document.activeElement;
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
  if (lastFocusedButton) {
    lastFocusedButton.focus();
  }
};

btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

console.log('=== MODAL DEVELOPMENT: KEYBOARD EVENTS & ADVANCED UX ===');

console.log('Keyboard events test');

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

document.addEventListener('keydown', function (e) {
  console.log(
    'Key pressed:',
    e.key,
    'Modal visible:',
    !modalEl.classList.contains('hidden')
  );

  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');
btnCloseModalEl.setAttribute('aria-label', 'Close modal');