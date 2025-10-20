import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/main";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { filterWeatherData, getWeather } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import { useFormAndValidation } from "../Hooks/useFormAndValidation"; 

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temperature: { F: 999, C: 999 },
    city: "",
  });

  const [items, setItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const { values, handleChange, isValid, resetForm } = useFormAndValidation();

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
    resetForm(); // Reset form when modal closes
  };

  const handleAddGarmentSubmit = () => {
    const newItem = {
      name: values.name,
      link: values.imageUrl,
      weather: values.weather,
      _id:
        (typeof crypto !== "undefined" &&
          crypto.randomUUID &&
          crypto.randomUUID()) ||
        String(Date.now()) + Math.random().toString(36).slice(2),
    };
    setItems((prev) => [newItem, ...prev]);
    closeActiveModal();
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => setWeatherData(filterWeatherData(data)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header weatherData={weatherData} handleAddClick={handleAddClick} />
        <Main
          weatherData={weatherData}
          handleCardClick={handleCardClick}
          items={items}
        />
        <Footer />
      </div>
      <ModalWithForm
        title="New Garment"
        buttonText="Add Garment"
        isOpen={activeModal === "add-garment"}
        isFormValid={isValid}
        onClose={closeActiveModal}
        onSubmit={handleAddGarmentSubmit}
      >
        <label htmlFor="name" className="modal__label">
          Name
          <input
            className="modal__input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={values.name || ""}
            onChange={handleChange}
            required
            minLength="1"
            maxLength="30"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image URL
          <input
            className="modal__input"
            type="url"
            id="imageUrl"
            name="imageUrl"
            placeholder="Image URL"
            value={values.imageUrl || ""}
            onChange={handleChange}
            required
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              className="modal__radio-input"
              type="radio"
              id="hot"
              name="weather"
              value="hot"
              checked={values.weather === "hot"}
              onChange={handleChange}
              required
            />
            <span className="modal__radio-label">Hot</span>
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              className="modal__radio-input"
              type="radio"
              id="warm"
              name="weather"
              value="warm"
              checked={values.weather === "warm"}
              onChange={handleChange}
              required
            />
            <span className="modal__radio-label">Warm</span>
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              className="modal__radio-input"
              type="radio"
              id="cold"
              name="weather"
              value="cold"
              checked={values.weather === "cold"}
              onChange={handleChange}
              required
            />
            <span className="modal__radio-label">Cold</span>
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
