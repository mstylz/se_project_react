// src/components/ItemModal/ItemModal.jsx

import "./ItemModal.css";
import { useEffect, useState } from "react";
import closeIcon from "../../assets/modal_close_button.svg";

function ItemModal({ activeModal, onClose, card, onDeleteItem }) {
  const isOpen = activeModal === "preview";
  const [confirmOpen, setConfirmOpen] = useState(false);

  // Reset confirm modal every time a new item opens
  useEffect(() => {
    setConfirmOpen(false);
  }, [card]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const esc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", esc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  console.log("Card object on render:", card);
  console.log("Card weather property:", card.weather);
  const openConfirm = () => setConfirmOpen(true);
  const closeConfirm = () => setConfirmOpen(false);

  const handleDelete = () => {
    const id = card._id ?? card.id;
    onDeleteItem(id);
  };

  return (
    <div
      className="modal modal_opened"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* CONFIRM DELETE POPUP */}
      {confirmOpen && (
        <div className="modal__content modal__content_type_confirm">
          <button className="modal__close-button" onClick={closeConfirm}>
            <img src={closeIcon} alt="Close" className="modal__close-icon" />
          </button>

          <p>Are you sure you want to delete this item?</p>

          <button
            className="modal__confirm-button modal__confirm-button_primary"
            onClick={handleDelete}
          >
            Yes, delete item
          </button>

          <button
            className="modal__confirm-button modal__confirm-button_secondary"
            onClick={closeConfirm}
          >
            Cancel
          </button>
        </div>
      )}

      {/* IMAGE PREVIEW MODAL */}
      {!confirmOpen && (
        <div className="modal__content modal__content_type_image">
          <button className="modal__close-button" onClick={onClose}>
            <img src={closeIcon} alt="Close" className="modal__close-icon" />
          </button>

          {/* ITEM NAME—TOP CENTER */}
          <h2 className="modal__title-top">{card.name}</h2>

          <div className="modal__image-wrapper">
            <img className="modal__image" src={card.imageUrl} alt={card.name} />
          </div>

          <div className="modal__footer">
            <div className="modal__info">
              <h2 className="modal__caption">{card.name}</h2>
              <p className="modal__weather">Weather: {card.weather}</p>
            </div>

            <button
              type="button"
              className="modal__delete-button"
              onClick={openConfirm}
            >
              Delete item
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemModal;
