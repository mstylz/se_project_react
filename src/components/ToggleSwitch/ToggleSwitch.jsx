import "./ToggleSwitch.css";
import React from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";

import toggleF from "../../assets/toggle_Farenheit.svg";
import toggleC from "../../assets/toggle_Celsius.svg";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );

  const isCelsius = currentTemperatureUnit === "C";

  return (
    <label className="toggle">
      <input
        type="checkbox"
        checked={isCelsius}
        onChange={handleToggleSwitchChange}
        className="toggle__checkbox"
      />

      {/* BACKGROUND IMAGE */}
      <img
        src={isCelsius ? toggleC : toggleF}
        alt="temperature switch"
        className="toggle__image"
      />
    </label>
  );
}
