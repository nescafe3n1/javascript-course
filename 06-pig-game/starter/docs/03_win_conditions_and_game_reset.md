# Hour 3: Win Conditions & Game Reset – Student Guide

## 🎯 What You'll Learn This Hour:

- Implement win condition checking (score >= 100)
- Add winner styling and game completion logic
- Add new game button to reset all game state
- Handle game state when someone wins
- Add final polish and user experience improvements

## 📊 Progress Tracker

- [x] **Hour 1:** Game Foundation & Dice Rolling ← _Completed_
- [x] **Hour 2:** Player Switching & Hold Functionality ← _Completed_
- [ ] **Hour 3:** Win Conditions & Game Reset ← _You are here_

## ⏰ Session Timeline

- Opening: Win conditions and game completion
- Section 1: Implementing win condition checking
- Section 2: Creating the new game reset functionality

## Section 1: Implementing Win Condition Checking

### Why This Matters

Every game needs a way to determine when someone has won. We'll add logic to check if a player has reached 100 points and handle the game completion state properly.

### Step 1: Add Win Condition Check to Hold Functionality

```javascript
// Enhanced hold functionality with win condition and validation
btnHold.addEventListener('click', function () {
  if (playing && currentScore > 0) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check for win condition
    if (scores[activePlayer] >= 100) {
      // Player wins!
      playing = false;
      diceEl.classList.add('hidden');

      // Add winner styling
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      // Remove active class from winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});
```

**Why This Matters:**

- `scores[activePlayer] >= 100` checks if the current player has won
- `playing = false` stops the game from continuing
- `diceEl.classList.add('hidden')` hides the dice when game ends
- We add the `player--winner` class for special styling
- We remove the `player--active` class since the game is over

### Step 2: Test the Win Condition

```javascript
// Add this test code to verify win condition works
console.log('Current scores:', scores);
console.log('Win condition met:', scores[activePlayer] >= 100);
console.log('Game playing:', playing);
```

**Why This Matters:**

- This helps you verify that the win condition is working correctly
- You can see when the game state changes from playing to completed
- It's important to test edge cases like exactly 100 points

### Your Turn

1. **Update the hold functionality** with the win condition check
2. **Test the win condition** - try to get a player to 100+ points
3. **Verify** that the game stops and shows winner styling
4. **Check the console** to see the game state changes

## Section 2: Creating the New Game Reset Functionality

### Why This Matters

Players need a way to start a new game after someone wins. We'll create a comprehensive reset function that restores the game to its initial state.

### Step 1: Enhance the Init Function

```javascript
// Enhanced init function for complete game reset
const init = function () {
  // Reset game state
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // Reset all displays
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Hide dice
  diceEl.classList.add('hidden');

  // Reset player styling
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
```

**Why This Matters:**

- Resets all game state variables to their initial values
- Clears all score displays
- Hides the dice
- Removes winner styling and resets active player styling
- Ensures the game starts fresh

### Step 2: Add New Game Button Event Listener

```javascript
// Select the new game button
const btnNew = document.querySelector('.btn--new');

// New game functionality
btnNew.addEventListener('click', init);
```

**Why This Matters:**

- `btnNew.addEventListener('click', init)` calls our reset function when clicked
- This gives players a way to start over after a game ends
- The `init` function handles all the reset logic

### Step 3: Test the Complete Game Flow

```javascript
// Test complete game reset
console.log('Game reset - scores:', scores);
console.log('Game reset - playing:', playing);
console.log('Game reset - active player:', activePlayer);
```

**Why This Matters:**

- This helps verify that the reset functionality works correctly
- You can see all game state variables return to their initial values
- It's important to test that the game can be restarted multiple times

### Your Turn

1. **Update the `init` function** with complete reset logic
2. **Add the new game button event listener**
3. **Test the complete game flow** - play a game, win, then start a new game
4. **Verify** that everything resets properly and you can play again

## 🧪 Final Verification

Test your complete game to make sure everything works:

- [ ] Game starts with all scores at 0 and Player 1 active
- [ ] Dice rolling and holding work correctly
- [ ] Player switching works when rolling a 1
- [ ] Win condition triggers when reaching 100+ points
- [ ] Winner styling is applied correctly
- [ ] Game stops accepting input after someone wins
- [ ] New game button resets everything properly
- [ ] Can play multiple complete games in a row
- [ ] Console shows no errors

### Test Code

Add this to your console to verify everything is working:

```javascript
// Test complete game state
console.log('Scores:', scores);
console.log('Current Score:', currentScore);
console.log('Active Player:', activePlayer);
console.log('Playing:', playing);
console.log('Player 0 winner:', player0El.classList.contains('player--winner'));
console.log('Player 1 winner:', player1El.classList.contains('player--winner'));
console.log('Player 0 active:', player0El.classList.contains('player--active'));
console.log('Player 1 active:', player1El.classList.contains('player--active'));
```

## ✅ What Works Now / What's Next

### What Works Now

- Complete two-player game flow with hold and player switching
- Win condition (>= 100), winner styling, and locked game state
- New Game button resets all state and styling

### What's Intentionally Not Implemented Yet

- Optional polish beyond the course scope (animations, sound effects, custom winning thresholds UI)
- Persistence or advanced features (saving scores, multiplayer over network)

This hour completes all core game features for the project.

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
feat(pig-game): implement win conditions and complete game reset functionality

- Implement win condition checking (score >= 100) in hold functionality
- Add winner styling and game completion logic with CSS classes
- Prevent further game actions after someone wins (playing = false)
- Enhance init() function for complete game state reset
- Add new game button event listener for game restart
- Handle game state management for completed games
- Reset all player styling and active indicators
- Add comprehensive game flow control and validation
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

### **Win condition not triggering**

- Check if you're using `>=` (greater than or equal) not just `>`
- Verify the win condition check is in the hold functionality
- Make sure you're checking `scores[activePlayer]` not `currentScore`

### **Winner styling not showing**

- Check if you're adding the `player--winner` class to the correct element
- Verify the CSS has the winner styling defined
- Make sure you're using the correct selector with template literals

### **Game not stopping after win**

- Check if you're setting `playing = false` when someone wins
- Verify all event listeners check the `playing` variable
- Make sure the dice is hidden when the game ends

### **New game button not working**

- Check if you selected the new game button with the correct selector
- Verify the event listener is attached to the button
- Make sure the `init` function resets all necessary variables

### **Game state not resetting properly**

- Check if the `init` function resets all game state variables
- Verify all CSS classes are removed/added correctly
- Make sure all displays are updated to show 0

## ✅ Hour Checklist

- [ ] Implemented win condition checking (score >= 100)
- [ ] Added winner styling and game completion logic
- [ ] Prevented further game actions after someone wins
- [ ] Enhanced `init` function for complete game reset
- [ ] Added new game button event listener
- [ ] Tested complete game flow from start to finish
- [ ] Verified game can be restarted multiple times
- [ ] All changes committed to Git

## 📚 Key Concepts Summary

| Concept                   | Purpose                   | Example                                         |
| ------------------------- | ------------------------- | ----------------------------------------------- |
| **Win Conditions**        | Check for game completion | `if (scores[activePlayer] >= 100)`              |
| **Game State Management** | Control game flow         | `playing = false`                               |
| **Dynamic Styling**       | Add/remove CSS classes    | `element.classList.add('player--winner')`       |
| **Complete Reset**        | Restore initial state     | `const init = function() { /* reset logic */ }` |
| **Event Handling**        | Respond to user actions   | `btnNew.addEventListener('click', init)`        |
| **State Validation**      | Prevent invalid actions   | `if (playing) { /* game logic */ }`             |

## 🎯 What's Next?

Congratulations! You've completed the Pig Game project. You now have:

- ✅ A fully functional two-player dice game
- ✅ Complete game mechanics with win conditions
- ✅ Professional game state management
- ✅ Clean, organized, and well-commented code
- ✅ Understanding of complex game logic implementation

### **Next Steps in Your JavaScript Journey:**

- **Advanced DOM Projects:** More complex games and applications
- **Object-Oriented Programming:** Classes, inheritance, and design patterns
- **Asynchronous JavaScript:** Promises, async/await, and API calls
- **Modern JavaScript:** ES6+ features, modules, and tooling
- **Real-World Projects:** Full-stack applications and frameworks

### **Skills You've Mastered:**

- **State Management:** Tracking complex game state with multiple variables
- **Event Handling:** Responding to user interactions and game events
- **DOM Manipulation:** Dynamic content updates and styling
- **Conditional Logic:** Complex game rules and win conditions
- **Code Organization:** Helper functions and clean code structure
- **User Experience:** Visual feedback and intuitive game flow

Great job on building a complete, professional-quality game! You're becoming a real JavaScript developer. 🎲🏆
