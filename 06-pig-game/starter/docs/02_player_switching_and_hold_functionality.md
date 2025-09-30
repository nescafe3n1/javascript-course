# Hour 2: Player Switching & Hold Functionality – Student Guide

## 🎯 What You'll Learn This Hour:

- Create a `switchPlayer()` function for clean code organization
- Implement active player visual indicators using CSS classes
- Add hold button functionality to save current score
- Handle current score reset when switching players
- Add proper game state validation

## 📊 Progress Tracker

- [x] **Hour 1:** Game Foundation & Dice Rolling ← _Completed_
- [ ] **Hour 2:** Player Switching & Hold Functionality ← _You are here_
- [ ] **Hour 3:** Win Conditions & Game Reset

## ⏰ Session Timeline

- Opening: Player switching logic and hold functionality
- Section 1: Creating the switchPlayer helper function
- Section 2: Implementing hold button functionality
- Section 3: Visual indicators and game state management

## Section 1: Creating the switchPlayer Helper Function

### Why This Matters

Instead of repeating the same code every time we need to switch players, we'll create a reusable function. This follows the DRY (Don't Repeat Yourself) principle and makes our code cleaner and easier to maintain.

### Step 1: Create the switchPlayer Function

```javascript
// Create our switchPlayer function
const switchPlayer = function () {
  // Reset current score for the active player
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  // Reset currentScore variable
  currentScore = 0;

  // Switch to the other player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Toggle the active class on both players
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
```

**Why This Matters:**

- `document.getElementById()` with template literal gets the correct current score element
- `activePlayer === 0 ? 1 : 0` is a ternary operator that switches between 0 and 1
- `classList.toggle()` adds the class if it's missing, removes it if it's present
- This function handles all the logic needed to switch players

### Step 2: Update the Roll Dice Logic

```javascript
// Updated roll dice functionality
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
      // Use our new switchPlayer function
      switchPlayer();
    }
  }
});
```

**Why This Matters:**

- When rolling a 1, we now call `switchPlayer()` instead of just resetting the score
- This properly switches the active player and updates the visual indicators
- The code is cleaner and more organized

### Your Turn

1. **Add the `switchPlayer` function** to your script
2. **Update the roll dice logic** to use `switchPlayer()` when rolling a 1
3. **Save and test** - roll dice multiple times to see player switching in action
4. **Notice** how the active player indicator changes when you roll a 1

## Section 2: Implementing Hold Button Functionality

### Why This Matters

The hold button allows players to save their current round score to their total score and switch to the next player. This is a core game mechanic that requires careful state management.

### Step 1: Add Hold Button Event Listener

```javascript
// Select the hold button
const btnHold = document.querySelector('.btn--hold');

// Hold functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active player's total score
    scores[activePlayer] += currentScore;

    // Update the display
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Switch to next player
    switchPlayer();
  }
});
```

**Why This Matters:**

- `scores[activePlayer] += currentScore` adds the current score to the player's total
- We update the display using `textContent` to show the new total
- We call `switchPlayer()` to reset everything and switch players
- The `playing` check ensures the game is still active

### Step 2: Test the Hold Functionality

```javascript
// Add this test code to verify everything works
console.log('Scores array:', scores);
console.log('Current score:', currentScore);
console.log('Active player:', activePlayer);
```

**Why This Matters:**

- This helps you verify that the hold functionality is working correctly
- You can see the scores array updating in the console
- It's a good debugging technique for complex game logic

### Your Turn

1. **Add the hold button event listener** to your script
2. **Test the hold functionality** - accumulate some points, then hold
3. **Verify** that the score is added to the total and the player switches
4. **Check the console** to see the game state updates

## Section 3: Visual Indicators and Game State Management

### Why This Matters

Players need clear visual feedback about whose turn it is and what's happening in the game. We'll ensure the active player is always clearly indicated and the game state is properly managed.

### Step 1: Verify Visual Indicators

The CSS already handles the visual indicators, but let's make sure our JavaScript is working with it:

```javascript
// Test the visual indicators
console.log(
  'Player 0 has active class:',
  player0El.classList.contains('player--active')
);
console.log(
  'Player 1 has active class:',
  player1El.classList.contains('player--active')
);
```

**Why This Matters:**

- `classList.contains()` checks if an element has a specific class
- This helps verify that our `toggle()` calls are working correctly
- Visual feedback is crucial for a good user experience

### Step 2: Add Game State Validation

```javascript
// Enhanced hold functionality with proper validation
btnHold.addEventListener('click', function () {
  if (playing && currentScore > 0) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Switch to next player
    switchPlayer();
  }
});
```

**Why This Matters:**

- The `playing` check ensures the game is still active before allowing hold actions
- The `currentScore > 0` check prevents holding when there's nothing to hold
- This makes the game more user-friendly by preventing pointless hold actions

### Your Turn

1. **Add the visual indicator test code** to verify classes are working
2. **Test the hold functionality** to ensure it works correctly
3. **Test the complete game flow** - roll dice, accumulate points, hold, switch players
4. **Verify** that the active player indicator changes correctly

## 🧪 Final Verification

Test your game to make sure everything works:

- [ ] Rolling a 1 switches players and resets current score
- [ ] Hold button adds current score to total and switches players
- [ ] Active player indicator changes correctly
- [ ] Hold button prevents holding when current score is 0
- [ ] Game state variables update correctly
- [ ] Console shows no errors

### Test Code

Add this to your console to verify everything is working:

```javascript
// Test complete game state
console.log('Scores:', scores);
console.log('Current Score:', currentScore);
console.log('Active Player:', activePlayer);
console.log('Playing:', playing);
console.log('Player 0 active:', player0El.classList.contains('player--active'));
console.log('Player 1 active:', player1El.classList.contains('player--active'));
```

## ✅ What Works Now / What's Next

### What Works Now

- Rolling a 1 switches players and resets the current score
- Hold button adds current score to total, then switches players
- Active player visual indicators toggle correctly
- Core two-player turn flow works end-to-end

### What's Intentionally Not Implemented Yet

- Win condition (score >= 100) and winner styling
- Full game reset via the New Game button

These features are added in Hour 3.

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
feat(pig-game): implement player switching and hold functionality with helper functions

- Create switchPlayer() helper function for clean code organization
- Implement active player visual indicators using CSS class toggling
- Add hold button functionality to save current score to total
- Handle current score reset when switching players
- Add game state validation (can't hold with 0 points)
- Update roll dice logic to use switchPlayer() when rolling a 1
- Implement proper score accumulation and display updates
- Add comprehensive player state management
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

### **Player switching not working**

- Check if you're calling `switchPlayer()` in the roll dice logic
- Verify the `switchPlayer` function is defined before it's used
- Make sure you're using `classList.toggle()` correctly

### **Hold button not working**

- Check if you selected the hold button with the correct selector
- Verify the event listener is attached to the hold button
- Make sure you're updating the correct score element

### **Active player indicator not changing**

- Check if the CSS classes are being toggled correctly
- Verify the player elements are selected properly
- Make sure you're using `classList.toggle()` on both players

### **Scores not updating correctly**

- Check if you're using the correct array index for `scores[activePlayer]`
- Verify the `textContent` update is targeting the right element
- Make sure the `currentScore` is being added to the total

### **Game state variables not updating**

- Check if you're updating all variables in the `switchPlayer` function
- Verify the `activePlayer` variable is being switched correctly
- Make sure the `currentScore` is being reset to 0

## ✅ Hour Checklist

- [ ] Created `switchPlayer()` helper function with all necessary logic
- [ ] Updated roll dice logic to use `switchPlayer()` when rolling a 1
- [ ] Added hold button event listener with proper functionality
- [ ] Implemented score accumulation and display updates
- [ ] Added game state validation (can't hold with 0 points)
- [ ] Verified active player visual indicators work correctly
- [ ] Tested complete game flow (roll, accumulate, hold, switch)
- [ ] All changes committed to Git

## 📚 Key Concepts Summary

| Concept                | Purpose                | Example                                        |
| ---------------------- | ---------------------- | ---------------------------------------------- |
| **Helper Functions**   | Reusable code blocks   | `const switchPlayer = function() { ... }`      |
| **Ternary Operator**   | Conditional assignment | `activePlayer === 0 ? 1 : 0`                   |
| **Class Toggling**     | Switch CSS classes     | `player0El.classList.toggle('player--active')` |
| **Array Manipulation** | Update game scores     | `scores[activePlayer] += currentScore`         |
| **State Validation**   | Check game conditions  | `if (playing && currentScore > 0)`             |
| **Template Literals**  | Dynamic selectors      | `\`current--${activePlayer}\``                 |

## 🎯 What's Next?

In Hour 3, we'll add:

- Win condition checking (score >= 100)
- Winner styling and game completion
- New game button to reset everything
- Final polish and user experience improvements

Great job on building the core game mechanics! You've created a fully functional two-player dice game with proper state management. 🎲
