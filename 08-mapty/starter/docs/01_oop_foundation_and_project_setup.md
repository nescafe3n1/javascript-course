# Hour 1: OOP Foundation & Project Setup – Student Guide

## 🎯 What You'll Learn This Hour:

- Understand the Mapty project architecture and planning approach
- Master ES6+ class syntax with constructors and methods
- Implement inheritance using `extends` and `super()` keywords
- Create Workout base class with Running and Cycling subclasses
- Set up the complete Mapty development environment

## 📊 Progress Tracker

- [ ] **Hour 1:** Project Setup & OOP Foundation ← _You are here_
- [ ] **Hour 2:** Geolocation & Interactive Maps
- [ ] **Hour 3:** Workout Management & Form Handling
- [ ] **Hour 4:** Data Persistence & UI Polish

## ⏰ Session Timeline

- Opening: Mapty project overview and architecture introduction
- Section 1: Project setup and development environment
- Section 2: Object-Oriented Programming with ES6+ classes
- Section 3: Workout class hierarchy and inheritance

## 🛠️ Setup Your Mapty Development Environment

### Step 1: Add Mapty Project to Your Course

1. **Download Mapty project zip file** (provided by instructor)
2. **Extract the contents** to get `08-mapty` folder
3. **Move the folder** into your existing `javascript-course` directory:
   ```
   javascript-course/
   ├── 01-fundamentals-part-1/     (from Part 1)
   ├── 02-fundamentals-part-2/     (from Part 2)
   ├── 03-developer-skills/        (from Developer Skills)
   ├── 04-guess-my-number-game/    (from Game Development)
   ├── 05-modal/                   (from Modal Project)
   ├── 06-pig-game/                (from Pig Game)
   ├── 07-behind-the-scenes/       (from Behind the Scenes)
   └── 08-mapty/                   (new Mapty project folder)
   ```

### Step 2: Open Mapty Project in VS Code

- **File → Open Folder**
- Navigate to `javascript-course/08-mapty/starter`
- Click "Select Folder"

### Step 3: Add to Your Repository

**In VS Code Terminal (Ctrl+`):**

```bash
# Navigate up to main javascript-course folder
cd ../..
```

```bash
# Add the new Mapty project folder
git add 08-mapty/
```

```bash
# Commit with descriptive message
git commit -m "feat: add mapty starter files and project structure"
```

```bash
# Push to remote repository
git push origin main
```

### Step 4: Verify Your Setup

**You should see this structure:**

```
08-mapty/
└── starter/
    ├── index.html (complete UI structure with map container)
    ├── style.css (beautiful workout tracking styling)
    ├── script.js (empty, ready for our OOP implementation)
    ├── .prettierrc (code formatting configuration)
    ├── logo.png (Mapty application logo)
    ├── icon.png (favicon for browser tab)
    └── docs/
        ├── 01_oop_foundation_and_project_setup.md
        ├── 02_geolocation_and_maps.md
        ├── 03_workout_management.md
        └── 04_data_persistence_and_polish.md
```

### Step 5: Test Your Current Setup

Let's start with understanding what we're building:

```javascript
'use strict';

console.log('=== MAPTY: WORKOUT TRACKING APPLICATION ===');

/*
In this project, we'll build a complete workout tracking app featuring:
1. Object-Oriented Programming with classes and inheritance
2. Interactive maps using the Leaflet.js library
3. Geolocation API for automatic user positioning
4. Form handling and data validation
5. Local storage for data persistence
6. Modern JavaScript ES6+ features

This hour focuses on the OOP foundation - the classes that will power our app!
*/
```

**Add this to your `script.js` file and open `index.html` in your browser to verify everything works.**

## Section 1: Understanding the Mapty Architecture

### Why This Matters

Before diving into code, understanding the architecture helps us build a well-structured, maintainable application. The Mapty app follows Object-Oriented Programming principles to organize code into logical, reusable components.

### Project Overview

**Mapty** is a workout tracking application where users can:

- **Click on a map** to log workouts at specific locations
- **Choose workout types**: Running (tracks cadence and pace) or Cycling (tracks elevation gain and speed)
- **Store workouts persistently** using browser localStorage
- **Navigate between workouts** by clicking on the workout list

### Architecture Components

Our application will consist of these main classes:

1. **`Workout`** (Base Class)

   - Common properties: coordinates, distance, duration, date, ID
   - Common methods: description generation, click tracking

2. **`Running`** (Inherits from Workout)

   - Specific property: cadence (steps per minute)
   - Specific method: calcPace() for minutes per kilometer

3. **`Cycling`** (Inherits from Workout)

   - Specific property: elevationGain (meters)
   - Specific method: calcSpeed() for kilometers per hour

4. **`App`** (Main Application Class)
   - Manages the entire application state
   - Handles user interactions, map integration, data storage

## Section 2: ES6+ Classes and Object-Oriented Programming

### Why This Matters

Classes provide a clean, organized way to create objects with shared properties and methods. Instead of writing repetitive code, we can define a blueprint (class) and create multiple instances with consistent behavior.

### Creating the Base Workout Class

Let's start with our foundation - the `Workout` class that will be shared by all workout types:

```javascript
'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}
```

**What's happening here:**

- **Class fields** (`date`, `id`, `clicks`) are initialized for every instance
- **Constructor** runs when we create a new workout with `new Workout()`
- **Private method** `_setDescription()` (underscore indicates internal use)
- **Public method** `click()` can be called from outside the class
- **Unique ID generation** using current timestamp

### Your Turn: Test the Base Class

Try creating a workout instance and explore its properties:

```javascript
// Test the Workout class
const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout);
console.log('Workout ID:', testWorkout.id);
console.log('Workout date:', testWorkout.date);

// Test the click method
testWorkout.click();
testWorkout.click();
console.log('Click count:', testWorkout.clicks);
```

## Section 3: Inheritance with Running and Cycling Classes

### Why This Matters

Inheritance allows us to create specialized classes that share common functionality but add their own unique features. This reduces code duplication and creates a logical hierarchy.

### Creating the Running Class

The `Running` class extends `Workout` and adds running-specific features:

```javascript
class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
```

**Key concepts:**

- **`extends`** keyword creates inheritance relationship
- **`super()`** calls the parent class constructor
- **Additional property** `cadence` specific to running
- **Specific method** `calcPace()` calculates minutes per kilometer
- **Automatic calculation** in constructor ensures pace is always current

### Creating the Cycling Class

The `Cycling` class also extends `Workout` but with cycling-specific features:

```javascript
class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}
```

**Key concepts:**

- **Similar structure** to Running but different specific property and method
- **`elevationGain`** tracks meters climbed during cycling
- **`calcSpeed()`** calculates kilometers per hour
- **Duration conversion** from minutes to hours for speed calculation

### Your Turn: Test the Complete Class Hierarchy

Create instances of both workout types and explore their capabilities:

```javascript
// Create a running workout
const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('Running workout:', run1);
console.log('Running pace:', run1.pace.toFixed(1), 'min/km');
console.log('Running description:', run1.description);

// Create a cycling workout
const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('Cycling workout:', cycling1);
console.log('Cycling speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Cycling description:', cycling1.description);

// Test inheritance - both have click method from Workout
run1.click();
cycling1.click();
console.log('Run clicks:', run1.clicks);
console.log('Cycling clicks:', cycling1.clicks);
```

### Challenge: Understanding Inheritance

**Question 1:** What properties do both `Running` and `Cycling` instances inherit from `Workout`?

**Question 2:** Why do we call `super()` in the child class constructors?

**Question 3:** What would happen if we forgot to call `this._setDescription()` in the constructors?

## 🧪 Testing Your Understanding

Make sure you've completed all the sections above and can successfully:

- Create a base Workout class with proper constructor and methods
- Implement Running and Cycling classes using inheritance
- Test your classes with sample workout instances
- Understand how `extends`, `super()`, and inheritance work together

**Expected behavior when testing:**

- Both workout types should inherit common properties (date, id, coords, distance, duration)
- Running should calculate pace (min/km), Cycling should calculate speed (km/h)
- Descriptions should be automatically generated with proper formatting
- Each instance should have a unique ID and be able to track clicks
- Inheritance relationships should work correctly with `instanceof`

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
feat(mapty): implement OOP foundation with Workout class hierarchy

- Create base Workout class with common properties and methods
- Implement Running class with cadence tracking and pace calculation
- Implement Cycling class with elevation gain and speed calculation
- Add inheritance using extends and super() keywords
- Include automatic description generation and click tracking
- Test complete class hierarchy with verification examples
- Establish solid OOP foundation for Mapty application architecture
```

**What this means:**

- `feat:` indicates a new feature
- `(mapty):` specifies which project this is for
- The rest describes what you accomplished

### Step 3: Push to Remote Repository

```bash
git push origin main
```

**What this does:**

- Uploads your committed changes to the remote repository
- Makes your work available to others
- Backs up your progress in the cloud

## 🔧 Troubleshooting

### Common Issues & Solutions

- **"Class fields not working"**

  - **Cause**: Using an older browser that doesn't support class field syntax
  - **Fix**: Use constructor assignment: `this.date = new Date();` inside constructor

- **"super() is not defined"**

  - **Cause**: Calling `super()` outside of a constructor or after `this`
  - **Fix**: `super()` must be the first line in child class constructor

- **"Cannot access 'this' before super()"**

  - **Cause**: Using `this` before calling `super()` in child class
  - **Fix**: Always call `super()` first, then use `this`

- **"\_setDescription is not a function"**

  - **Cause**: Calling method before it's defined or `this` context issues
  - **Fix**: Ensure method is defined and called with correct context

- **"Type is undefined in description"**
  - **Cause**: Forgetting to set `type` property in child classes
  - **Fix**: Add `type = 'running'` or `type = 'cycling'` as class fields

## ✅ Hour 1 Checklist

Mark each item as you complete it:

- [ ] Understand Mapty project architecture and goals
- [ ] Set up complete development environment with all files
- [ ] Create base Workout class with constructor and methods
- [ ] Implement Running class with inheritance and pace calculation
- [ ] Implement Cycling class with inheritance and speed calculation
- [ ] Test class hierarchy with instanceof and method calls
- [ ] Understand ES6+ class syntax and inheritance patterns
- [ ] Verify automatic calculations and description generation
- [ ] Complete comprehensive verification tests
- [ ] Commit OOP foundation to Git repository

## 📚 Key Concepts Summary

| Concept               | Purpose                                | Example                                                   |
| --------------------- | -------------------------------------- | --------------------------------------------------------- |
| **Class Declaration** | Create object blueprints               | `class Workout { }`                                       |
| **Constructor**       | Initialize instance properties         | `constructor(coords, distance) { this.coords = coords; }` |
| **Class Fields**      | Declare properties outside constructor | `date = new Date();`                                      |
| **Inheritance**       | Create specialized classes             | `class Running extends Workout`                           |
| **super()**           | Call parent constructor                | `super(coords, distance, duration);`                      |
| **Method Definition** | Add behavior to classes                | `calcPace() { return this.duration / this.distance; }`    |
| **instanceof**        | Check inheritance relationship         | `run1 instanceof Workout`                                 |
| **Private Methods**   | Internal class methods (convention)    | `_setDescription() { }`                                   |

## 🎯 What You've Mastered

Congratulations! You now understand:

- **Object-Oriented Programming** with modern ES6+ class syntax
- **Inheritance patterns** using `extends` and `super()` keywords
- **Class architecture** for complex applications
- **Automatic calculations** and method chaining in constructors
- **Instance creation** and property access patterns

**Next Up**: In Hour 2, you'll learn about the Geolocation API and Leaflet.js library to create interactive maps where users can click to add workouts at specific locations!

## 🚀 Preview: What's Coming Next

**Hour 2 will cover:**

- **Geolocation API** - Getting user's current position
- **Leaflet.js Integration** - Creating interactive maps
- **Event Handling** - Map clicks and form interactions
- **App Class Architecture** - Managing application state

**You're building something amazing - a complete workout tracking application!** 🏃‍♂️🚴‍♀️
