import "./ModalWithForm.css";
import { useEffect } from "react";
import closeIcon from "../../assets/modal_form_close_button.svg"; // ← ADD THIS

function ModalWithForm({
  children,
  title,
  buttonText,
  isOpen,
  isFormValid,
  onClose,
  onSubmit,
}) {
  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(e);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onMouseDown={handleOverlay}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>

        <button
          className="modal-form__close-button"
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img
            src={closeIcon}
            alt="Close modal"
            className="modal-form__close-icon"
          />
        </button>

        <form className="modal__form" onSubmit={handleSubmit}>
          {children}
          <button
            className={`modal__submit-button ${isFormValid ? "is-primary" : ""}`}
            type="submit"
            disabled={!isFormValid}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
