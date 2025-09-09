## 🎯 What You'll Learn This Hour:

- Add visual feedback with dynamic style changes
- Implement input validation and user-friendly error messages
- Apply final polish for a professional game feel
- Strengthen DOM manipulation with styling and state resets
- Prepare your project for Hour 4 improvements

## Quick Review: Where You Are

- [x] Hour 1: Game foundation and DOM basics
- [x] Hour 2: Score, win/lose, restart (complete mechanics)
- [ ] Hour 3: Advanced features and polish ← you are here
- [ ] Hour 4: Code organization and professional development

## ⏰ Session Timeline

- Opening: Advanced Features & Polish
- Section 1: Visual Feedback & Style Changes
- Section 2: Input Validation & Error Handling
- Section 3: Final Polish & Professional Touches

## 🎨 Section 1: Visual Feedback & Style Changes

### Why This Matters

Games should feel responsive. Visual feedback (colors, styles) helps players immediately understand what happened (win/lose/neutral).

- Green: success (win)
- Red: failure (lose)
- Neutral: default state (restart)

### Add Visual Feedback

```javascript
////////////////////////////////////
// Visual feedback - change styles based on game state

// WIN: set background to green
if (guess === secretNumber) {
  // ... your existing win logic ...
  document.body.style.backgroundColor = 'green';
}

// LOSE: set background to red (place inside your lose condition)
if (score < 1) {
  // ... your existing lose logic ...
  document.body.style.backgroundColor = 'red';
}

// RESTART: clear inline background so CSS default applies (inside the Again! handler)
document.querySelector('.again').addEventListener('click', function () {
  // ... your existing restart logic ...
  document.body.style.backgroundColor = '';
});
```

### Your Turn

- Add green background in win block
- Add red background in lose block
- Clear inline background on restart so CSS default applies
- Test: win → green; lose → red; restart → default background

## ✅ Section 2: Input Validation & Error Handling

### Why This Matters

Players make mistakes. Your game should prevent invalid input and explain what went wrong.

- No number provided → show a helpful message
- Out of range (not 1–20) → tell the player the valid range
- Stop processing when input is invalid (return early)

### Implement Validation

```javascript
////////////////////////////////////
// Input validation - check for valid input

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // 1) Missing input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    return; // stop here
  }

  // 2) Out of range
  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20!';
    return; // stop here
  }

  // ... your existing game logic (win / too high / too low / update score / lose) ...
});
```

### Your Turn

- Add the “no number” check right after reading the input
- Add the range check (1–20)
- Test cases: empty, 0, 21, valid number

## ✨ Section 3: Final Polish & Professional Touches

### Why This Matters

Finishing touches make your project feel professional and complete.

- Clear end-state messages (Game Over!)
- Clear input on end states
- Ensure restart restores a clean slate

### Add Final Polish

```javascript
////////////////////////////////////
// Final polish - professional finishing touches

// In WIN block
if (guess === secretNumber) {
  // ... existing win logic ...
  document.querySelector('.message').textContent = '🎉 Game Over!';
  document.querySelector('.guess').value = '';
}

// In LOSE block
if (score < 1) {
  // ... existing lose logic ...
  document.querySelector('.message').textContent = '💀 Game Over!';
  document.querySelector('.guess').value = '';
}

// In RESTART handler
// (Already resetting background, also ensure inputs/score/message are reset)
```

### Your Turn

- Add end-state messages in both win and lose paths
- Clear the input in both end states
- Confirm restart restores message/score/number/input/background

## 🧪 Final Verification

Add and run this quick checklist in your head:

- Win → background green, message shows Game Over, input cleared
- Lose → background red, message shows Game Over, input cleared
- Restart → default background (CSS), score reset, input enabled and cleared, message reset
- Invalid input → user-friendly message; game logic doesn’t run

## ✅ What’s Working Now vs Coming Next (end of Hour 3)

What works now:

- Visual feedback on win/lose; restart clears inline background so CSS default applies
- Input validation for empty and out-of-range values
- Game Over messaging and input clearing on end states

Not yet (coming next):

- Code refactor (helpers/constants/early returns)
- Small UX improvements (Enter key, input focus)

Coming next:

- Hour 4: refactor and UX enhancements

## 📊 Git Commit Time!

Save your Hour 3 work to your portfolio:

```bash
git add .
git commit
```

Copy this commit message:

```feat: add visual feedback, validation, and final polish

- Implement win/lose visual feedback via background color changes
- Add input validation with helpful error messages and early returns
- Clear inputs and add Game Over messages for end states
- Ensure restart fully resets UI and state to a clean slate
- Prepare project for Hour 4 code organization and improvements
```

```bash
git push origin main
```

## 🔧 Troubleshooting

- Background doesn’t change?
  - Check placement (inside win/lose), ensure color strings in quotes
- Validation not working?
  - Make sure checks run before game logic and use `return;`
- Restart not resetting?
  - Ensure all UI and state pieces reset (message, number, score, input, background)

## ✅ Hour 3 Checklist

- [ ] Visual feedback on win/lose
- [ ] Input validation with early return
- [ ] Final polish: end messages and input clear
- [ ] Restart restores clean state

## 📚 Key Concepts Summary

| Concept              | Purpose                         | Example                               |
| -------------------- | ------------------------------- | ------------------------------------- |
| Visual Feedback      | Communicate state changes       | `document.body.style.backgroundColor` |
| Input Validation     | Prevent invalid actions         | `if (!guess) return;`                 |
| Range Checking       | Enforce valid boundaries        | `if (guess < 1 OR guess > 20)`        |
| Final Polish         | Professional end-state handling | `message = '🎉/💀 Game Over!'`        |
| Full Reset (Restart) | Clean slate for new round       | Reset score, message, input, styles   |

🚀 Great work! Your game now feels polished and user-friendly. Next up: Hour 4 to organize and professionalize your codebase.
