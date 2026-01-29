# Weather App

A modern weather application built with React and Vite. Get current weather, hourly, and daily forecasts for any city, with a clean and responsive UI.

## Features

- Search for any city to get real-time weather data
- View current weather conditions (temperature, humidity, wind, etc.)
- Hourly and daily forecasts
- Sunrise and sunset times
- Responsive design for mobile and desktop
- Powered by a weather API

## Screenshots

<!-- Add screenshots here if available -->
<!-- ![Screenshot](public/screenshot.png) -->

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/codewithharsh007/weather-app.git
   cd weather-app
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Set up your weather API key:
   - Open `src/api/weatherAPI.js`
   - Replace the placeholder with your API key

4. Start the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
  App.jsx
  main.jsx
  index.css
  api/
    weatherAPI.js
  components/
    DayForecast.jsx
    HourlyForecast.jsx
    SearchBar.jsx
    SunCycleCard.jsx
    WeatherCard.jsx
    WeatherStatsCard.jsx
  assets/
public/
```

## Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build
- `npm run lint` — Run ESLint

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)

## License

This project is licensed under the MIT License.

---

*Made by [codewithharsh007](https://github.com/codewithharsh007)*