import "./ToggleSwitch.css";
import { useContext } from "react";
import React from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch_checkbox"
      />
      <span className="toggle-switch_circle"></span>
      <span
        className={`toggle-switch_text toggle-switch_text_F ${currentTemperatureUnit === "F" ? "toggle-switch__text_color_white" : ""}`}
      >
        °F
      </span>
      <span
        className={`toggle-switch_text toggle-switch_text_C ${currentTemperatureUnit === "C" ? "toggle-switch__text_color_white" : ""}`}
      >
        °C
      </span>
    </label>
  );
}
