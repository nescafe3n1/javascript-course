'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    // DOM elements
    this._form = document.querySelector('.form');
    this._containerWorkouts = document.querySelector('.workouts');
    this._inputType = document.querySelector('.form__input--type');
    this._inputDistance = document.querySelector('.form__input--distance');
    this._inputDuration = document.querySelector('.form__input--duration');
    this._inputCadence = document.querySelector('.form__input--cadence');
    this._inputElevation = document.querySelector('.form__input--elevation');

    this._getPosition();

    this._getLocalStorage();

    this._form.addEventListener('submit', this._newWorkout.bind(this));
    this._inputType.addEventListener('change', this._toggleElevationField);
    this._containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this._hideForm();
    });
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        () => alert('Could not get your position 😢')
      );
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.#map);

    // Map click event
    this.#map.on('click', this._showForm.bind(this));

    // Render workouts from storage
    this.#workouts.forEach(work => this._renderWorkoutMarker(work));
  }


  _showForm(mapE) {
    this.#mapEvent = mapE;
    this._form.classList.remove('hidden');
    this._inputDistance.focus();
  }

  _hideForm() {
    this._form.style.display = 'none';
    this._form.classList.add('hidden');
    setTimeout(() => (this._form.style.display = 'grid'), 1000);
    this._inputDistance.value =
      this._inputDuration.value =
      this._inputCadence.value =
      this._inputElevation.value =
        '';
  }

  _toggleElevationField() {
    document
      .querySelector('.form__row--elevation')
      .classList.toggle('form__row--hidden');
    document
      .querySelector('.form__row--cadence')
      .classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    const validInputs = (...inputs) => inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    const type = this._inputType.value;
    const distance = +this._inputDistance.value;
    const duration = +this._inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    if (type === 'running') {
      const cadence = +this._inputCadence.value;
      if (!validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence))
        return alert('Inputs have to be positive numbers!');
      workout = new Running([lat, lng], distance, duration, cadence);
    }

    if (type === 'cycling') {
      const elevation = +this._inputElevation.value;
      if (!validInputs(distance, duration, elevation) || !allPositive(distance, duration))
        return alert('Inputs have to be positive numbers!');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    console.log('✅ Workout created:', workout);

    this.#workouts.push(workout);
    this._renderWorkoutMarker(workout);
    this._renderWorkout(workout);
    this._hideForm();
    this._setLocalStorage();
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
      .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>`;

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
      </li>`;

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
      </li>`;

    this._form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;
    const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);
    this.#map.setView(workout.coords, 13, { animate: true, pan: { duration: 1 } });
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;
    this.#workouts = data.map(work =>
      work.type === 'running'
        ? Object.assign(new Running([], 0, 0, 0), work)
        : Object.assign(new Cycling([], 0, 0, 0), work)
    );
  }

  _clearAllData() {
    localStorage.removeItem('workouts');
    location.reload();
  }

  _showAllWorkouts() {
    console.table(this.#workouts);
  }

  _exportWorkouts() {
    console.log('Exported workouts:', JSON.stringify(this.#workouts, null, 2));
  }
}

const app = new App();
