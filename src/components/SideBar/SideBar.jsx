import "./SideBar.css";
import avatar from "../../assets/avatar.png";

export default function SideBar() {
  const username = "Terrence Tegegne";

  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img
          className="sidebar__avatar"
          src={avatar}
          alt={`${username}'s avatar`}
        />
        <div className="sidebar__user-name">{username}</div>
      </div>
      <div className="sidebar__links">
        <button className="sidebar__link">Change profile data</button>
        <button className="sidebar__link">Log out</button>
      </div>
    </aside>
  );
}
