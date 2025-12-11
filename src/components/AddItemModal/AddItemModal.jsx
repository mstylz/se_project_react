// src/components/AddItemModal/AddItemModal.jsx

import { useEffect } from "react";
import { useForm } from "../../hooks/useForm.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ isOpen, onClose, onAddItem }) => {
  const { values, handleChange, errors, isValid, resetForm } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  useEffect(() => {
    if (isOpen) {
      resetForm({ name: "", imageUrl: "", weather: "" });
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddItem({
      name: values.name,
      imageUrl: values.imageUrl,
      weather: values.weather,
    });
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      isFormValid={isValid}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          type="text"
          name="name"
          value={values.name || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.name}</span>
      </label>

      <label className="modal__label">
        Image URL
        <input
          className="modal__input"
          type="url"
          name="imageUrl"
          value={values.imageUrl || ""}
          onChange={handleChange}
          required
        />
        <span className="modal__error">{errors.imageUrl}</span>
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

        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            className="modal__radio-input"
            type="radio"
            id="warm"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          <span className="modal__radio-label">Warm</span>
        </label>

        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            className="modal__radio-input"
            type="radio"
            id="cold"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          <span className="modal__radio-label">Cold</span>
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
