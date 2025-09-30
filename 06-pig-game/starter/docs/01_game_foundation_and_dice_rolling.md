# Hour 1: Game Foundation & Dice Rolling – Student Guide

## 🎯 What You'll Learn This Hour:

- Set up game state variables and initial conditions
- Implement dice rolling with random number generation
- Display dice images dynamically using `src` attribute
- Add current score accumulation logic
- Handle the "roll 1" scenario (lose current score)

## 📊 Progress Tracker

- [x] **Hour 1:** Game Foundation & Dice Rolling ← _You are here_
- [ ] **Hour 2:** Player Switching & Hold Functionality
- [ ] **Hour 3:** Win Conditions & Game Reset

## ⏰ Session Timeline

- Opening: Pig Game introduction and setup
- Section 1: Game state setup and element selection
- Section 2: Dice rolling mechanics and image display
- Section 3: Score accumulation and game rules

## 🛠️ Setup Your Pig Game Development Environment

### Step 1: Add Pig Game Project to Your Course

1. **Download Pig Game project zip file** (provided by instructor)
2. **Extract the contents** to get `06-pig-game` folder
3. **Move the folder** into your existing `javascript-course` directory:
   ```
   javascript-course/
   ├── 01-fundamentals-part-1/     (from Part 1)
   ├── 02-fundamentals-part-2/     (from Part 2)
   ├── 03-developer-skills/        (from Developer Skills)
   ├── 04-guess-my-number-game/    (from Game Development)
   ├── 05-modal/                   (from Modal Project)
   └── 06-pig-game/                (new Pig Game project folder)
   ```

### Step 2: Open Pig Game Project in VS Code

- **File → Open Folder**
- Navigate to `javascript-course/06-pig-game/starter`
- Click "Select Folder"

### Step 3: Add to Your Repository

**In VS Code Terminal (Ctrl+`):**

```bash
# Navigate up to main javascript-course folder
cd ../..
```

```bash
# Add the new Pig Game project folder
git add 06-pig-game/
```

```bash
# Commit with descriptive message
git commit -m "feat: add pig game starter files and documentation"
```

```bash
# Push to remote repository
git push origin main
```

### Step 4: Verify Your Setup

**You should see this structure:**

```
06-pig-game/
└── starter/
    ├── index.html
    ├── script.js
    ├── style.css
    ├── dice-1.png through dice-6.png
    ├── pig-game-flowchart.png
    └── docs/
        ├── 01_game_foundation_and_dice_rolling.md
        ├── 02_player_switching_and_hold_functionality.md
        └── 03_win_conditions_and_game_reset.md
```

### Step 5: Test Your Current Setup

Let's start by understanding what we're building:

```javascript
// Pig Game Development Hour 1 - Foundation & Dice Rolling
'use strict';

console.log('=== PIG GAME DEVELOPMENT: FOUNDATION & DICE ROLLING ===');

/*
What We're Building Today:
- A complete two-player dice game
- Players take turns rolling dice and accumulating points
- Rolling a 1 loses current round points
- First player to 100 points wins

Key Concepts:
- Game state management with multiple variables
- Random number generation for dice rolls
- Dynamic image display for dice faces
- Score tracking and display updates
- Conditional logic for game rules
*/

console.log('Pig Game project ready!');
```

**Verify everything works:**

- Open `index.html` in browser
- Check Developer Tools Console (F12)
- Should see: "Pig Game project ready!"
- Notice the game layout with two players and dice

## 🎮 Game Rules Overview

Before we start coding, let's understand what we're building:

1. **Two players** take turns rolling a die
2. **Roll dice**: Accumulate points in your current round
3. **Roll 1**: Lose all current round points, switch players
4. **Hold**: Save current score to total, switch players
5. **Win**: First player to reach 100+ points wins

## Section 1: Game State Setup & Element Selection

### Why This Matters

Every game needs to track its state - who's playing, what the scores are, and whether the game is active. We'll set up variables to store this information and select all the HTML elements we need to manipulate.

### Step 1: Set Up Game State Variables

```javascript
'use strict';

// Game state variables
let scores, currentScore, activePlayer, playing;
```

**Why This Matters:** These variables will store all the important game information:

- `scores`: Array to store both players' total scores
- `currentScore`: Points accumulated in current round
- `activePlayer`: Which player is currently playing (0 or 1)
- `playing`: Whether the game is still active

### Step 2: Select All Game Elements

```javascript
// Element selections
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
```

**Why This Matters:** We need references to all the HTML elements we'll be updating. Notice we use both `querySelector` and `getElementById` - both work, but `getElementById` is slightly faster for ID selections.

### Step 3: Create Game Initialization Function

```javascript
// Initialize game
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
};
init();
```

**Why This Matters:** The `init` function sets up the starting state of the game. We call it immediately to start with a clean slate.

### Your Turn

1. Add the game state variables at the top of your script
2. Select all the required elements
3. Create and call the `init` function
4. Save and test - you should see all scores reset to 0 and the dice hidden

## Section 2: Dice Rolling Mechanics & Image Display

### Why This Matters

The core of our game is rolling dice and showing the result. We'll generate random numbers and display the corresponding dice image.

### Step 1: Add Roll Dice Event Listener

```javascript
// Roll dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // We'll add the dice logic here
  }
});
```

**Why This Matters:** We only want dice rolling to work when the game is active (`playing` is true).

### Step 2: Generate Random Dice Number

```javascript
// Roll dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // More logic coming...
  }
});
```

**Why This Matters:**

- `Math.random()` gives us 0 to 0.999...
- Multiply by 6 gives us 0 to 5.999...
- `Math.trunc()` removes decimals: 0 to 5
- Add 1: 1 to 6 (perfect for dice!)

### Step 3: Show Dice and Display Image

```javascript
// Roll dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // More logic coming...
  }
});
```

**Why This Matters:**

- Remove `hidden` class to show the dice
- Use template literal to set the correct image source
- Images are named `dice-1.png`, `dice-2.png`, etc.

### Your Turn

1. Add the roll dice event listener
2. Generate a random dice number
3. Show the dice and set the correct image
4. Save and test - click "Roll Dice" to see random dice images!

## Section 3: Score Accumulation & Game Rules

### Why This Matters

Now we need to handle the game logic - adding points when you don't roll a 1, and losing points when you do.

### Step 1: Handle Non-1 Rolls (Add to Current Score)

```javascript
// Roll dice functionality
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
      // Handle rolling a 1
    }
  }
});
```

**Why This Matters:** When you don't roll a 1, add the dice value to your current score and update the display.

### Step 2: Handle Rolling a 1 (Lose Current Score)

```javascript
// Roll dice functionality
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
      // Switch player logic (simplified for Hour 1)
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    }
  }
});
```

**Why This Matters:** When you roll a 1, you lose all current round points. For now, we'll just reset the current score (player switching comes in Hour 2).

### Your Turn

1. Add the conditional logic for dice rolls
2. Handle both non-1 and 1 scenarios
3. Save and test - roll dice multiple times to see score accumulation and loss

## 🧪 Final Verification

Test your game to make sure everything works:

- [ ] All scores start at 0
- [ ] Dice is hidden initially
- [ ] Clicking "Roll Dice" shows random dice images
- [ ] Non-1 rolls add to current score
- [ ] Rolling a 1 resets current score to 0
- [ ] Console shows no errors

### Test Code

Add this to your console to verify everything is working:

```javascript
// Test game state
console.log('Scores:', scores);
console.log('Current Score:', currentScore);
console.log('Active Player:', activePlayer);
console.log('Playing:', playing);
```

## ✅ What Works Now / What's Next

### What Works Now

- Dice rolls generate numbers 1–6 and update the dice image
- Non-1 rolls add to the current score display
- Rolling a 1 resets the current score to 0
- Game initializes with scores at 0 and the dice hidden

### What's Intentionally Not Implemented Yet

- Player switching after rolling a 1
- Hold button to bank the current score to the total
- Win condition and winner styling
- New Game button to fully reset the game

These features are added in Hours 2 and 3.

## 📊 Git Commit Time!

### Step 1: Stage All Changes

```bash
git add .
```

**What this does:**

- Stages all modified files in your current directory
- Prepares them for commit (like putting items in a shopping cart)
- The `.` means "all files in current directory and subdirectories"
- You'll see: `modified: script.js` in the output

### Step 2: Commit Your Changes

```bash
git commit
```

**What happens:**

- Opens your default text editor (usually VS Code or vim)
- You'll see a commit message template
- Replace the template with your message
- Save and close the editor to complete the commit

**If you see vim editor (most common):**

1. **Enter Insert Mode:**

   - Press `i` to enter insert mode
   - You'll see `-- INSERT --` at the bottom of the screen
   - Now you can type and edit text normally

2. **Edit the commit message:**

   - Delete the existing template text (use Backspace or Delete keys)
   - Type your new commit message
   - You can use arrow keys to navigate

3. **Save and exit:**
   - Press `Esc` to exit insert mode
   - Type `:wq` and press Enter
   - This saves the file and quits vim

**If you see VS Code editor:**

- Simply edit the message directly
- Press `Ctrl+S` (or `Cmd+S` on Mac) to save
- Close the tab to complete the commit

**If you make a mistake:**

- Press `Esc` to exit insert mode
- Type `:q!` and press Enter to quit without saving
- This will cancel the commit and you can try again

**Your commit message:**

```
feat(pig-game): implement game foundation with dice rolling and score accumulation

- Set up game state variables (scores, currentScore, activePlayer, playing)
- Select all required DOM elements for game interaction
- Create init() function to initialize game state
- Implement dice rolling with Math.random() and Math.trunc()
- Display dice images dynamically using src attribute
- Add current score accumulation logic for non-1 rolls
- Handle roll-1 scenario with current score reset
- Add comprehensive game state validation
```

**What this means:**

- `feat:` indicates a new feature
- `(pig-game):` specifies which project this is for
- The rest describes what you accomplished

### Step 3: Push to Remote Repository

```bash
git push origin main
```

**What this does:**

- Uploads your local commits to GitHub (or your remote repository)
- Makes your changes available to others
- You'll see: `Writing objects: 100% (X/X), X KiB | X KiB/s`
- Your changes are now safely backed up online

## 🔧 Troubleshooting

### **Dice images not showing**

- Check if dice images are in the same folder as your HTML file
- Make sure you have `dice-1.png` through `dice-6.png` in your project folder
- Verify the image path in your `src` attribute is correct

### **Scores not updating**

- Check if you're selecting the correct elements
- Verify your element selectors match the HTML IDs and classes exactly
- Confirm you're using `textContent` to update the display

### **Game state variables undefined**

- Check if you declared variables before using them
- Make sure all `let` declarations are at the top of your script
- Verify you're not trying to access variables before they're initialized

### **Dice always shows the same number**

- Check your random number generation
- Make sure you're using `Math.trunc(Math.random() * 6) + 1`
- Verify you're generating a new random number each time

### **Current score not resetting on roll 1**

- Check your conditional logic
- Make sure you're using `dice !== 1` (not equal to 1)
- Verify you're updating the correct current score element

## ✅ Hour Checklist

- [ ] Set up game state variables (`scores`, `currentScore`, `activePlayer`, `playing`)
- [ ] Selected all required DOM elements
- [ ] Created and called `init()` function
- [ ] Added roll dice event listener with `playing` check
- [ ] Generated random dice numbers (1-6)
- [ ] Displayed dice images dynamically
- [ ] Implemented score accumulation for non-1 rolls
- [ ] Handled roll-1 scenario (reset current score)
- [ ] Tested all functionality
- [ ] Committed changes to Git

## 📚 Key Concepts Summary

| Concept               | Purpose               | Example                             |
| --------------------- | --------------------- | ----------------------------------- |
| **State Management**  | Track game data       | `let scores = [0, 0]`               |
| **Element Selection** | Get DOM references    | `document.querySelector('.dice')`   |
| **Random Numbers**    | Generate dice rolls   | `Math.trunc(Math.random() * 6) + 1` |
| **Dynamic Images**    | Show dice faces       | `diceEl.src = \`dice-${dice}.png\`` |
| **Conditional Logic** | Handle game rules     | `if (dice !== 1) { ... }`           |
| **Score Updates**     | Display current score | `textContent = currentScore`        |

## 🎯 What's Next?

In Hour 2, we'll add:

- Player switching when rolling a 1
- Hold button functionality
- Visual indicators for active player
- Complete game flow

Great job on building the foundation! You've created a working dice rolling system with score tracking. 🎲
