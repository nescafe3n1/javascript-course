'use strict';
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// cached selectors
const bodyE1 = document.body;
const messageE1 = document.querySelector('.message');
const numberE1 = document.querySelector('.number');
const scoreE1 = document.querySelector('.score');
const highscoreE1 = document.querySelector('.highscore');
const guessInputE1 = document.querySelector('.guess');
const checkBtnE1 = document.querySelector('.check');
const againBtnE1 = document.querySelector('.again');



console.log(`=== GAME DEVELOPEMENT: GUESS MY NUMBER ===`);

console.log(`Goal: Build a complete interactive game from scratch`);
console.log(`Focus: DOM manipulation, game state, and user interaction`);

// UI Helpers
function setMessage (text) {
    messageE1.textContent = text;
}
function setNumber(value) {
    numberE1.textContent = value;
}
function setScore(value) {
    scoreE1.textContent = value;
}
function setHighscore(value) {
    highscoreE1.textContent = value;
}
function setBackground(color) {
    bodyE1.style.backgroundColor = color;
}
function disablePlay(disabled) {
    guessInputE1.disabled = disabled;
    checkBtnE1.disabled = disabled;
}
function clearInput() {
    guessInputE1.value = '';
}

// Game State & Reset

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;

function resetGameState () {
    score = START_SCORE;
    secretNumber= Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI () {
    setMessage('Start guessing...');
    setNumber(`?`);
    setScore(score);
    clearInput();
    disablePlay(false);
    setBackground(``);
}

renderInitialUI();

checkBtnE1.addEventListener(`click`, function (){
    const guess = Number(guessInputE1.value);
    if (!guess) return setMessage ("No number!");
    if (guess < MIN_NUMBER || guess > MAX_NUMBER)
        return setMessage (
            `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

    if (guess === secretNumber){
        setMessage (`Correct Number!`);
        setNumber(secretNumber);
        setBackground(`green`);
        if (score > highscore) {
            highscore = score;
            setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return;
}

    setMessage(guess > secretNumber ? `Too high!` : `Too low`);
    score--;
    setScore(score);

    if (score < 1 ) {
        setMessage(`You lost=!`);
        setNumber(secretNumber);
        setBackground(`red`);
        disablePlay(true);
        clearInput();
    }
});

    againBtnE1.addEventListener(`click`, function () { 
        resetGameState();
        renderInitialUI();
    });

window.addEventListener(`keydown`, function (e) { 
    if (e.key === `Enter` && !checkBtnEl.disabled) {
        checkBtnE1.click();
    }
});

againBtnE1.addEventListener(`click`, function () { 
    guessInputE1.focus();
});

// ===== DOM ELEMENT SELECTION - The Foundation =====

// console.log("=== DOM ELEMENT SELECTION ===");

// console.log(messageE1);

// console.log(scoreE1);

// // const guessE1 = document.querySelector(`.guess`);
// // console.log(guessE1);

// console.log(`Current message:`, messageE1.textContent);
// console.log(`Current score:`, scoreE1.textContent);

// // messageE1.textContent = `Hello from JavaScript!`;
// scoreE1.textContent = `20`;

// console.log(`Elements updated!`);

// console.log(`Score Element:`, scoreE1);

// // numberE1.textContent = 15;

// console.log(`Current Highscore:`, highscoreE1.textContent);

// // guessE1.value = 10;

// console.log(`Guess input value:`, guessE1.value);

// ==== Game State Variables ====

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
 console.log(`Secret number:`, secretNumber);

// let score = 20;
// let highscore = 0;

// document.querySelector(`.score`).textContent = score;
// document.querySelector(`.highscore`).textContent = highscore;

// console.log(`Game state initialized!`);

// // Practice Game State
// let playerName = `Shem`;
// let attempts = 0;
// let gameActive = true;
// let easySecret = Math.trunc(Math.random() * 10) + 1;

// console.log(`Player:`, playerName);
// console.log(`Attempts:`, attempts);
// console.log(`Game active:`, gameActive);
// console.log (`Easy secret number:`, easySecret);

// Basic Game Logic

document.querySelector(`.check`).addEventListener(`click`, function (){
    console.log(`Check button clicked!`);

    const guess = Number(document.querySelector(`.guess`).value);
    console.log(`Player guessed:`, guess);

    if (!guess) {
        document.querySelector(`.message`).textContent = `No number!`;
        return;
    }

    if (guess < 1 || guess > 20) {
        document.querySelector(`.message`).textContent = `Number must be between 1 and 20`;
        return;
    }

    if (guess === secretNumber) {
        console.log(`Correct guess!`);
        // document.querySelector(`.message`).textContent = `Correct Number!`;
        document.querySelector(`.number`).textContent = secretNumber;
        document.body.style.backgroundColor = `green`;
        if (score > highscore) {
            highscore = score;
            document.querySelector(`.highscore`).textContent = highscore;
            document.querySelector(`.message`).textContent = "You have won!"
            document.querySelector(`.guess`).disabled = true;
            document.querySelector(`.check`).disabled = true;
        }
    } else if (guess > secretNumber) {
        console.log(`Too high!`);
        document.querySelector(`.message`).textContent = `Too high`;
        score--;
        document.querySelector(`.score`).textContent = score;
        if (score < 1) {
            document.querySelector(`.message`).textContent = "You have lost";
            document.querySelector(`.number`).textContent = secretNumber;
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
            document.body.style.backgroundColor = `red`;
        }
    } else if (guess < secretNumber) {
        console.log(`Too low`);
        document.querySelector(`.message`).textContent = `Too low`;
        score--;
        document.querySelector(`.score`).textContent = score;
        if (score < 1) {
            document.querySelector(`.message`).textContent = "You have lost";
            document.querySelector(`.number`).textContent = secretNumber;
            document.querySelector(`.guess`).disabled = true;
            document.querySelector(`.check`).disabled = true;
            document.body.style.backgroundColor = `red`;
        }
    }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
    console.log(`Again button is working`);
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    console.log(`Your new secret number after restart`, secretNumber);
    document.querySelector(`.message`).textContent = `Start guessing...`;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.guess`).value = ``;
    document.querySelector(`.guess`).disabled = false;
    document.querySelector(`.check`).disabled = false;
    document.body.style.backgroundColor = ``;
})

// Constants and Selectors

