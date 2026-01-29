import { useState, useEffect } from "react";
import SearchBar from "./components/Searchbar";
import WeatherCard from "./components/WeatherCard";
import HourlyForecast from "./components/HourlyForecast";
import WeatherStatsCard from "./components/WeatherStatsCard";
import DayForecast from "./components/DayForecast";
import SunCycleCard from "./components/SunCycleCard";
import { fetchWeatherByCity, fetchForecastByCity } from "./api/weatherAPI";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const handleCitySearch = async (city) => {
    try {
      const current = await fetchWeatherByCity(city);
      const forecast = await fetchForecastByCity(city);
      setWeatherData(current);
      setForecastData(forecast);
    } catch (error) {
      console.error("City not found or API error:", error);
    }
  };

  // ✅ Load default city on first mount
  useEffect(() => {
    handleCitySearch("Delhi"); // Change this city name if needed
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🌄 Static Background Image */}
      <img
        src="/bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-2] brightness-25"
      />

      {/* 🖤 Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-[-1]" />

      {/* 🌤️ Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-6 pt-10">
        <SearchBar onSearch={handleCitySearch} />

        {weatherData && (
          <>
            <WeatherCard data={weatherData} />
            <HourlyForecast forecastData={forecastData} />
            <WeatherStatsCard data={weatherData} />
            <DayForecast forecastData={forecastData} />
            <SunCycleCard data={weatherData} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
