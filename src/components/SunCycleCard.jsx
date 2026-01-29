import { WiSunrise, WiSunset } from "react-icons/wi";
import { format } from "date-fns";

const SunCycleCard = ({ data }) => {
  const { sunrise, sunset } = data.sys;

  const sunriseTime = new Date(sunrise * 1000);
  const sunsetTime = new Date(sunset * 1000);
  const now = new Date();

  const sunriseMs = sunriseTime.getTime();
  const sunsetMs = sunsetTime.getTime();
  const nowMs = now.getTime();

  const duration = sunsetMs - sunriseMs;
  const elapsed = Math.min(Math.max(nowMs - sunriseMs, 0), duration);
  const progressPercent = Math.floor((elapsed / duration) * 100);

  const isDay = nowMs >= sunriseMs && nowMs <= sunsetMs;

  return (
    <div className="bg-white/10 backdrop-blur-md text-white rounded-2xl p-6 lg:p-8 mt-5 max-w-md lg:max-w-3xl w-full mx-auto shadow-lg">
      <h2 className="text-xl lg:text-2xl font-semibold mb-4">
        Sunrise & Sunset
      </h2>

      {/* Sunrise/Sunset Times */}
      <div className="flex justify-between items-center text-white/90 text-sm lg:text-base mb-2">
        <div className="flex items-center gap-2">
          <WiSunrise className="text-xl lg:text-2xl" />
          {format(sunriseTime, "h:mm a")}
        </div>
        <div className="flex items-center gap-2">
          <WiSunset className="text-xl lg:text-2xl" />
          {format(sunsetTime, "h:mm a")}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-[#4f5b69] to-[#94a3b8] transition-all duration-300`}
          style={{
            width: `${progressPercent}%`,
            transform: !isDay ? "scaleX(-1)" : "scaleX(1)",
            transformOrigin: "center",
          }}
        />
      </div>

      {/* Remaining Time Text */}
      <p className="text-center text-sm lg:text-base text-white/80 mt-3">
        {isDay && progressPercent < 100
          ? `🌇 Sunset in ${Math.floor((sunsetMs - nowMs) / 60000)} mins`
          : `🌅 Sunrise in ${Math.floor((sunriseMs - nowMs) / 60000)} mins`}
      </p>
    </div>
  );
};

export default SunCycleCard;
