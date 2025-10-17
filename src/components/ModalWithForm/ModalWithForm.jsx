import "./ModalWithForm.css";
import { useEffect, useRef, useState } from "react";

function ModalWithForm({
  children,
  title,
  buttonText,
  activeModal,
  onClose,
  onSubmit,
}) {
  const isOpen = activeModal === "add-garment";
  const formRef = useRef(null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) setIsValid(false);
  }, [isOpen]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const isHttpUrl = (v) => {
    try {
      const u = new URL(String(v || "").trim());
      return u.protocol === "http:" || u.protocol === "https:";
    } catch {
      return false;
    }
  };

  const recomputeValidity = () => {
    const form = formRef.current;
    if (!form) return setIsValid(false);
    const nameEl = form.querySelector('input[name="name"]');
    const urlEl = form.querySelector('input[name="imageUrl"]');

    const nameOk = !!nameEl && String(nameEl.value || "").trim().length > 0;
    const urlOk = !!urlEl && isHttpUrl(urlEl.value);

    setIsValid(nameOk && urlOk);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const nameEl = form.querySelector('input[name="name"]');
    const urlEl = form.querySelector('input[name="imageUrl"]');

    const nameOk = !!nameEl && String(nameEl.value || "").trim().length > 0;
    const urlOk = !!urlEl && isHttpUrl(urlEl.value);
    if (!(nameOk && urlOk)) return;

    if (onSubmit) onSubmit(new FormData(form));
    form.reset();
    setIsValid(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""}`}
      onMouseDown={handleOverlay}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button className="modal__close-button" type="button" onClick={onClose}>
          Close
        </button>
        <form
          ref={formRef}
          className="modal__form"
          onSubmit={handleSubmit}
          onInput={recomputeValidity}
          onChange={recomputeValidity}
        >
          {children}
          <button
            className={`modal__submit-button ${isValid ? "is-primary" : ""}`}
            type="submit"
            disabled={!isValid}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;