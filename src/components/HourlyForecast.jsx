import { format } from "date-fns";

const HourlyForecast = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) return null;

  const next24Hours = forecastData.list.slice(0, 8);

  return (
    <div className="mt-6 bg-white/10 backdrop-blur-md text-white rounded-2xl p-4 lg:p-6 max-w-md lg:max-w-3xl w-full mx-auto shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Next 24 Hours</h2>

      <div className="flex gap-4 lg:gap-5.5 overflow-x-auto hide-scrollbar">
        {next24Hours.map((item, index) => {
          const time = format(new Date(item.dt * 1000), "h a");
          const iconCode = item.weather[0].icon;
          const temp = Math.round(item.main.temp);

          return (
            <div
              key={index}
              className="flex flex-col items-center min-w-[70px] bg-white/5 rounded-lg p-2"
            >
              <p className="text-sm">{time}</p>
              <img
                src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
                alt="weather icon"
                className="w-12 h-12"
              />
              <p className="text-lg font-semibold">{temp}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourlyForecast;
