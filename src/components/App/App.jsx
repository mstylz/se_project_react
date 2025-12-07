import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import { filterWeatherData, getWeather } from "../../utils/weatherApi";
import { getItems, addItem, deleteItem } from "../../utils/api";
import { coordinates, APIkey } from "../../utils/constants";
import { useForm } from "../../hooks/useForm";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temperature: { F: 999, C: 999 },
    city: "",
  });

  const [items, setItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const { resetForm } = useForm();

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prev) => (prev === "F" ? "C" : "F"));
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
    resetForm();
  };

  // ADD NEW GARMENT
  const handleAddGarmentSubmit = (name, imageUrl, weather) => {
    const newItem = {
      name,
      link: imageUrl,
      weather,
    };

    addItem(newItem)
      .then((created) => {
        const normalized = {
          ...created,
          _id: created.id,
        };

        setItems((prev) => [normalized, ...prev]);
        closeActiveModal();
      })
      .catch((err) => console.error("Add failed:", err));
  };

  // DELETE GARMENT
  const handleDeleteItem = (id) => {
    deleteItem(id)
      .then(() => {
        setItems((prev) =>
          prev.filter((item) => item._id !== id && item.id !== id)
        );
        closeActiveModal();
      })
      .catch((err) => console.error("Delete failed:", err));
  };

  // LOAD WEATHER + ITEMS
  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => setWeatherData(filterWeatherData(data)))
      .catch((err) => console.error(err));

    getItems()
      .then((data) => {
        const transformed = data.map((item) => ({
          ...item,
          _id: item._id ?? item.id,
            link: item.link ?? item.imageUrl,
        }));

        setItems(transformed);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header weatherData={weatherData} handleAddClick={handleAddClick} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  items={items}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={items}
                  handleCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>

          <Footer />
        </div>

        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
          onAddItem={handleAddGarmentSubmit}
        />

        <ItemModal
          activeModal={activeModal}
          onClose={closeActiveModal}
          card={selectedCard}
          onDeleteItem={handleDeleteItem}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
