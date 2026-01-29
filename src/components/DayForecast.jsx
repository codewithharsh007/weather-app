import { format, parseISO } from "date-fns";

const DayForecast = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) return null;

  // Filter entries for 12:00 PM daily
  const dailyForecasts = forecastData.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="mt-6 bg-white/10 backdrop-blur-md text-white rounded-2xl p-4 lg:p-6 max-w-md lg:max-w-3xl w-full mx-auto shadow-lg">
      <h2 className="text-xl font-semibold mb-4">5-Day Forecast</h2>

      <div className="flex flex-col gap-4">
        {dailyForecasts.map((item, index) => {
          const date = parseISO(item.dt_txt);
          const day = format(date, "EEEE");
          const iconCode = item.weather[0].icon;
          const temp = Math.round(item.main.temp);
          const desc = item.weather[0].description;

          return (
            <div
              key={index}
              className="flex items-center justify-between bg-white/5 p-3 rounded-lg"
            >
              <div>
                <p className="text-base font-medium">{day}</p>
                <p className="text-sm text-white/80 capitalize">{desc}</p>
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
                  alt="weather icon"
                  className="w-12 h-12"
                />
                <p className="text-lg font-bold">{temp}°C</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DayForecast;
