import {
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiThermometer,
} from "react-icons/wi";
import { FaEye } from "react-icons/fa";

const WeatherStatsCard = ({ data }) => {
  const {
    main: { humidity, pressure, feels_like },
    wind: { speed },
    visibility,
  } = data;

  return (
    <div className="bg-white/10 mt-5 backdrop-blur-md text-white rounded-2xl p-6 lg:p-8 max-w-md lg:max-w-3xl w-full mx-auto shadow-lg">
      <h2 className="text-xl lg:text-2xl font-semibold mb-4">Weather Details</h2>
      <div className="grid grid-cols-2 gap-4 text-sm lg:text-base text-white/90">
        <div className="flex items-center gap-2">
          <WiHumidity className="text-xl lg:text-2xl" />
          Humidity: {humidity}%
        </div>
        <div className="flex items-center gap-2">
          <WiStrongWind className="text-xl lg:text-2xl" />
          Wind Speed: {speed} m/s
        </div>
        <div className="flex items-center gap-2">
          <WiBarometer className="text-xl lg:text-2xl" />
          Pressure: {pressure} hPa
        </div>
        <div className="flex items-center gap-2">
          <WiThermometer className="text-xl lg:text-2xl" />
          Feels Like: {Math.round(feels_like)}°C
        </div>
        <div className="flex items-center gap-2">
          <FaEye className="text-base lg:text-xl" />
          Visibility: {(visibility / 2000).toFixed(1)} km
        </div>
      </div>
    </div>
  );
};

export default WeatherStatsCard;
