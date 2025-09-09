## 🎯 What You'll Learn This Hour:

- Master score tracking and decrementing for wrong guesses
- Implement win/lose detection with proper game state management
- Create game restart functionality with complete state reset
- Build professional game experience with complete user interaction flow
- Apply advanced DOM manipulation and game state management techniques

## Quick Review: Previous Course Foundation

Before we start, make sure you remember:

- DOM element selection with `querySelector` and `querySelectorAll`
- Event listeners with `addEventListener` and click events
- Game state variables and data management
- Basic conditional logic and game mechanics
- Console logging for debugging

**Ready to complete your game? Let's add the missing pieces!**

## 📊 Progress Tracker

- [x] **Hour 1:** Game Foundation & DOM Basics ✅
- [ ] **Hour 2:** Event Handling & User Interaction ← _You are here_
- [ ] **Hour 3:** Advanced Game Features & Polish
- [ ] **Hour 4:** Code Organization & Professional Development

## ⏰ Session Timeline

- Opening: Game Enhancement Reality
- Section 1: Score Tracking & Decrementing
- Section 2: Win/Lose Detection & Game State
- Section 3: Game Restart & Reset Functionality

## 🎮 Section 1: Score Tracking & Decrementing

### **Understanding Score Tracking**

Right now your game never changes the score - it stays at 20 forever. In a real game, wrong guesses should cost points.

**Why This Matters:** After setting up our basic game logic, we need a way to track the player's score and reduce it when they guess wrong. This creates urgency and makes the game challenging. Without score tracking, there's no consequence for wrong guesses and no way to measure success.

### **Implementing Score Decrementing**

Let's add score tracking to our game logic. We need to decrement the score for wrong guesses and update the display.

```javascript
////////////////////////////////////
// Score tracking - reduce score for wrong guesses

// Add this inside your event listener, after the game logic
if (guess === secretNumber) {
  // ... existing win logic ...
} else if (guess > secretNumber) {
  console.log('Too high!');
  document.querySelector('.message').textContent = '📈 Too high!';
  // Say: "Add score decrementing here"
  score--;
} else if (guess < secretNumber) {
  console.log('Too low!');
  document.querySelector('.message').textContent = '📉 Too low!';
  // Say: "Add score decrementing here"
  score--;
}

// Update the score display after both wrong guesses
document.querySelector('.score').textContent = score;
```

**Understanding Score Decrementing:**

- **`score--`** reduces the score by 1 (same as `score = score - 1`)
- **We update the display** immediately so players see their score decreasing
- **This creates urgency** and makes the game challenging
- **Wrong guesses have consequences** - players lose points for incorrect attempts

### **Why We Need Score Tracking**

Score tracking transforms your basic game into a challenging experience:

- **Creates urgency:** Players want to guess correctly before running out of points
- **Measures success:** Players can track their performance and try to improve
- **Adds strategy:** Players become more careful with their guesses
- **Provides feedback:** Players know how well they're doing

## 🎯 Your Turn: Practice Score Tracking

### Exercise: Add Score Decrementing to Your Game

```javascript
// Add score decrementing to your game:
// 1. Find your 'too high' else if block
// 2. Add score--; after the message update
// 3. Find your 'too low' else if block
// 4. Add score--; after the message update
// 5. Add score display update after both conditions
// 6. Test your game with wrong guesses

// Your code here...
// Add score--; to both wrong guess conditions
// Add document.querySelector('.score').textContent = score; after both
```

## 🎮 Section 2: Win/Lose Detection & Game State

### **Understanding Win/Lose Conditions**

Right now your game never ends - players can keep guessing forever. In a real game, there should be clear win and lose conditions.

**Why This Matters:** After adding score tracking, we need a way to detect when the player wins or loses. The player wins when they guess correctly, and they lose when their score reaches 0. Without win/lose conditions, the game feels incomplete and unsatisfying.

### **Implementing Win Condition**

When the player guesses correctly, we need to handle the win state properly.

```javascript
////////////////////////////////////
// Win condition - detect when player wins

if (guess === secretNumber) {
  console.log('Correct guess!');
  document.querySelector('.message').textContent = '🎉 Correct Number!';
  document.querySelector('.number').textContent = secretNumber;

  // Check if this is a new high score
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }

  // Show win message and disable further guessing
  document.querySelector('.message').textContent = '🎉 You won!';
  document.querySelector('.guess').disabled = true;
  document.querySelector('.check').disabled = true;
}
```

**Understanding Win Condition:**

- **Highscore tracking:** We update the highscore if the current score is better
- **Win message:** We show a clear victory message
- **Disable input:** We prevent further guessing after winning
- **Clear ending:** Players know they've won and can't continue

### **Implementing Lose Condition**

When the player's score reaches 0, we need to handle the lose state.

```javascript
////////////////////////////////////
// Lose condition - detect when player loses

// Add this after the score display update
if (score < 1) {
  document.querySelector('.message').textContent = '💥 You lost!';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.guess').disabled = true;
  document.querySelector('.check').disabled = true;
}
```

**Understanding Lose Condition:**

- **Score check:** We check if score is less than 1 (reached 0)
- **Lose message:** We show a clear defeat message
- **Reveal secret:** We show the secret number so players know what they missed
- **Disable input:** We prevent further guessing after losing
- **Clear ending:** Players know they've lost and can't continue

### **Why We Need Win/Lose Conditions**

Win/lose conditions complete your game experience:

- **Clear objectives:** Players know what they're trying to achieve
- **Satisfying endings:** Players feel accomplished when they win
- **Learning opportunity:** Players can see the secret number when they lose
- **Complete experience:** The game feels finished and professional

## 🎯 Your Turn: Practice Win/Lose Detection

### Exercise: Add Win/Lose Conditions to Your Game

```javascript
// Add win/lose conditions to your game:
// 1. Find your 'correct guess' if block
// 2. Add highscore tracking logic
// 3. Add win message and disable input/button
// 4. Add lose condition after score display update
// 5. Test winning and losing scenarios

// Your code here...
// Add win condition logic inside correct guess block
// Add lose condition logic after score display update
```

## 🎮 Section 3: Game Restart & Reset Functionality

### **Understanding Game Restart**

Right now when players win or lose, they can't play again without refreshing the page. We need a way to restart the game.

**Why This Matters:** After adding win/lose detection, we need a way to restart the game. Players should be able to play multiple rounds without refreshing the page. This creates a complete, professional game experience.

### **Implementing Game Restart**

Let's add restart functionality to the 'Again!' button.

```javascript
////////////////////////////////////
// Game restart - reset everything for new game

document.querySelector('.again').addEventListener('click', function () {
  // Reset game state
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset display
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  // Re-enable input and button
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
});
```

**Understanding Game Restart:**

- **Reset variables:** We set score back to 20 and generate a new secret number
- **Reset display:** We restore the original message, number display, and clear input
- **Re-enable controls:** We allow players to guess again
- **Complete reset:** Everything returns to the starting state

### **Why We Need Game Restart**

Game restart completes your professional game:

- **Seamless replay:** Players can play multiple rounds without page refresh
- **Complete experience:** The game feels polished and professional
- **User-friendly:** Players don't need to refresh the page to play again
- **Professional quality:** This is how real games work

## 🎯 Your Turn: Practice Game Restart

### Exercise: Add Restart Functionality to Your Game

```javascript
// Add restart functionality to your game:
// 1. Add event listener to '.again' button
// 2. Reset all game state variables
// 3. Reset all display elements
// 4. Re-enable input and button
// 5. Test the complete game cycle

// Your code here...
// Add complete restart functionality
```

## 🏆 Hour 2 Complete! Your Enhanced Game

### **Final Verification Code**

Add this summary to confirm everything is working:

```javascript
////////////////////////////////////
// Enhanced Game Verification

console.log('🎮 Enhanced Game Complete!');
console.log('✅ Score tracking working');
console.log('✅ Win/lose conditions implemented');
console.log('✅ Game restart functionality working');
console.log('✅ Complete game experience ready');
console.log('Ready for visual polish in Hour 3!');

// Test your complete game
console.log('Test: Try to win, try to lose, then restart!');
```

## ✅ What’s Working Now vs Coming Next (end of Hour 2)

What works now:

- Score decreases on wrong guesses; score display updates
- Win detection updates UI, reveals number, disables controls, updates highscore
- Lose detection ends game at score 0; reveals number; disables controls
- Restart resets state and UI

Not yet (coming next):

- Visual feedback/polish (background changes)
- Input validation for empty/out-of-range
- Refactoring and small UX improvements

Coming next:

- Hour 3: input validation and visual polish
- Hour 4: refactor and UX enhancements

## 📊 Git Commit Time!

Now let's save this enhanced game to your portfolio:

### **Commit Your Enhanced Game**

```bash
git add .
git commit
```

**📝 Copy this commit message:**

```
feat: implement complete game mechanics with win/lose conditions

- Add score tracking and decrementing for wrong guesses
- Implement win condition with highscore tracking and game state management
- Add lose condition when score reaches zero with proper game ending
- Create game restart functionality with complete state reset
- Build professional game experience with complete user interaction flow
```

```bash
git push origin main
```

## 🔧 Troubleshooting Common Issues

### **Score never changes?**

- Check that you added `score--;` to both 'too high' and 'too low' conditions
- Make sure you added `document.querySelector('.score').textContent = score;` after score decrements
- Verify score decrementing is inside the else if blocks

### **Can't win the game?**

- Check that win condition logic is inside the 'correct guess' if block
- Make sure highscore update logic is correct
- Verify input and button are disabled after winning

### **Can't lose the game?**

- Check that lose condition checks `score < 1`
- Make sure lose condition is after score decrementing
- Verify input and button are disabled after losing

### **'Again!' button doesn't work?**

- Check that event listener is added to '.again' button
- Make sure all game state variables are reset
- Verify input and button are re-enabled

## 🎯 Check Your Understanding

Before moving to Hour 3, make sure you can:

- [ ] Track and decrement score for wrong guesses
- [ ] Implement win condition with highscore tracking
- [ ] Add lose condition when score reaches zero
- [ ] Create game restart functionality with complete state reset
- [ ] Build a complete, professional game experience

### Quick Quiz:

1. How do you decrement a score variable?
2. What happens when a player wins the game?
3. What happens when a player loses the game?
4. How do you disable an input element?
5. What does the 'Again!' button do?

### Quiz Answers:

1. `score--;` or `score = score - 1;`
2. Highscore is updated, win message is shown, input/button are disabled
3. Lose message is shown, secret number is revealed, input/button are disabled
4. `element.disabled = true;`
5. Resets all game state and allows players to play again

## 🎯 What's Next in Hour 3?

You now have a complete, functional game! Hour 3 will add the visual polish:

- **Visual feedback** with style changes and animations
- **Input validation** and error handling
- **Professional styling** and user experience enhancements
- **Advanced features** and game improvements
- **Complete visual polish** for a professional finish

You'll transform your working game into a visually stunning, professional experience!

## ✅ Success Checklist for Hour 2

**Game Mechanics:**

- [ ] Score decreases with wrong guesses
- [ ] Win condition works correctly
- [ ] Lose condition works correctly
- [ ] Game restart functionality works
- [ ] Complete game cycle is functional

**Professional Skills:**

- [ ] Code is organized and readable
- [ ] Game state is properly managed
- [ ] User experience is complete
- [ ] Game feels professional and polished
- [ ] Ready for visual enhancements

## 📚 Key Concepts Summary

| Concept              | Purpose               | Example                       |
| -------------------- | --------------------- | ----------------------------- |
| **Score Tracking**   | Track player progress | `score--;`                    |
| **Win Condition**    | Detect victory        | `if (guess === secretNumber)` |
| **Lose Condition**   | Detect defeat         | `if (score < 1)`              |
| **Game Restart**     | Reset for new game    | `score = 20;`                 |
| **State Management** | Control game flow     | `element.disabled = true;`    |

**Remember: You've built a complete, professional game! This is exactly how real games work with proper win/lose conditions and restart functionality.**

🚀 **Congratulations! You now have a fully functional game with complete user interaction!**
