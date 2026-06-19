import "./ClothesSection.css";
import ItemCard from "../Main/ItemCard/ItemCard.jsx";

export default function ClothesSection({
  clothingItems,
  handleCardClick,
  onCardLike,
  isLoggedIn,
}) {
  return (
    <div className="clothes-section">
      <ul className="clothes-section__items">
        {clothingItems.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onCardClick={handleCardClick}
            onCardLike={onCardLike}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </ul>
    </div>
  );
}
