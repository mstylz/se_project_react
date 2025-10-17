import "./WeatherCard.css";
import { defaultWeatherOptions } from "../../../utils/constants";

function WeatherCard({ weatherData }) {
  // Use const instead of var
  const isDay =
    weatherData && typeof weatherData.isDay === "boolean"
      ? weatherData.isDay
      : true;

  // Raw condition from API (string or null)
  // Use const instead of var
  const raw =
    weatherData && typeof weatherData.condition === "string"
      ? weatherData.condition
      : null;

  // Map API condition to our 6 keys
  function normalizeCondition(c) {
    if (!c) return null;
    // Use const instead of var
    const s = String(c).toLowerCase();
    if (s.indexOf("thunder") > -1 || s.indexOf("storm") > -1) return "storm";
    if (s.indexOf("drizzle") > -1 || s.indexOf("rain") > -1) return "rain";
    if (s.indexOf("snow") > -1 || s.indexOf("sleet") > -1) return "snow";
    if (
      s.indexOf("fog") > -1 ||
      s.indexOf("mist") > -1 ||
      s.indexOf("haze") > -1 ||
      s.indexOf("smoke") > -1
    )
      return "fog";
    if (s.indexOf("cloud") > -1 || s === "overcast") return "cloudy";
    if (s.indexOf("clear") > -1) return "clear";
    return null;
  }

  // Use const instead of var
  const condition = normalizeCondition(raw);

  function buildIconUrl(dayBool, cond) {
    if (!cond) return null;
    // Use const instead of var
    const folder = dayBool ? "day" : "night";
    return new URL(
      "../../../assets/" + folder + "/" + cond + ".svg",
      import.meta.url
    ).href;
  }

  // Decide which URL to use:
  // 1) Construct specific icon URL if we have a normalized condition
  // 2) Otherwise, use your day/night default from constants
  // Use const instead of var
  const specificUrl = buildIconUrl(isDay, condition);
  const defaultUrl = (
    defaultWeatherOptions.find(function (o) {
      return o.day === isDay;
    }) || defaultWeatherOptions[0]
  ).url;

  // Use const instead of var
  const src = specificUrl || defaultUrl;

  // Temperature read with guard
  // Use const instead of var
  const tempF =
    weatherData &&
    weatherData.temperature &&
    typeof weatherData.temperature.F !== "undefined"
      ? weatherData.temperature.F
      : "—";

  return (
    <section className="weather-card">
      <p className="weather-card__temp"> {`${tempF}° F`} </p>{" "}
      <img
        src={src}
        alt={`card showing ${isDay ? "day" : "night"}time ${condition || "default"} weather`}
        className="weather-card__image"
        onError={(e) => {
          // If anything 404s, fall back to the correct day/night default
          e.currentTarget.onerror = null;
          e.currentTarget.src = defaultUrl;
        }}
      />{" "}
    </section>
  );
}

export default WeatherCard;
