## What You'll Learn Today

By the end of this hour, you'll be able to:

- Select DOM elements using querySelector and getElementById
- Modify element content with innerHTML, textContent, and innerText
- Change element styles dynamically with the style property
- Add event listeners for user interaction (click, input, keydown)
- Build a complete interactive web application from scratch
- Combine all previous concepts: functions, arrays, objects, and DOM manipulation

## Quick Review: Hour 3 Foundation

Before we start, make sure you remember:

- Object creation with properties and methods
- Property access with dot and bracket notation
- The 'this' keyword for self-reference in methods
- Complex data structures with nested objects and arrays

**Ready to make web pages interactive? Let's learn DOM manipulation!**

## What is the DOM?

The **DOM (Document Object Model)** is how JavaScript talks to HTML. Think of it as a bridge that lets JavaScript read, change, and react to everything users see on a web page.

**Key Concepts:**

- **DOM = Document Object Model** - JavaScript's interface to HTML
- **Every HTML element** becomes a JavaScript object
- **Real-time updates** - changes happen instantly in the browser

### Our HTML Structure

Before we start manipulating elements, let's look at the HTML we'll be working with:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript DOM Manipulation</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>JavaScript DOM Manipulation</h1>
    <p class="message">Start interacting!</p>
    <button id="btn">Click Me!</button>
    <input type="text" class="guess" placeholder="Enter text" />
    <div class="score">Score: <span class="score-value">0</span></div>

    <script src="script.js"></script>
  </body>
</html>
```

**JavaScript can select any of these elements and change their content, style, or behavior!**

## Selecting DOM Elements

Before we can change anything, we need to select it. JavaScript has several methods to grab HTML elements.

### querySelector - Most Versatile Method

```javascript
////////////////////////////////////
// Selecting DOM Elements

// querySelector - works with any CSS selector
const message = document.querySelector(".message"); // Select by class
const button = document.querySelector("#btn"); // Select by ID
const heading = document.querySelector("h1"); // Select by tag
const input = document.querySelector(".guess"); // Select by class

console.log(message);
console.log(button);
console.log(heading);
```

**Key Points:**

- **Uses CSS selectors** - classes (.class), IDs (#id), tags (h1), anything!
- **Returns the first matching element** as a JavaScript object
- **Most flexible method** - works with any CSS selector

### querySelector Examples

```javascript
// Different selector types
document.querySelector(".className"); // Class selector
document.querySelector("#idName"); // ID selector
document.querySelector("tagName"); // Tag selector
document.querySelector('[type="text"]'); // Attribute selector
document.querySelector("div p"); // Descendant selector
```

### getElementById - Classic Method

```javascript
// getElementById - only works with IDs
const buttonById = document.getElementById("btn");
console.log(buttonById);
console.log(buttonById === button); // Same element, different method
```

**When to use:**

- **querySelector**: Default choice - more flexible
- **getElementById**: When you specifically need an element by ID only

### querySelectorAll - Select Multiple Elements

```javascript
// querySelectorAll - gets ALL matching elements
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs); // NodeList (like an array)
console.log(allParagraphs[0]); // First paragraph
console.log(allParagraphs.length); // Number of paragraphs
```

**Important:** `querySelectorAll` returns a **NodeList** - similar to an array but with some differences.

## Your Turn: Practice Element Selection

### Exercise 1: Element Selection Practice

```javascript
// Practice selecting elements:
// 1. Select the element with class 'guess' and log it
// 2. Select the element with ID 'btn' using both querySelector and getElementById
// 3. Select all span elements and log the collection
// 4. Select the first span element and log its textContent
// 5. Experiment with different CSS selectors

// Your code here...
const guessInput = document.querySelector(".guess");
console.log(guessInput);

// Method 1: querySelector
const buttonQuery = document.querySelector("#btn");
// Method 2: getElementById
const buttonById = document.getElementById("btn");
console.log(buttonQuery === buttonById); // Should be true

// Select all spans
const allSpans = document.querySelectorAll("span");
console.log(allSpans);

// Select first span
const firstSpan = document.querySelector("span");
console.log(firstSpan.textContent);
```

## Modifying Element Content

Now that we can select elements, let's change what users see! JavaScript can modify text, HTML content, and visual styles in real-time.

### Text Content Methods

```javascript
////////////////////////////////////
// Modifying Element Content

const message = document.querySelector(".message");

// textContent - gets/sets just the text, no HTML
console.log(message.textContent); // "Start interacting!"
message.textContent = "Hello from JavaScript!";

// innerHTML - includes HTML tags (more powerful but be careful)
message.innerHTML = "<strong>Bold text from JS!</strong>";

// innerText - respects styling (what user actually sees)
console.log(message.innerText);
```

**Method Differences:**
| Method | Purpose | HTML Tags |
|--------|---------|-----------|
| `textContent` | Plain text only | Ignored/escaped |
| `innerHTML` | HTML content | Processed as HTML |
| `innerText` | Visible text only | Ignored, respects CSS |

### Working with Input Elements

```javascript
// Input elements use .value property, not textContent
const input = document.querySelector(".guess");

console.log(input.value); // Current input value
input.value = "Default text"; // Set input value
input.placeholder = "Type here"; // Change placeholder
```

**Important:** Form elements (input, textarea, select) use the `.value` property instead of `.textContent`.

### Dynamic Style Changes

```javascript
// Changing element styles with the style property
const heading = document.querySelector("h1");

heading.style.color = "red";
heading.style.backgroundColor = "yellow"; // Note: camelCase!
heading.style.fontSize = "3rem";
heading.style.padding = "20px";
heading.style.borderRadius = "10px";
```

**CSS Property Names in JavaScript:**

- **CSS:** `background-color` → **JavaScript:** `backgroundColor`
- **CSS:** `font-size` → **JavaScript:** `fontSize`
- **CSS:** `border-radius` → **JavaScript:** `borderRadius`

**Rule:** Multi-word CSS properties become camelCase in JavaScript.

## Your Turn: Practice Content Manipulation

### Exercise 2: Content and Style Practice

```javascript
// Practice content and style manipulation:
// 1. Change the h1 text to your name
// 2. Make the button's background color blue and text white
// 3. Set a placeholder text in the input field
// 4. Change the message text to include HTML bold formatting
// 5. Make the score display larger and a different color

// Your code here...
const heading = document.querySelector("h1");
const button = document.querySelector("#btn");
const input = document.querySelector(".guess");
const message = document.querySelector(".message");
const scoreValue = document.querySelector(".score-value");

// 1. Change h1 text
heading.textContent = "Your Name Here";

// 2. Style the button
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.padding = "10px 20px";
button.style.border = "none";
button.style.borderRadius = "5px";

// 3. Set placeholder
input.placeholder = "Type something cool...";

// 4. HTML formatting in message
message.innerHTML = "This is <strong>bold</strong> text from JavaScript!";

// 5. Style the score
scoreValue.style.fontSize = "2rem";
scoreValue.style.color = "green";
scoreValue.style.fontWeight = "bold";
```

## Event Listeners and User Interaction

Static changes are just the beginning. Real applications respond to user actions - clicks, typing, key presses. Event listeners are how JavaScript "listens" for and responds to user interactions.

### Click Events

```javascript
////////////////////////////////////
// Event Listeners - User Interaction

const button = document.querySelector("#btn");
const message = document.querySelector(".message");

// addEventListener - the modern way to handle events
button.addEventListener("click", function () {
  console.log("Button was clicked!");
  message.textContent = "You clicked the button!";
  message.style.color = "green";
});
```

**Event Listener Syntax:**

```javascript
element.addEventListener("eventType", function () {
  // Code to run when event happens
});
```

### Click Counter Example

```javascript
// Event listener with state management
let clickCount = 0;

button.addEventListener("click", function () {
  clickCount++;
  button.textContent = `Clicked ${clickCount} times`;
  button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
});
```

### Input Events - Real-time Typing Response

```javascript
// Input events fire every time user types
const input = document.querySelector(".guess");

input.addEventListener("input", function () {
  const userText = input.value;
  message.textContent = `You typed: ${userText}`;
  message.style.fontSize = `${userText.length + 10}px`;
});
```

**Common Input Events:**

- `'input'` - Fires on every character change
- `'change'` - Fires when input loses focus
- `'focus'` - Fires when input is clicked/selected
- `'blur'` - Fires when input loses focus

### Keyboard Events

```javascript
// Keyboard events - responding to specific keys
input.addEventListener("keydown", function (event) {
  console.log(`Key pressed: ${event.key}`);

  if (event.key === "Enter") {
    message.textContent = `You pressed Enter! Text was: ${input.value}`;
    input.value = ""; // Clear input
  }
});

// Global keyboard events
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    // Reset everything
    message.textContent = "Reset with Escape key!";
    input.value = "";
    clickCount = 0;
    button.textContent = "Click Me!";
  }
});
```

**Event Parameter:**
The `event` parameter contains information about what happened:

- `event.key` - Which key was pressed
- `event.target` - Which element triggered the event
- `event.type` - What type of event occurred

### Common Event Types

| Event Type    | When It Fires        | Use Case                           |
| ------------- | -------------------- | ---------------------------------- |
| `'click'`     | Mouse click          | Buttons, links, clickable elements |
| `'input'`     | Text input changes   | Real-time text processing          |
| `'keydown'`   | Key is pressed down  | Keyboard shortcuts                 |
| `'mouseover'` | Mouse enters element | Hover effects                      |
| `'submit'`    | Form is submitted    | Form handling                      |

## Your Turn: Practice Event Listeners

### Exercise 3: Event Listener Practice

```javascript
// Practice event listeners:
// 1. Add a click event to the h1 that changes its color
// 2. Create an input event that displays character count as user types
// 3. Add a keydown event that responds to the spacebar
// 4. Make the button change its text when hovered (mouseover event)
// 5. Create a double-click event that does something special

// Your code here...
const heading = document.querySelector("h1");
const input = document.querySelector(".guess");
const button = document.querySelector("#btn");
const message = document.querySelector(".message");

// 1. Click event on h1
heading.addEventListener("click", function () {
  heading.style.color = "purple";
});

// 2. Character count display
input.addEventListener("input", function () {
  const count = input.value.length;
  message.textContent = `Character count: ${count}`;
});

// 3. Spacebar response
document.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    message.textContent = "Spacebar pressed!";
  }
});

// 4. Hover effect
button.addEventListener("mouseover", function () {
  button.textContent = "Hovering!";
});

button.addEventListener("mouseout", function () {
  button.textContent = "Click Me!";
});

// 5. Double-click event
heading.addEventListener("dblclick", function () {
  heading.textContent = "Double-clicked!";
  heading.style.backgroundColor = "lightblue";
});
```

## Final Project: Interactive Score Tracker

Time for the grand finale! You'll build a complete Interactive Score Tracker that combines everything from all 4 hours: functions, arrays, objects, and DOM manipulation.

### Project Overview

You'll create a score tracking application with:

- Two players with individual scores
- Buttons to add points for each player
- Customizable winning score
- Winner detection and celebration
- Reset functionality
- Keyboard shortcuts

### HTML Structure

First, let's set up the HTML structure in your `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Interactive Score Tracker</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="scoreTracker">
      <h1>⚡ Interactive Score Tracker</h1>
      <div class="players">
        <div class="player player-1">
          <h2>Player 1</h2>
          <div class="score" id="score-1">0</div>
          <button class="btn-add" data-player="1">+1 Point</button>
        </div>
        <div class="player player-2">
          <h2>Player 2</h2>
          <div class="score" id="score-2">0</div>
          <button class="btn-add" data-player="2">+1 Point</button>
        </div>
      </div>
      <div class="controls">
        <button id="btn-reset">🔄 Reset Game</button>
        <input type="number" id="winning-score" value="5" min="1" max="20" />
        <label for="winning-score">Points to Win</label>
      </div>
      <div class="game-info">
        <p class="status">First to <span class="target">5</span> wins!</p>
        <p class="winner hidden">
          🎉 <span class="winner-name">Player</span> Wins!
        </p>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

### CSS Styling (Optional Enhancement)

Add this to your `style.css` for better visual presentation:

```css
body {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  min-height: 100vh;
  padding: 20px;
}

.players {
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
}

.player {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  margin: 10px;
  flex: 1;
}

.score {
  font-size: 4rem;
  font-weight: bold;
  margin: 20px 0;
}

button {
  background: #4caf50;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  margin: 10px;
}

button:hover {
  background: #45a049;
  transform: translateY(-2px);
}

.controls {
  margin: 30px 0;
}

input {
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin: 0 10px;
  text-align: center;
  width: 60px;
}

.hidden {
  display: none;
}

.player.winner {
  background: linear-gradient(135deg, #4caf50, #45a049);
  transform: scale(1.05);
}

.player.loser {
  opacity: 0.5;
}

.winner {
  font-size: 1.5rem;
  margin: 20px 0;
}
```

### JavaScript Implementation

Now let's build the complete application in your `script.js`:

```javascript
// Code here
```

### How It All Works Together

This project demonstrates all concepts from JavaScript Fundamentals Part 2:

**Functions:**

- `addPoint()` - Reusable logic for scoring
- `showWinner()` - Separated winner display logic

**Arrays:**

- `gameState.scores` - Managing multiple player data
- `document.querySelectorAll()` - Working with multiple elements

**Objects:**

- `gameState` object with properties and methods
- Professional state management patterns

**DOM Manipulation:**

- Element selection with `querySelector`
- Content updates with `textContent`
- Style changes with `classList` and direct style properties
- Event handling with `addEventListener`

## Testing Your Application

### Manual Testing Checklist

Test these features to ensure everything works:

- [ ] Click "+1 Point" buttons - scores should increase
- [ ] Keyboard shortcuts (1, 2, R) work correctly
- [ ] Winner detection works at target score
- [ ] Winner display shows correct player
- [ ] Reset button restores everything to initial state
- [ ] Changing target score updates display and logic
- [ ] Visual effects (winner styling, background change) work
- [ ] All event listeners respond correctly

### Common Issues and Solutions

**Scores not updating?**

- Check that `gameState.updateDisplay()` is being called
- Verify element IDs match your HTML

**Keyboard shortcuts not working?**

- Make sure event listener is attached to `document`
- Check `event.key` values in console

**Winner detection broken?**

- Verify `checkWinner()` logic and conditions
- Ensure `gameActive` flag is being set correctly

**Styles not applying?**

- Check CSS class names match JavaScript
- Verify CSS file is linked properly

## Complete Hour 4 Code

Your final `script.js` should include all the concepts from this hour:

```javascript
// JavaScript Fundamentals Part 2 - Hour 4
```

## Save Your Progress with Git - Course Completion!

Congratulations! You've completed JavaScript Fundamentals Part 2 and built a fully interactive web application!

```bash
git add .
git commit
```

**Copy this commit message:**

```
feat: complete DOM manipulation and interactive features

- Add DOM element selection with querySelector and getElementById
- Implement content manipulation with textContent, innerHTML, and style properties
- Create event-driven programming with click, input, and keyboard event listeners
- Build complete Interactive Score Tracker combining all JavaScript fundamentals
- Establish professional web application development patterns and user experience
```

```bash
git push origin main
```

Your complete JavaScript fundamentals journey is now in your portfolio!

## Troubleshooting Common Issues

### Element Selection Problems

**querySelector returns null?**

- Check that the HTML element exists
- Verify your CSS selector syntax
- Ensure your script runs after the HTML loads

**Can't find elements by ID?**

- Double-check the ID spelling in both HTML and JavaScript
- Make sure IDs are unique (no duplicates)

### Event Listener Issues

**Click events not working?**

- Verify addEventListener syntax: `addEventListener('click', function() {})`
- Check that you're selecting the right element
- Make sure the element exists when you attach the listener

**Keyboard events not responding?**

- Attach keyboard events to `document` for global shortcuts
- Use `event.key` to check which key was pressed
- Remember key names are case-sensitive

### Style Changes Not Visible

**CSS properties not applying?**

- Use camelCase: `backgroundColor` not `background-color`
- Check for typos in property names
- Verify you're selecting the correct element

### Game Logic Problems

**Scores not updating correctly?**

- Ensure `updateDisplay()` is called after score changes
- Check that array indexes are correct (0-based)
- Verify the HTML elements have the right IDs

## Check Your Understanding

Before considering yourself finished, make sure you can:

- [ ] Select any HTML element using querySelector
- [ ] Modify text content and HTML content of elements
- [ ] Change element styles dynamically with JavaScript
- [ ] Add event listeners for different event types
- [ ] Build interactive applications that respond to user input
- [ ] Combine functions, objects, and DOM manipulation effectively

### Final Quiz:

1. What's the difference between textContent and innerHTML?
2. Which CSS property name would you use in JavaScript for `font-size`?
3. How do you add an event listener for a click event?
4. What property do you use to get the value from an input element?
5. How do you select all elements with a class name?

### Quiz Answers:

1. textContent sets plain text only; innerHTML can include HTML tags
2. `fontSize` (camelCase conversion)
3. `element.addEventListener('click', function() {})`
4. `element.value`
5. `document.querySelectorAll('.className')`

## Course Completion - You Did It!

**Congratulations!** You've completed JavaScript Fundamentals Part 2!

### What You've Accomplished:

**Hour 1: Functions**

- Created reusable code with parameters and return values
- Mastered function scope and variable management
- Built a professional BMI calculator system

**Hour 2: Arrays**

- Managed collections of data with array methods
- Implemented data processing with loops and iteration
- Created a comprehensive student grade management system

**Hour 3: Objects**

- Modeled real-world entities with properties and methods
- Used the 'this' keyword for object self-reference
- Built a complex user profile system with social features

**Hour 4: DOM Manipulation**

- Connected JavaScript to HTML for interactive web pages
- Handled user events and real-time interactions
- Created a complete Interactive Score Tracker application

### You're Now a JavaScript Developer Who Can:

- Write clean, modular code using functions
- Manage complex data with arrays and objects
- Create interactive, responsive web applications
- Solve real-world problems with programming logic
- Build professional-quality applications from scratch

### Your Next Steps:

- **Practice**: Build more projects to reinforce these skills
- **Explore**: Learn ES6+ features like arrow functions and destructuring
- **Advance**: Study asynchronous JavaScript, APIs, and frameworks
- **Create**: Start building your own original web applications

**Keep coding, keep learning, and most importantly - keep building amazing things!**

## Key Concepts Summary

| Concept                      | Purpose                 | Example                                 |
| ---------------------------- | ----------------------- | --------------------------------------- |
| **querySelector**            | Select HTML elements    | `document.querySelector('.class')`      |
| **textContent**              | Get/set plain text      | `element.textContent = 'Hello'`         |
| **innerHTML**                | Get/set HTML content    | `element.innerHTML = '<b>Bold</b>'`     |
| **style property**           | Change CSS styles       | `element.style.color = 'red'`           |
| **addEventListener**         | Handle user events      | `element.addEventListener('click', fn)` |
| **Event-driven programming** | Respond to user actions | Click, input, keyboard events           |

**Remember: DOM manipulation connects JavaScript to HTML, making static web pages come alive with interactivity!**
