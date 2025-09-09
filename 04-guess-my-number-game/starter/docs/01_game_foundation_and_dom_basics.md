## 🎯 What You'll Learn This Hour:

- Master DOM element selection and manipulation with `querySelector` and `querySelectorAll`
- Understand game state management with variables and data persistence
- Create the basic game structure and implement core game mechanics
- Build your first interactive web game from scratch
- Apply JavaScript fundamentals to real-world game development

## Quick Review: Previous Course Foundation

Before we start, make sure you remember:

- Variables: `let`, `const`, data types
- Functions: declarations, expressions, parameters, return values
- Arrays: creation, methods, iteration
- Objects: properties, methods, the `this` keyword
- Basic DOM manipulation from previous lessons

**Ready to build your first complete game? Let's create something amazing!**

## 📊 Progress Tracker

- [ ] **Hour 1:** Game Foundation & DOM Basics ← _You are here_
- [ ] **Hour 2:** Event Handling & User Interaction
- [ ] **Hour 3:** Advanced Game Features & Polish
- [ ] **Hour 4:** Code Organization & Professional Development

## ⏰ Session Timeline

- Opening: Game Development Reality
- Section 1: DOM Element Selection Mastery
- Section 2: Game State Management
- Section 3: Basic Game Logic Implementation

## 🛠️ Setup Your Game Development Environment

### Step 1: Add Game Development to Your Course

1. **Download Game Development zip file** (provided by instructor)
2. **Extract the contents** to get `04-guess-my-number-game` folder
3. **Move the folder** into your existing `javascript-course` directory:
   ```
   javascript-course/
   ├── 01-fundamentals-part-1/     (from Part 1)
   ├── 02-fundamentals-part-2/     (from Part 2)
   ├── 03-developer-skills/        (from Developer Skills)
   └── 04-guess-my-number-game/    (new Game Development folder)
   ```

### Step 2: Open Game Development in VS Code

- **File → Open Folder**
- Navigate to `javascript-course/04-guess-my-number-game/starter`
- Click "Select Folder"

### Step 3: Add to Your Repository

**In VS Code Terminal (Ctrl+`):**

```bash
# Navigate up to main javascript-course folder
cd ../..

# Add the new Game Development folder
git add 04-guess-my-number-game/
git commit -m "feat: add Guess My Number Game starter files and documentation"
git push origin main
```

### Step 4: Verify Your Setup

**You should see this structure:**

```
04-guess-my-number-game/
└── starter/
    ├── index.html
    ├── script.js
    ├── style.css
    └── docs/
        ├── 01_game_foundation_and_dom_basics.md
        ├── 02_event_handling_and_user_interaction.md
        ├── 03_advanced_game_features_and_polish.md
        └── 04_code_organization_and_professional_development.md
```

### Step 5: Test Your Current Setup

Let's start by understanding what we're building:

```javascript
// Game Development Hour 1 - Game Foundation & DOM Basics
'use strict';

console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

/*
What We're Building Today:
- A complete "Guess My Number" game
- Player guesses a number between 1-20
- Game provides feedback: "Too high!" or "Too low!"
- Score tracking and high score system
- Visual feedback and professional polish

This teaches us DOM manipulation - how JavaScript talks to HTML!
*/

console.log('Goal: Build a complete interactive game from scratch');
console.log('Focus: DOM manipulation, game state, and user interaction');
```

**Verify it works:**

- Open `index.html` in browser
- Press F12 for Developer Tools
- Check Console tab
- Should see: "=== GAME DEVELOPMENT: GUESS MY NUMBER ==="

**🎯 Current State:** We have a beautiful game interface, but it doesn't work yet. By the end of this hour, it will be fully interactive!

## 📦 Section 1: DOM Element Selection Mastery

### **Understanding the DOM (Document Object Model)**

The DOM is how JavaScript talks to HTML. Every HTML element becomes a JavaScript object that we can manipulate.

**Why This Matters:** After setting up our HTML structure, we need a way to select and modify elements with JavaScript. This is how we'll make the game interactive - by changing the message, score, and other elements based on what the player does.

### **Basic Element Selection**

```javascript
////////////////////////////////////
// DOM Element Selection - The Foundation
console.log('=== DOM ELEMENT SELECTION ===');

// Select elements by class name
const messageEl = document.querySelector('.message');
console.log(messageEl); // Shows the HTML element

// Select elements by class name
const scoreEl = document.querySelector('.score');
console.log(scoreEl);

// Select input elements
const guessEl = document.querySelector('.guess');
console.log(guessEl);
```

**Key Points:**

- `document.querySelector('.class')` finds HTML elements by class name
- Elements are JavaScript objects with properties and methods
- We can read and modify these elements with JavaScript

**Why We Need This:** We need to find the message element so we can change what it says when the player guesses. This is how we'll provide feedback to the player.

### **Reading and Modifying Element Content**

```javascript
// Reading element content
console.log('Current message:', messageEl.textContent);
console.log('Current score:', scoreEl.textContent);

// Modifying element content
messageEl.textContent = 'Hello from JavaScript!';
scoreEl.textContent = '15';

console.log('Elements updated!');
```

**Why This Matters:** We need to understand how to read the current text so we can modify it later. This is how we'll update the game message when the player makes a guess - we'll change this text to show 'Too high!' or 'Correct!'

**Different Content Properties:**

- `textContent` - Plain text only
- `innerHTML` - HTML content (can include tags)
- `value` - For input elements

### **Working with Input Elements**

```javascript
// Input elements use .value property
const guessInput = document.querySelector('.guess');

// Reading input value
console.log('Current guess:', guessInput.value);

// Setting input value
guessInput.value = '10';
console.log('Guess set to:', guessInput.value);
```

## 🎯 Your Turn: Practice DOM Selection

### Exercise: Element Manipulation Practice

```javascript
// Practice selecting and modifying elements:
// 1. Select the number display and change it to 15
// 2. Select the highscore and set it to 100
// 3. Select the guess input and set a value
// 4. Log all the elements to the console

// Your code here...
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessInput = document.querySelector('.guess');

numberEl.textContent = 15;
highscoreEl.textContent = 100;
guessInput.value = 7;

console.log('Number:', numberEl);
console.log('Highscore:', highscoreEl);
console.log('Guess:', guessInput);
```

## 🎮 Section 2: Game State Management

### **Understanding Game State**

Every game needs to remember important information. This is called "game state" - the memory of our game.

**Why This Matters:** After setting up our DOM selection, we need a way to track the game's data. The game needs to remember what the secret number is, what the current score is, and what the high score is. Without these variables, the game wouldn't know if the player guessed correctly or how to keep score.

### **Creating Game State Variables**

```javascript
////////////////////////////////////
// Game State Variables - The Game's Memory

// Step 1: Create the secret number (random between 1-20)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret number:', secretNumber); // For debugging only!

// Step 2: Track the player's score
let score = 20;

// Step 3: Track the high score
let highscore = 0;
```

**Understanding Each Variable:**

- **Secret Number:** This is the number the player needs to guess. We need to generate a random number between 1 and 20 each time the game starts.
- **Score:** The player starts with 20 points, and we'll subtract points for each wrong guess. This creates urgency and makes the game more challenging.
- **High Score:** This remembers the best score the player has achieved, so they can try to beat their personal best.

// Step 4: Display initial state
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized!');
console.log('Secret:', secretNumber, 'Score:', score, 'Highscore:', highscore);

````

**Why We Display Initial State:** After creating our variables, we need to show them on the screen so the player can see their current score and high score. This makes the game interface complete and functional.

**Understanding Random Numbers:**

- `Math.random()` gives us 0 to 0.999...
- Multiply by 20 to get 0 to 19.999...
- `Math.trunc()` removes decimals, giving us 0 to 19
- Add 1 to get 1 to 20

### **Why We Use `let` Instead of `const`**

```javascript
// These values will change during the game
let secretNumber = Math.trunc(Math.random() * 20) + 1; // New game = new number
let score = 20; // Wrong guesses reduce this
let highscore = 0; // Best score achieved

// We can't use const because these values change!
// const secretNumber = 15; // This would never change
````

## 🎯 Your Turn: Practice Game State

### Exercise: Create Your Own Game Variables

```javascript
// Create your own game state variables:
// 1. Create a player name variable
// 2. Create an attempts counter
// 3. Create a game active boolean
// 4. Create a random number between 1-10 (easier for testing)
// 5. Display all variables in the console

// Your code here...
let playerName = 'Player';
let attempts = 0;
let gameActive = true;
let easySecret = Math.trunc(Math.random() * 10) + 1;

console.log('Player:', playerName);
console.log('Attempts:', attempts);
console.log('Game active:', gameActive);
console.log('Easy secret number:', easySecret);
```

## 🎮 Section 3: Basic Game Logic Implementation

### **Making the Game Interactive**

Now we'll make the "Check!" button actually do something when clicked.

**Why This Matters:** After setting up our DOM elements and game state, we need a way to make the game actually work. When the player clicks the Check button, we need to compare their guess with the secret number and give them feedback. This is the heart of our game logic.

### **Event Listeners - Making Buttons Work**

```javascript
////////////////////////////////////
// Event Listeners - Making Buttons Interactive

// Add click event to the Check button
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');

  // Get the player's guess and convert to number
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  // Basic game logic - check if guess is correct
  if (guess === secretNumber) {
    console.log('Correct guess!');
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < secretNumber) {
    console.log('Too low!');
    document.querySelector('.message').textContent = '📉 Too low!';
  }
});
```

**Understanding Event Listeners:**

- `addEventListener('click', function() {})` makes buttons respond to clicks
- The function runs every time the button is clicked
- We can put any code inside this function

**Why We Need This:** We need to tell the button what to do when it's clicked. This is how we make the button respond to user interaction. When the button is clicked, we need to read what number the player typed in the input field and compare it with our secret number.

### **Input Validation and Type Conversion**

```javascript
// Always convert input to number for comparison
const guess = Number(document.querySelector('.guess').value);

// Why we need Number():
console.log('Input as string:', document.querySelector('.guess').value); // "15"
console.log('Input as number:', Number(document.querySelector('.guess').value)); // 15
console.log('String comparison:', '15' === 15); // false
console.log('Number comparison:', 15 === 15); // true
```

**Why We Need Number():** We also need to convert the input from text to a number so we can compare it properly. Input values are always strings, but we need numbers for comparison.

## 🎯 Your Turn: Practice Game Logic

### Exercise: Test Your Game

```javascript
// Test your game logic:
// 1. Enter a number in the input field
// 2. Click the "Check!" button
// 3. Try numbers higher than the secret number
// 4. Try numbers lower than the secret number
// 5. Try to guess the correct number
// 6. Watch the console for debugging information

// Your game should now respond to button clicks!
// Check the console to see the secret number for testing
```

## 🏆 Hour 1 Complete! Your Basic Game

### **Final Verification Code**

Add this summary to confirm everything is working:

```javascript
////////////////////////////////////
// Game Foundation Verification

console.log('🎮 Game Foundation Complete!');
console.log('✅ DOM element selection working');
console.log('✅ Game state variables initialized');
console.log('✅ Event listeners responding');
console.log('✅ Basic game logic implemented');
console.log('Ready for advanced features in Hour 2!');

// Test your game one more time
console.log('Secret number for testing:', secretNumber);
console.log('Try to guess it!');
```

## ✅ What’s Working Now vs Coming Next (end of Hour 1)

What works now:

- Select elements, update UI with `textContent`
- Read input and compare guesses (equal / too high / too low)
- Reveal the secret number on correct guess

Not yet (coming in the next hours):

- Score/highscore and win/lose lockout
- Input validation and 1–20 range enforcement
- Visual feedback/polish and restart button wiring

Coming next:

- Hour 2: score, win/lose, restart
- Hour 3: validation and visual polish
- Hour 4: refactor for clean, professional code

## 📊 Git Commit Time!

Now let's save this game foundation to your portfolio:

### **Commit Your Game Foundation**

```bash
git add .
git commit
```

**📝 Copy this commit message:**

```
feat: implement game foundation and DOM basics

- Master DOM element selection with querySelector and querySelectorAll
- Create game state management with variables and data persistence
- Implement basic game logic with event listeners and conditional statements
- Build interactive "Guess My Number" game foundation with core mechanics
- Establish professional game development patterns and user interaction
```

```bash
git push origin main
```

## 🔧 Troubleshooting Common Issues

### **Button not responding to clicks?**

- Check event listener syntax: `addEventListener('click', function() {})`
- Make sure you're selecting the right element: `document.querySelector('.check')`
- Check console for JavaScript errors

### **Game always says "Too high" or "Too low"?**

- Make sure you're using `Number()` to convert input: `Number(document.querySelector('.guess').value)`
- Use `===` for comparison, not `==`
- Check that secret number is being generated correctly

### **Elements not updating on screen?**

- Verify class names match HTML exactly (case-sensitive!)
- Make sure you're using the right property: `textContent` for text, `value` for inputs
- Check that elements exist in the HTML

### **Console shows errors?**

- Check all quotes and brackets are properly closed
- Make sure class names match HTML exactly
- Verify JavaScript syntax is correct

## 🎯 Check Your Understanding

Before moving to Hour 2, make sure you can:

- [ ] Select HTML elements using `querySelector`
- [ ] Read and modify element content with `textContent` and `value`
- [ ] Create and manage game state variables
- [ ] Add event listeners to make buttons interactive
- [ ] Implement basic conditional logic for game rules
- [ ] Build a working game that responds to user input

### Quick Quiz:

1. How do you select an HTML element by class name?
2. What's the difference between `textContent` and `value`?
3. Why do we use `let` instead of `const` for game variables?
4. How do you make a button respond to clicks?
5. Why do we convert input to numbers before comparing?

### Quiz Answers:

1. `document.querySelector('.class-name')`
2. `textContent` is for text content, `value` is for input elements
3. Because game variables change during gameplay
4. `element.addEventListener('click', function() {})`
5. Because input values are strings, but we need numbers for comparison

## 🎯 What's Next in Hour 2?

You now have a working game foundation! Hour 2 will add the missing pieces:

- **Score tracking and decrementing** when guesses are wrong
- **Win/lose detection** and game state management
- **Visual feedback** with style changes and animations
- **Input validation** and error handling
- **Complete game experience** with all features working

You'll transform your basic game into a fully polished, professional experience!

## ✅ Success Checklist for Hour 1

**DOM Skills:**

- [ ] Can select any HTML element using `querySelector`
- [ ] Can read and modify element content
- [ ] Understand the difference between `textContent` and `value`
- [ ] Can work with input elements correctly

**Game Development:**

- [ ] Can create and manage game state variables
- [ ] Can implement basic game logic with conditionals
- [ ] Can make buttons respond to user clicks
- [ ] Can build a working interactive game

**Professional Skills:**

- [ ] Code is organized and readable
- [ ] Console logging used for debugging
- [ ] Game responds correctly to user input
- [ ] Ready to build advanced features

## 📚 Key Concepts Summary

| Concept             | Purpose                   | Example                                |
| ------------------- | ------------------------- | -------------------------------------- |
| **DOM Selection**   | Find HTML elements        | `document.querySelector('.class')`     |
| **Element Content** | Read/modify text          | `element.textContent = 'Hello'`        |
| **Input Values**    | Work with form inputs     | `input.value = '10'`                   |
| **Event Listeners** | Make elements interactive | `button.addEventListener('click', fn)` |
| **Game State**      | Track game data           | `let score = 20;`                      |
| **Random Numbers**  | Generate random values    | `Math.trunc(Math.random() * 20) + 1`   |

**Remember: You've built the foundation of a real game! This is exactly how professional developers create interactive web applications.**

🚀 **Congratulations! You now have a working game foundation and understand how JavaScript brings web pages to life!**
