import "./Header.css";
import logo from "../../assets/logo.svg";
import avatarPlaceholder from "../../assets/avatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  handleLoginClick,
  handleRegisterClick,
  weatherData,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

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

        {isLoggedIn ? (
          <>
            <button
              className="header__add-clothes-btn"
              type="button"
              onClick={handleAddClick}
            >
              + Add clothes
            </button>

            <NavLink className="header__nav_link" to="/profile">
              <div className="header__user-container">
                <p className="header__username">{currentUser.name}</p>
                <img
                  className="header__avatar"
                  src={currentUser.avatar || avatarPlaceholder}
                  alt={currentUser.name || "User avatar"}
                />
              </div>
            </NavLink>
          </>
        ) : (
          <div className="header__auth-buttons">
            <button
              className="header__auth-button"
              type="button"
              onClick={handleRegisterClick}
            >
              Sign Up
            </button>

            <button
              className="header__auth-button"
              type="button"
              onClick={handleLoginClick}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
