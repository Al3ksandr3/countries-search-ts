import "./ModeSwitcher.scss";

import modeIconForLightMode from "./assets/mode-icon--light-mode.svg";
import modeIconForDarkMode from "./assets/mode-icon--dark-mode.svg";

import { selectThemeMode } from "../../store/features/themeMode/themeModeSelectors";

import { useSelector } from "react-redux";
import { useGetCSSClassBasedOnThemeMode } from "../../hooks/useGetCSSClassBasedOnThemeMode";
import { useThemeModeActions } from "./helpers";

//------ COMPONENT: START ------ //

export default function ModeSwitcher() {
  const themeMode: string = useSelector(selectThemeMode);

  const { handleThemeModeSwitch } = useThemeModeActions(themeMode);

  const modeLabel: string = themeMode === "light" ? "Dark" : "Light";

  const modeIcon: string =
    themeMode === "light" ? modeIconForLightMode : modeIconForDarkMode;

  const modeLabelClass = useGetCSSClassBasedOnThemeMode(
    "mode-switcher__mode-label"
  );

  return (
    <span className="mode-switcher">
      <p className={modeLabelClass}>{modeLabel}</p>
      <img
        className="mode-switcher__mode-icon"
        src={modeIcon}
        onClick={handleThemeModeSwitch}
      />
    </span>
  );
}

//------ COMPONENT: END ------ //
