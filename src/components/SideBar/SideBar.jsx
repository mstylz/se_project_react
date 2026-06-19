import { useContext } from "react";
import "./SideBar.css";
import avatarPlaceholder from "../../assets/avatar.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function SideBar({ handleLogout, handleEditProfileClick }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img
          className="sidebar__avatar"
          src={currentUser.avatar || avatarPlaceholder}
          alt={`${currentUser.name || "User"}'s avatar`}
        />

        <div className="sidebar__user-name">{currentUser.name || "User"}</div>
      </div>

      <div className="sidebar__links">
        <button
          type="button"
          className="sidebar__link"
          onClick={handleEditProfileClick}
        >
          Change profile data
        </button>

        <button type="button" className="sidebar__link" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </aside>
  );
}
