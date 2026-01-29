/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { format } from "date-fns";

const WeatherCard = ({ data }) => {
  const {
    name,
    sys: { country },
    weather,
    main: { temp },
    dt,
  } = data;

  const weatherCondition = weather[0]?.main || "Clear";
  const description = weather[0]?.description || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 mt-5 backdrop-blur-md text-white rounded-2xl p-6 lg:p-8 max-w-md lg:max-w-3xl w-full mx-auto shadow-lg"
    >
      {/* Location + Date */}
      <div className="mb-3">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          {name}, {country}
        </h2>
        <p className="text-sm lg:text-base text-white/80 mt-1">
          {format(new Date(dt * 1000), "eeee, d MMMM yyyy • h:mm a")}
        </p>
      </div>

      {/* Temp + Icon Row */}
      <div className="flex items-center justify-between ">
        {/* Temperature + Description */}
        <div className="text-left">
          <h1 className="text-6xl lg:text-7xl font-bold">
            {Math.round(temp)}°C
          </h1>
          <p className="capitalize text-lg lg:text-xl text-white/90 mt-2">
            {description}
          </p>
        </div>

        {/* Icon */}
        <div className="text-5xl lg:text-[100px] min-w-[60px] text-right">
          {weatherCondition === "Clouds" && "☁️"}
          {weatherCondition === "Rain" && "🌧️"}
          {weatherCondition === "Clear" && "☀️"}
          {weatherCondition === "Snow" && "❄️"}
          {weatherCondition === "Thunderstorm" && "⛈️"}
          {weatherCondition === "Drizzle" && "🌦️"}
          {weatherCondition === "Mist" && "🌫️"}
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
