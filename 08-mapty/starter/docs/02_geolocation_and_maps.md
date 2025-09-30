# Hour 2: Geolocation & Interactive Maps – Student Guide

## 🎯 What You'll Learn This Hour:

- Integrate the Geolocation API to access user's current position
- Set up and configure the Leaflet.js library for interactive maps
- Create the main App class with constructor and method architecture
- Handle map events and user interactions with proper `this` binding
- Render interactive maps with custom styling and controls

## 📊 Progress Tracker

- [x] **Hour 1:** Project Setup & OOP Foundation ← _Completed_
- [ ] **Hour 2:** Geolocation & Interactive Maps ← _You are here_
- [ ] **Hour 3:** Workout Management & Form Handling
- [ ] **Hour 4:** Data Persistence & UI Polish

## ⏰ Session Timeline

- Opening: Review Hour 1 foundation and introduce mapping concepts
- Section 1: Geolocation API and user positioning
- Section 2: Leaflet.js integration and map rendering
- Section 3: App class architecture and event handling

## Section 1: Geolocation API and User Positioning

### Why This Matters

The Geolocation API allows our app to automatically center the map on the user's current location, providing a personalized experience. Understanding how to handle location permissions and errors is crucial for building robust web applications.

### Understanding the Geolocation API

The Geolocation API is built into modern browsers and provides access to the user's geographical position. It requires user permission and works best over HTTPS connections.

**Basic Geolocation Pattern:**

```javascript
// Check if geolocation is supported
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // Success callback - user granted permission
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`User location: ${latitude}, ${longitude}`);
    },
    function () {
      // Error callback - user denied permission or other error
      alert('Could not get your position');
    }
  );
}
```

### Your Turn: Test Geolocation

Let's start by testing the Geolocation API in our Mapty project:

```javascript
'use strict';

// Add this after your existing Workout classes from Hour 1

console.log('=== TESTING GEOLOCATION API ===');

function getPosition() {
  if (navigator.geolocation) {
    console.log('🔍 Requesting user location...');
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        console.log(`Your current location: ${latitude}, ${longitude}`);

        // Create a Google Maps link to verify the location
        const googleMapsUrl = `https://www.google.pt/maps/@${latitude},${longitude}`;
        console.log(`View on Google Maps: ${googleMapsUrl}`);
      },
      function (error) {
        console.error('Geolocation error:', error);

        let message = 'Could not get your position. ';

        switch (error.code) {
          case error.PERMISSION_DENIED:
            message +=
              'Location access was denied. Please enable location services and refresh the page.';
            break;
          case error.POSITION_UNAVAILABLE:
            message += 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            message += 'Location request timed out.';
            break;
          default:
            message += 'An unknown error occurred.';
            break;
        }

        alert(`📍 ${message}`);
      },
      {
        timeout: 10000,
        enableHighAccuracy: true,
        maximumAge: 600000,
      }
    );
  } else {
    alert('❌ Geolocation is not supported by this browser');
  }
}

// Test the geolocation
getPosition();
```

**What happens when you run this:**

1. **Browser Permission Request**: You'll see a permission dialog
2. **Success**: Console shows your coordinates and Google Maps link
3. **Error Handling**: Alert shows if permission denied or geolocation fails

## Section 2: Leaflet.js Integration and Map Rendering

### Why This Matters

Leaflet.js is a powerful, lightweight library for interactive maps. Unlike Google Maps, it's open-source and provides excellent customization options. Learning to integrate third-party libraries is essential for modern web development.

### Setting Up Leaflet.js

The Leaflet library is already included in your `index.html` file via CDN:

```html
<!-- Leaflet CSS -->
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
  crossorigin=""
/>

<!-- Leaflet JavaScript -->
<script
  defer
  src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
  integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
  crossorigin=""
></script>
```

### Basic Map Creation with Leaflet

Let's create our first interactive map:

```javascript
// Add this to test Leaflet integration
console.log('=== TESTING LEAFLET MAPS ===');

function createTestMap() {
  // Default coordinates (Denver, Colorado)
  const coords = [39.7392, -104.9903];
  const zoomLevel = 13;

  // Create the map
  const map = L.map('map').setView(coords, zoomLevel);

  // Add tile layer (the actual map images)
  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add a marker to test
  L.marker(coords).addTo(map).bindPopup('Test location!').openPopup();

  console.log('Map created successfully!');
}

// Test the map creation
createTestMap();
```

**What this code does:**

- **`L.map('map')`**: Creates a map in the element with ID 'map'
- **`.setView(coords, zoom)`**: Centers map at coordinates with zoom level
- **`L.tileLayer()`**: Adds the actual map images from OpenStreetMap
- **`L.marker()`**: Places a marker with popup text

### Your Turn: Combine Geolocation with Maps

Now let's combine geolocation with map rendering to center the map on the user's location:

```javascript
function createMapAtUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const { latitude } = position.coords;
        const { longitude } = position.coords;
        const coords = [latitude, longitude];

        console.log(`Creating map at user location: ${coords}`);

        // Create map centered on user's location
        const map = L.map('map').setView(coords, 13);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Add marker at user's location
        L.marker(coords).addTo(map).bindPopup('You are here!').openPopup();
      },
      function () {
        alert('Could not get your position');
      }
    );
  }
}

// Test user-centered map
createMapAtUserLocation();
```

## Section 3: App Class Architecture and Event Handling

### Why This Matters

The App class will manage our entire application state and coordinate between different components. Understanding class-based architecture and proper event handling with `this` binding is crucial for building maintainable applications.

### Creating the App Class Foundation

Let's build the main App class that will control our entire application:

```javascript
// App class - the main application controller
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    // Get user's position when app starts
    this._getPosition();
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`Loading map at: ${latitude}, ${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    console.log('Map clicked at:', mapE.latlng);

    // For now, just log the click - we'll add form logic in Hour 3
    const { lat, lng } = mapE.latlng;
    console.log(`Clicked coordinates: ${lat}, ${lng}`);
  }
}

// Create the app instance
const app = new App();
```

**Key concepts in this App class:**

### Private Fields with `#` Syntax

```javascript
#map;           // Private field - only accessible inside the class
#mapZoomLevel = 13;  // Private field with default value
#mapEvent;      // Stores the map click event
#workouts = []; // Array to store workout data
```

### Method Binding with `.bind(this)`

```javascript
this._loadMap.bind(this); // Ensures 'this' refers to App instance
this._showForm.bind(this); // Prevents 'this' from being lost in callbacks
```

### Event Handling Pattern

```javascript
this.#map.on('click', this._showForm.bind(this));
// When map is clicked, call _showForm method with correct 'this' context
```

### Your Turn: Understanding the App Flow

Let's trace through what happens when the app starts:

1. **`new App()`** - Constructor runs
2. **`this._getPosition()`** - Requests user location
3. **User grants permission** - Browser calls success callback
4. **`this._loadMap(position)`** - Creates map at user location
5. **Map renders** - User sees interactive map
6. **User clicks map** - `this._showForm(mapE)` is called
7. **Click coordinates logged** - Ready for Hour 3's form handling

### Testing Map Click Events

Let's enhance our click handling to provide visual feedback:

```javascript
// Enhanced App class with better click handling
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Add click event listener
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    const { lat, lng } = mapE.latlng;

    console.log(`Map clicked at: ${lat.toFixed(4)}, ${lng.toFixed(4)}`);

    // Add a temporary marker to show where user clicked
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(`Clicked here: ${lat.toFixed(4)}, ${lng.toFixed(4)}`)
      .openPopup();
  }
}

// Create the app
const app = new App();
```

### Challenge: Understanding `this` Binding

**Question 1:** Why do we need `.bind(this)` in the geolocation success callback?

**Question 2:** What would happen if we wrote `this.#map.on('click', this._showForm)` without `.bind(this)`?

**Question 3:** How do private fields (with `#`) help us organize our code?

## 🧪 Testing Your Understanding

Make sure you've completed all the sections above and can successfully:

- Integrate the Geolocation API with proper error handling
- Set up Leaflet.js and create interactive maps
- Build the App class with private fields and proper method binding
- Handle map click events and store event data
- Understand asynchronous programming with callbacks

**Expected behavior when testing:**

- Browser should request location permission
- Map should center on user's current location (or default to London if denied)
- User location marker should appear with popup
- Clicking anywhere on map should create a new marker with coordinates
- Console logs should show the complete app initialization flow
- App should be ready for Hour 3's form handling functionality

**Test your app by:**

1. **Granting location permission** when browser asks
2. **Waiting for map to load** at your location
3. **Clicking different locations** on the map
4. **Checking console logs** for all the status messages

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
feat(mapty): integrate geolocation API and Leaflet.js interactive maps

- Implement Geolocation API with permission handling and error management
- Set up Leaflet.js library integration with OpenStreetMap tile layers
- Create main App class with private fields and proper method architecture
- Add automatic user positioning and map centering functionality
- Implement map click event handling with proper this binding
- Include visual feedback with markers for user location and click points
- Establish foundation for Hour 3 workout form handling and data processing
- Add comprehensive testing and verification for all geolocation and mapping features
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

- **"Geolocation permission denied"**

  - **Cause**: User clicked "Block" on location permission dialog
  - **Fix**: The app now automatically loads with London as default location. To use your actual location, go to browser settings → Site permissions → Location → Allow for your site, then refresh the page

- **"Could not get your position" with enhanced error handling**

  - **Permission Denied**: App loads with London as default location
  - **Position Unavailable**: App automatically falls back to default location
  - **Timeout**: App waits 10 seconds then uses default location
  - **No Geolocation Support**: App immediately uses default location

- **"Map not loading or showing gray tiles"**

  - **Cause**: CDN issues or network problems
  - **Fix**: Check internet connection, try refreshing page, verify CDN URLs in HTML

- **"Cannot read property 'on' of undefined"**

  - **Cause**: Trying to add event listeners before map is fully loaded
  - **Fix**: Ensure `this.#map` is created before calling `.on()` method

- **"this.\_showForm is not a function"**

  - **Cause**: Missing `.bind(this)` in event listener callback
  - **Fix**: Always use `.bind(this)` when passing class methods as callbacks

- **"Map appears too small or not visible"**

  - **Cause**: CSS styling issues with map container
  - **Fix**: Check that `#map` element has proper height and width in CSS

- **"L is not defined"**
  - **Cause**: Leaflet.js library not loaded or script running before library loads
  - **Fix**: Ensure Leaflet script has `defer` attribute and runs after library loads

## ✅ Hour 2 Checklist

Mark each item as you complete it:

- [ ] Successfully integrate Geolocation API with permission handling
- [ ] Set up Leaflet.js library and create interactive maps
- [ ] Implement automatic user positioning and map centering
- [ ] Create App class with private fields and proper architecture
- [ ] Add map click event handling with correct `this` binding
- [ ] Test geolocation permission flow and error handling
- [ ] Verify map rendering with OpenStreetMap tile layers
- [ ] Add visual feedback with markers for user interactions
- [ ] Understand asynchronous callback patterns and method binding
- [ ] Complete comprehensive verification tests
- [ ] Commit geolocation and mapping features to Git repository

## 📚 Key Concepts Summary

| Concept               | Purpose                              | Example                                      |
| --------------------- | ------------------------------------ | -------------------------------------------- |
| **Geolocation API**   | Access user's geographical position  | `navigator.geolocation.getCurrentPosition()` |
| **Leaflet.js**        | Interactive mapping library          | `L.map('map').setView(coords, zoom)`         |
| **Private Fields**    | Encapsulate class data with `#`      | `#map; #mapZoomLevel = 13;`                  |
| **Method Binding**    | Preserve `this` context in callbacks | `this._loadMap.bind(this)`                   |
| **Event Handling**    | Respond to user interactions         | `map.on('click', handler)`                   |
| **Tile Layers**       | Map imagery from providers           | `L.tileLayer(url).addTo(map)`                |
| **Markers**           | Points of interest on map            | `L.marker(coords).bindPopup(text)`           |
| **Asynchronous APIs** | Handle non-blocking operations       | Geolocation callbacks, map loading           |

## 🎯 What You've Mastered

Congratulations! You now understand:

- **Geolocation API integration** with proper permission handling
- **Third-party library setup** and Leaflet.js configuration
- **Class-based architecture** with private fields and method organization
- **Event-driven programming** with proper `this` binding
- **Interactive map creation** with user positioning and click handling
- **Asynchronous programming patterns** for API integration

**Next Up**: In Hour 3, you'll learn about form handling, data validation, and workout creation. You'll connect the map clicks to a dynamic form that creates Running and Cycling workout objects using the classes from Hour 1!

## 🚀 Preview: What's Coming Next

**Hour 3 will cover:**

- **Dynamic Form Handling** - Show/hide form based on map clicks
- **Data Validation** - Ensure user inputs are valid numbers
- **Workout Creation** - Use Running/Cycling classes from Hour 1
- **Map Markers** - Display workout locations with custom popups
- **UI Updates** - Add workouts to the sidebar list

**You're building something incredible - an interactive workout tracking app!** 🗺️🏃‍♂️🚴‍♀️
