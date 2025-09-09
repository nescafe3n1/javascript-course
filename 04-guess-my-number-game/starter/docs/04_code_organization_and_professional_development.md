## 🎯 What You'll Learn This Hour:

- Organize code with constants and cached selectors
- Extract UI helper functions for clean, DRY updates
- Encapsulate game state with a single reset path
- Refactor handlers with early returns and readable logic
- Add small UX enhancements (Enter key, focus on restart)

## 📊 Progress Tracker

- [x] Hour 1: Game foundation & DOM basics
- [x] Hour 2: Score, win/lose, restart (mechanics)
- [x] Hour 3: Visual feedback, validation, polish
- [ ] Hour 4: Code organization & professional practices ← you are here

## ⏰ Session Timeline

- Opening: Code Organization & Professional Practices
- Section 1: Centralize constants and selectors
- Section 2: Extract UI helper functions
- Section 3: Encapsulate game state and reset
- Section 4: Refactor event handlers
- Section 5: Add small UX enhancements

## 🧱 Section 1: Centralize Constants & Selectors

### Why This Matters

Avoid magic numbers and repeated queries. One source of truth improves clarity and reduces bugs.

```javascript
////////////////////////////////////
// Constants & Selectors

// Ranges and defaults
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

// Cached selectors (single source of truth)
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');
```

### Your Turn

- Create the three constants
- Cache all DOM elements shown above

## 🧰 Section 2: Extract UI Helper Functions

### Why This Matters

Keep responsibilities small and changes centralized. Updating UI in one place prevents duplication.

```javascript
////////////////////////////////////
// UI Helpers

function setMessage(text) {
  messageEl.textContent = text;
}
function setNumber(value) {
  numberEl.textContent = value;
}
function setScore(value) {
  scoreEl.textContent = value;
}
function setHighscore(value) {
  highscoreEl.textContent = value;
}
function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}
function disablePlay(disabled) {
  guessInputEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}
function clearInput() {
  guessInputEl.value = '';
}
```

### Your Turn

- Add all helpers
- Replace direct DOM updates in your code with these helpers

## 🧠 Section 3: Encapsulate Game State & Reset

### Why This Matters

A single reset path keeps behavior consistent; separating state from UI makes code predictable.

```javascript
////////////////////////////////////
// Game State & Reset

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
let score = START_SCORE;
let highscore = 0;

function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}

// Initial render
renderInitialUI();
```

### Your Turn

- Implement `resetGameState` and `renderInitialUI`
- Call `renderInitialUI()` on load

## 🧩 Section 4: Refactor Event Handlers

### Why This Matters

Early returns and helpers make logic readable and easy to extend.

```javascript
////////////////////////////////////
// Handlers

checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);

  // Validation
  if (!guess) return setMessage('No number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

  if (guess === secretNumber) {
    setMessage('🎉 Correct Number!');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return; // early exit
  }

  // Wrong guess
  setMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('💥 You lost!');
    setNumber(secretNumber);
    setBackground('red');
    disablePlay(true);
    clearInput();
  }
});

againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
});
```

### Your Turn

- Refactor your existing handlers to use helpers and early returns
- Re-test win, lose, restart

## ⚡ Section 5: Small UX Enhancements

### Why This Matters

Tiny details (keyboard and focus) improve feel and accessibility.

```javascript
// Enter key submits when possible
window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

// Focus input on restart
againBtnEl.addEventListener('click', function () {
  guessInputEl.focus();
});
```

### Your Turn

- Add Enter-to-submit
- Focus input on restart

## 🧪 Final Verification

- Win → message OK, background green, input disabled & cleared
- Lose → message OK, background red, number revealed, input disabled & cleared
- Restart → UI and state reset, default background (CSS), input focused
- Validation → messages for empty/out-of-range, no game logic runs

## ✅ What’s Working Now (end of Hour 4)

- Constants/selectors centralized; UI helpers in place
- Single reset path and initial render
- Refactored handlers with early returns
- Visual feedback, validation, win/lose, restart, and small UX (Enter key, focus)

Ideas to extend:

- Theme classes instead of inline background changes
- Split code into modules or files; add tests; add features (timer, difficulty)

## 📊 Git Commit Time!

```bash
git add .
git commit
```

Copy this commit message:

```
refactor: organize game code with helpers, constants, and clean handlers

- Centralize constants and cache DOM selectors
- Extract UI helpers (message, score, number, background, enable/disable)
- Add single reset path and initial render function
- Refactor event handlers with early returns and DRY updates
- Add UX enhancements (Enter key, input focus)
```

```bash
git push origin main
```

## 🔧 Troubleshooting

- Helpers not applied?
  - Search for remaining direct DOM updates and replace with helpers
- Enter key not working?
  - Check the `keydown` handler and ensure the button isn’t disabled
- Restart not resetting?
  - Confirm both `resetGameState()` and `renderInitialUI()` run
- Range message wrong?
  - Use `${MIN_NUMBER}`/`${MAX_NUMBER}` in the message

## ✅ Hour 4 Checklist

- [ ] Constants and selectors centralized
- [ ] UI helpers created and used
- [ ] Single reset path + initial render
- [ ] Handlers refactored with early returns
- [ ] UX enhancements implemented

## 📚 Key Concepts Summary

| Concept               | Purpose                     | Example                                       |
| --------------------- | --------------------------- | --------------------------------------------- |
| Constants & Selectors | Single source of truth      | `const START_SCORE = 20;`                     |
| UI Helpers            | DRY, readable UI updates    | `setMessage('Start guessing...')`             |
| State & Reset         | Consistent behavior         | `resetGameState(); renderInitialUI();`        |
| Early Returns         | Clear, flat control flow    | `if (!guess) return setMessage('No number!')` |
| UX Enhancements       | Better feel & accessibility | Enter key submit, focus input on restart      |
