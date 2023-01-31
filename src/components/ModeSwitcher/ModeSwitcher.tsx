import "./ModeSwitcher.scss";

import modeIconForLightMode from "./assets/mode-icon--light-mode.svg";
import modeIconForDarkMode from "./assets/mode-icon--dark-mode.svg";

import { useThemeMode } from "../../hooks/useThemeMode";
import { useGetIconBasedOnThemeMode } from "../../hooks/useGetIconBasedOnThemeMode";

//------ COMPONENT: START ------ //

export default function ModeSwitcher() {
  const { currentThemeMode, handleThemeModeSwitch } = useThemeMode();

  const modeLabel: string = currentThemeMode === "light" ? "Dark" : "Light";

  const modeIcon: string = useGetIconBasedOnThemeMode(
    modeIconForLightMode,
    modeIconForDarkMode
  );

  return (
    <span className="mode-switcher">
      <p className="mode-switcher__mode-label">{modeLabel}</p>
      <img
        className="mode-switcher__mode-icon"
        src={modeIcon}
        onClick={handleThemeModeSwitch}
      />
    </span>
  );
}

//------ COMPONENT: END ------ //
