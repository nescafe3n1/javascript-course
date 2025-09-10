'use strict';

console.log(`=== GAME DEVELOPEMENT: GUESS MY NUMBER ===`);

console.log(`Goal: Build a complete interactive game from scratch`);
console.log(`Focus: DOM manipulation, game state, and user interaction`);


// ===== DOM ELEMENT SELECTION - The Foundation =====

console.log("=== DOM ELEMENT SELECTION ===");

const messageE1 = document.querySelector(`.message`);
console.log(messageE1);

const scoreE1 = document.querySelector(`.score`);
console.log(scoreE1);

// const guessE1 = document.querySelector(`.guess`);
// console.log(guessE1);

console.log(`Current message:`, messageE1.textContent);
console.log(`Current score:`, scoreE1.textContent);

// messageE1.textContent = `Hello from JavaScript!`;
scoreE1.textContent = `20`;

console.log(`Elements updated!`);

console.log(`Score Element:`, scoreE1);

const numberE1 = document.querySelector(`.number`);
// numberE1.textContent = 15;

const highscoreE1 = document.querySelector(`.highscore`);
console.log(`Current Highscore:`, highscoreE1.textContent);

const guessE1 = document.querySelector(`.guess`);
// guessE1.value = 10;

console.log(`Guess input value:`, guessE1.value);

// ==== Game State Variables ====

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Secret number:`, secretNumber);

let score = 20;
let highscore = 0;

document.querySelector(`.score`).textContent = score;
document.querySelector(`.highscore`).textContent = highscore;

console.log(`Game state initialized!`);

// Practice Game State
let playerName = `Shem`;
let attempts = 0;
let gameActive = true;
let easySecret = Math.trunc(Math.random() * 10) + 1;

console.log(`Player:`, playerName);
console.log(`Attempts:`, attempts);
console.log(`Game active:`, gameActive);
console.log (`Easy secret number:`, easySecret);

// Basic Game Logic

document.querySelector(`.check`).addEventListener(`click`, function (){
    console.log(`Check button clicked!`);

    const guess = Number(document.querySelector(`.guess`).value);
    console.log(`Player guessed:`, guess);

    if (guess === secretNumber) {
        console.log(`Correct guess!`);
        document.querySelector(`.message`).textContent = `Correct Number!`;
        document.querySelector(`.number`).textContent = secretNumber;
    } else if (guess > secretNumber) {
        console.log(`Too high!`);
        document.querySelector(`.message`).textContent = `Too high`;
    } else if (guess < secretNumber) {
        console.log(`Too low`);
        document.querySelector(`.message`).textContent = `Too low`;
    }
});

