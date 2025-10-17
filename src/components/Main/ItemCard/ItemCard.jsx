import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  return (
    <li className="item-card" onClick={() => onCardClick(item)}>
      <img 
        src={item.link} 
        alt={item.name} 
        className="item-card__image" 
      />
      <h3 className="item-card__name">{item.name}</h3>
    </li>
  );
}

export default ItemCard;