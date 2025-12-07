import "./ItemModal.css";
import { useEffect, useState } from "react";

function ItemModal({ activeModal, onClose, card, onDeleteItem }) {
  const isOpen = activeModal === "preview";
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const escHandler = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", escHandler);

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", escHandler);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDelete = () => {
    const idToDelete = card._id ?? card.id;
    onDeleteItem(idToDelete);
  };

  return (
    <div
      className={`modal modal_opened`}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal__content modal__content_type_image">
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
        ></button>

        <img className="modal__image" src={card.link} alt={card.name} />

        <div className="modal__footer">
          <div className="modal__info">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>

          <button
            type="button"
            className="modal__delete-button"
            onClick={handleDelete}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
