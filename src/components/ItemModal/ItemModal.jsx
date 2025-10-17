import "./ItemModal.css";
import { useEffect } from "react";

function ItemModal({ activeModal, onClose, card }) {
  const isOpen = activeModal === "preview";

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const onEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onEsc);

    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal_opened" onMouseDown={handleOverlay}>
      <div className="modal__content modal__content_type_image">
     <button
       className="modal__close-button"
       type="button"
       aria-label="Close preview"
       onClick={onClose}
      />
        <img
          className="modal__image"
          src={card?.link || ""}
          alt={card?.name || "Item"}
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{card?.name}</h2>
          <p className="modal__weather">Weather: {card?.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
