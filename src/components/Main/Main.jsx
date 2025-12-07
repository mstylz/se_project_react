import WeatherCard from "./WeatherCard/WeatherCard";
import ItemCard from "./ItemCard/ItemCard";
// REMOVED: import { defaultClothingItems } from "../../utils/constants";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnit";
import { useContext } from "react";
import "./Main.css";

function Main({ weatherData, handleCardClick, items }) {
  const tempC = weatherData.temperature.C;
  const tempF = weatherData.temperature.F;
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const source = Array.isArray(items) ? items : [];

  const clothingItems = source.filter(
    (item) => item.weather === weatherData.type
  );

  return (
    <main>
      <WeatherCard
        weatherData={weatherData}
        currentTemperatureUnit={currentTemperatureUnit}
        tempF={tempF}
        tempC={tempC}
      />

      <section className="cards">
        <p className="cards__text">
          Today is {currentTemperatureUnit === "F" ? tempF : tempC}°
          {currentTemperatureUnit} / You may want to wear:
        </p>

        <ul className="cards__list">
          {clothingItems.map((item) => (
            <ItemCard
              // FIXED: Uses item._id for the key
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
