// src/components/Main/ItemCard/ItemCard.jsx

import { useContext } from "react";
import "./ItemCard.css";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked =
    Array.isArray(item.likes) &&
    item.likes.some(
      (id) => id === currentUser._id || id?._id === currentUser._id
    );

  const itemLikeButtonClassName = `item-card__like-button ${
    isLiked ? "item-card__like-button_active" : ""
  }`;

  const handleLikeClick = (e) => {
    e.stopPropagation();

    if (!isLoggedIn) {
      return;
    }

    onCardLike(item);
  };

  return (
    <li className="item-card" onClick={() => onCardClick(item)}>
      <img src={item.imageUrl} alt={item.name} className="item-card__image" />

      <div className="item-card__title-row">
        <h3 className="item-card__name">{item.name}</h3>

        {isLoggedIn && (
          <button
            type="button"
            className={itemLikeButtonClassName}
            onClick={handleLikeClick}
            aria-label="Like item"
          />
        )}
      </div>
    </li>
  );
}

export default ItemCard;
