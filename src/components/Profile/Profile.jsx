import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import SideBar from "../SideBar/SideBar.jsx";

export default function Profile({
  clothingItems = [],
  handleCardClick,
  handleAddClick,
}) {
  return (
    <section className="profile">
      <SideBar />
      <div className="profile__clothing">
        <div className="profile__clothing-header">
          <h2 className="profile__clothing-title">Your items</h2>
          <button
            type="button"
            className="profile__add-button"
            onClick={handleAddClick}
          >
            + Add new
          </button>
        </div>
        <ClothesSection
          clothingItems={clothingItems}
          handleCardClick={handleCardClick}
        />
      </div>
    </section>
  );
}
