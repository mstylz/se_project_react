import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import { NavLink } from "react-router-dom";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="WTWR logo" />
      </NavLink>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>

      <div className="header__controls-and-user">
        <ToggleSwitch />
        <button
          className="header__add-clothes-btn"
          type="button"
          onClick={handleAddClick}
        >
          + Add clothes
        </button>
        <NavLink className="header__nav_link" to="/profile">
          <div className="header__user-container">
            <p className="header__username"> Terrence Tegegne </p>
            <img
              className="header__avatar"
              src={avatar}
              alt="Terrence Tegegne"
            />
          </div>
        </NavLink>
      </div>
    </header>
  );
}
export default Header;
