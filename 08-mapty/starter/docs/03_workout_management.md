# Hour 3: Workout Management & Form Handling – Student Guide

## 🎯 What You'll Learn This Hour:

- Implement dynamic form handling and field switching between workout types
- Create comprehensive data validation with helper functions
- Process user input and create Running/Cycling workout objects
- Render workout markers on the map with custom popups
- Build the workout list UI with proper data binding and HTML generation

## 📊 Progress Tracker

- [x] **Hour 1:** Project Setup & OOP Foundation ← _Completed_
- [x] **Hour 2:** Geolocation & Interactive Maps ← _Completed_
- [ ] **Hour 3:** Workout Management & Form Handling ← _You are here_
- [ ] **Hour 4:** Data Persistence & UI Polish

## ⏰ Session Timeline

- Opening: Review Hour 2 foundation and introduce form concepts
- Section 1: Dynamic form handling and workout type switching
- Section 2: Data validation and workout object creation
- Section 3: Map markers and workout list rendering

## Section 1: Dynamic Form Handling and Workout Type Switching

### Why This Matters

Forms are the primary way users interact with web applications. Learning to handle form events, validate data, and provide dynamic feedback is essential for creating professional user experiences. The Mapty form needs to switch between different input fields based on workout type.

### Understanding the Form Structure

Let's examine the HTML form structure already provided in `index.html`:

```html
<form class="form hidden">
  <div class="form__row">
    <label class="form__label">Type</label>
    <select class="form__input form__input--type">
      <option value="running">Running</option>
      <option value="cycling">Cycling</option>
    </select>
  </div>
  <div class="form__row">
    <label class="form__label">Distance</label>
    <input class="form__input form__input--distance" placeholder="km" />
  </div>
  <div class="form__row">
    <label class="form__label">Duration</label>
    <input class="form__input form__input--duration" placeholder="min" />
  </div>

  <!-- Running-specific field -->
  <div class="form__row">
    <label class="form__label">Cadence</label>
    <input class="form__input form__input--cadence" placeholder="step/min" />
  </div>

  <!-- Cycling-specific field (hidden by default) -->
  <div class="form__row form__row--hidden">
    <label class="form__label">Elev Gain</label>
    <input class="form__input form__input--elevation" placeholder="meters" />
  </div>

  <button class="form__btn">OK</button>
</form>
```

### Setting Up Form Element References

First, let's add the form element references at the top of our script, right after the workout classes:

```javascript
// Form element references (add after your workout classes)
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
```

### Implementing Form Show/Hide Functionality

Now let's enhance our App class to properly handle form display:

```javascript
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    // Get user's position
    this._getPosition();

    // Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      console.log('🔍 Requesting user location...');
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        this._handleLocationError.bind(this),
        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 600000,
        }
      );
    } else {
      alert('❌ Geolocation is not supported by this browser');
      this._loadDefaultMap();
    }
  }

  _handleLocationError(error) {
    console.error('Geolocation error:', error);

    let message = 'Could not get your position. ';

    switch (error.code) {
      case error.PERMISSION_DENIED:
        message +=
          'Location access was denied. Please enable location services and refresh the page.';
        break;
      case error.POSITION_UNAVAILABLE:
        message +=
          'Location information is unavailable. Using default location.';
        break;
      case error.TIMEOUT:
        message += 'Location request timed out. Using default location.';
        break;
      default:
        message += 'An unknown error occurred. Using default location.';
        break;
    }

    alert(`📍 ${message}`);
    this._loadDefaultMap();
  }

  _loadDefaultMap() {
    console.log('📍 Loading default map location (London)');
    // Use London as default coordinates
    const defaultCoords = [51.5074, -0.1278];

    this.#map = L.map('map').setView(defaultCoords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));

    console.log('🗺️ Default map loaded successfully');
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`📍 Loading map at coordinates: ${latitude}, ${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));

    console.log('🗺️ Map loaded successfully at user location');
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    // Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    // For now, just log the form submission
    console.log('Form submitted!');

    // Hide form after submission
    this._hideForm();
  }
}
```

### Your Turn: Test Form Functionality

Let's test the form show/hide and field switching functionality:

```javascript
// Test the enhanced App class
const app = new App();

// After the map loads, try:
// 1. Click on the map - form should appear
// 2. Change workout type - fields should switch
// 3. Submit form - form should hide
```

**What should happen:**

1. **Map Click**: Form appears and distance input gets focus
2. **Type Switch**: Cadence/Elevation fields toggle based on workout type
3. **Form Submit**: Form disappears with smooth animation

## Section 2: Data Validation and Workout Object Creation

### Why This Matters

Data validation prevents bugs and ensures data integrity. Users can input invalid data (negative numbers, text in number fields, empty values), so we need robust validation before creating workout objects.

### Creating Validation Helper Functions

Let's add comprehensive validation logic to our `_newWorkout` method:

```javascript
_newWorkout(e) {
  const validInputs = (...inputs) =>
    inputs.every(inp => Number.isFinite(inp));
  const allPositive = (...inputs) => inputs.every(inp => inp > 0);

  e.preventDefault();

  // Get data from form
  const type = inputType.value;
  const distance = +inputDistance.value;
  const duration = +inputDuration.value;
  const { lat, lng } = this.#mapEvent.latlng;
  let workout;

  // If workout running, create running object
  if (type === 'running') {
    const cadence = +inputCadence.value;

    // Check if data is valid
    if (
      !validInputs(distance, duration, cadence) ||
      !allPositive(distance, duration, cadence)
    )
      return alert('Inputs have to be positive numbers!');

    workout = new Running([lat, lng], distance, duration, cadence);
  }

  // If workout cycling, create cycling object
  if (type === 'cycling') {
    const elevation = +inputElevation.value;

    if (
      !validInputs(distance, duration, elevation) ||
      !allPositive(distance, duration)
    )
      return alert('Inputs have to be positive numbers!');

    workout = new Cycling([lat, lng], distance, duration, elevation);
  }

  // Add new object to workout array
  this.#workouts.push(workout);

  // Render workout on map as marker
  this._renderWorkoutMarker(workout);

  // Render workout on list
  this._renderWorkout(workout);

  // Hide form + clear input fields
  this._hideForm();
}
```

### Understanding the Validation Logic

**Helper Functions:**

```javascript
const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
// Checks if all inputs are finite numbers (not NaN, Infinity, etc.)

const allPositive = (...inputs) => inputs.every(inp => inp > 0);
// Checks if all inputs are positive numbers
```

**Data Processing:**

```javascript
const distance = +inputDistance.value; // Convert string to number
const type = inputType.value; // Get selected workout type
const { lat, lng } = this.#mapEvent.latlng; // Extract coordinates from map click
```

### Your Turn: Test Data Validation

Try these validation scenarios:

```javascript
// Test cases to try in the form:
// 1. Valid running: distance=5, duration=30, cadence=180
// 2. Invalid running: distance=-5, duration=30, cadence=180 (should show alert)
// 3. Valid cycling: distance=20, duration=60, elevation=200
// 4. Invalid cycling: distance="abc", duration=60, elevation=200 (should show alert)
```

## Section 3: Map Markers and Workout List Rendering

### Why This Matters

Visual feedback is crucial for user experience. Users need to see their workouts both on the map (as markers) and in the sidebar (as a list). Learning to generate dynamic HTML and manage DOM updates is essential for interactive applications.

### Rendering Workout Markers on the Map

Let's add the `_renderWorkoutMarker` method to display workouts on the map:

```javascript
_renderWorkoutMarker(workout) {
  L.marker(workout.coords)
    .addTo(this.#map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`,
      })
    )
    .setPopupContent(
      `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
    )
    .openPopup();
}
```

**What this code does:**

- **`L.marker(workout.coords)`**: Creates marker at workout coordinates
- **`.bindPopup()`**: Attaches popup with custom options
- **`autoClose: false`**: Keeps popup open when others are clicked
- **`className`**: Adds CSS class for styling (running-popup or cycling-popup)
- **`.setPopupContent()`**: Sets popup text with emoji and description

### Rendering Workouts in the Sidebar List

Now let's add the `_renderWorkout` method to display workouts in the sidebar:

```javascript
_renderWorkout(workout) {
  let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
  `;

  if (workout.type === 'running')
    html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>
    `;

  if (workout.type === 'cycling')
    html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>
    `;

  form.insertAdjacentHTML('afterend', html);
}
```

**Understanding the HTML Generation:**

- **Template Literals**: Using backticks for multi-line HTML strings
- **Conditional Content**: Different details for running vs cycling
- **Data Attributes**: `data-id="${workout.id}"` for later identification
- **Calculated Values**: `workout.pace.toFixed(1)` for formatted numbers
- **DOM Insertion**: `insertAdjacentHTML('afterend', html)` adds after form

### Your Turn: Test Complete Workout Creation

Now let's test the complete workout creation flow:

```javascript
// Complete App class with all methods
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    // Get user's position
    this._getPosition();

    // Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }

  // ... (previous methods: _getPosition, _loadMap, _showForm, _hideForm, _toggleElevationField)

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;

      // Check if data is valid
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);

    // Render workout on map as marker
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide form + clear input fields
    this._hideForm();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if (workout.type === 'running')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
      `;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;

    form.insertAdjacentHTML('afterend', html);
  }
}
```

## 🧪 Testing Your Understanding

Make sure you've completed all the sections above and can successfully:

- Implement dynamic form show/hide functionality with smooth animations
- Add workout type switching between running and cycling fields
- Create comprehensive data validation with helper functions
- Process user input and generate Running/Cycling workout objects
- Render workout markers on map with custom popups and styling
- Build workout list UI with dynamic HTML generation
- Handle form submission with proper error feedback and clearing

**Expected behavior when testing:**

- Click on map → Form should appear with distance field focused
- Switch workout type → Cadence/Elevation fields should toggle appropriately
- Submit valid data → Workout should appear on map and in sidebar list
- Submit invalid data → Alert should show with error message
- Form should hide after successful submission with smooth animation
- Each workout should show appropriate emoji, calculations, and formatting

**Test the complete workflow:**

1. **Click on map** - Form should appear
2. **Enter running data**: Distance=5, Duration=30, Cadence=180
3. **Submit** - Should create running workout with pace calculation
4. **Click another location** - Form appears again
5. **Switch to cycling** - Fields should change to elevation
6. **Enter cycling data**: Distance=20, Duration=60, Elevation=200
7. **Submit** - Should create cycling workout with speed calculation

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
feat(mapty): implement complete workout management with forms and validation

- Add dynamic form handling with show/hide functionality and smooth animations
- Implement workout type switching between running and cycling with field toggles
- Create comprehensive data validation with helper functions for input checking
- Process user input and create Running/Cycling workout objects using Hour 1 classes
- Render workout markers on map with custom popups and workout-specific styling
- Build workout list UI with dynamic HTML generation and proper data binding
- Add form submission handling with automatic clearing and error feedback
- Include complete workout creation flow from map click to sidebar display
- Integrate all Hour 1 OOP concepts with Hour 2 mapping functionality
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

- **"Form not appearing when clicking map"**

  - **Cause**: Event listener not properly bound or form element not found
  - **Fix**: Check `.bind(this)` usage and verify form element exists in HTML

- **"Fields not switching when changing workout type"**

  - **Cause**: Missing event listener on type dropdown or CSS class issues
  - **Fix**: Verify `inputType.addEventListener('change', this._toggleElevationField)`

- **"Validation alert showing for valid inputs"**

  - **Cause**: String inputs not converted to numbers properly
  - **Fix**: Use `+inputDistance.value` to convert strings to numbers

- **"Workout not appearing in sidebar"**

  - **Cause**: HTML generation issues or DOM insertion problems
  - **Fix**: Check template literal syntax and `insertAdjacentHTML` usage

- **"Map markers not showing workout popups"**

  - **Cause**: Popup configuration or content issues
  - **Fix**: Verify popup options and `setPopupContent` method

- **"Form not clearing after submission"**
  - **Cause**: Form inputs not properly reset in `_hideForm` method
  - **Fix**: Ensure all input values are set to empty strings

## ✅ Hour 3 Checklist

Mark each item as you complete it:

- [ ] Implement dynamic form show/hide functionality with smooth animations
- [ ] Add workout type switching between running and cycling fields
- [ ] Create comprehensive data validation with helper functions
- [ ] Process user input and convert strings to numbers properly
- [ ] Generate Running and Cycling workout objects using Hour 1 classes
- [ ] Render workout markers on map with custom popups and styling
- [ ] Build workout list UI with dynamic HTML generation
- [ ] Handle form submission with proper error feedback and clearing
- [ ] Test complete workout creation flow from map click to display
- [ ] Integrate all three hours of functionality seamlessly
- [ ] Commit workout management features to Git repository

## 📚 Key Concepts Summary

| Concept               | Purpose                                        | Example                                         |
| --------------------- | ---------------------------------------------- | ----------------------------------------------- |
| **Form Handling**     | Capture and process user input                 | `form.addEventListener('submit', handler)`      |
| **Data Validation**   | Ensure input quality and prevent errors        | `validInputs(...inputs)` helper function        |
| **Dynamic HTML**      | Generate content based on data                 | Template literals with `${variable}`            |
| **DOM Manipulation**  | Update page content programmatically           | `insertAdjacentHTML('afterend', html)`          |
| **Event Delegation**  | Handle events efficiently                      | `inputType.addEventListener('change', handler)` |
| **Form Animation**    | Smooth user experience transitions             | `setTimeout()` for display property changes     |
| **Data Processing**   | Convert and validate user input                | `+inputDistance.value` string to number         |
| **Conditional Logic** | Different behavior for different workout types | `if (type === 'running')` branches              |

## 🎯 What You've Mastered

Congratulations! You now understand:

- **Form handling and validation** with comprehensive error checking
- **Dynamic UI updates** based on user interactions and data
- **Data processing and object creation** using OOP principles from Hour 1
- **DOM manipulation** with template literals and HTML generation
- **Event-driven architecture** connecting user actions to application state
- **Integration patterns** combining multiple hours of functionality

**Next Up**: In Hour 4, you'll learn about data persistence with localStorage, click-to-navigate functionality, and final UI polish. You'll complete the Mapty application with full data persistence across browser sessions!

## 🚀 Preview: What's Coming Next

**Hour 4 will cover:**

- **localStorage Integration** - Save and restore workouts across sessions
- **Click-to-Navigate** - Click workout list items to move map to location
- **Data Restoration** - Reload workout markers when app starts
- **Final Polish** - Error handling, edge cases, and user experience improvements

**You're almost done building a complete, professional workout tracking application!** 🎯🏃‍♂️🚴‍♀️
