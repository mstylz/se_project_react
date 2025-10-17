import WeatherCard from "./WeatherCard/WeatherCard";
import ItemCard from "./ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import "./Main.css";

function Main({ weatherData, handleCardClick, items }) {
  const source =
    Array.isArray(items) && items.length ? items : defaultClothingItems;
  const visible = source.filter((item) => item.weather === weatherData.type);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temperature.F}° F / You may want to wear:
        </p>
        <ul className="cards__list">
          {visible.map((item) => (
            <ItemCard
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
