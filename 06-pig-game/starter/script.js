'use strict';

let scores, currentScore, activePlayer, playing;

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      switchPlayer();
    }
  }
});

const btnNew = document.querySelector('.btn--new');

btnNew.addEventListener('click', init);

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const btnHold = document.querySelector('.btn--hold');

btnHold.addEventListener('click', function () {
  if (playing && currentScore > 0) {
    scores[activePlayer] += currentScore;
    
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

console.log('Scores:', scores);
console.log('Current Score:', currentScore);
console.log('Active Player:', activePlayer);
console.log('Playing:', playing);
console.log('Player 0 active:', player0El.classList.contains('player--active'));
console.log('Player 1 active:', player1El.classList.contains('player--active'));
console.log('Current scores:', scores);
console.log('Win condition met:', scores[activePlayer] >= 100);
console.log('Game playing:', playing);
console.log('Game reset - scores:', scores);
console.log('Game reset - playing:', playing);
console.log('Game reset - active player:', activePlayer);