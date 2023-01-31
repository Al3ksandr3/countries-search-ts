import "./ModeSwitcher.scss";

import modeIconForLightMode from "./assets/mode-icon--light-mode.svg";
import modeIconForDarkMode from "./assets/mode-icon--dark-mode.svg";

//------ COMPONENT: START ------ //

export default function ModeSwitcher() {
  return (
    <span className="mode-switcher">
      <p className="mode-switcher__mode-label"></p>
      <img className="mode-switcher__mode-icon" />
    </span>
  );
}
//------ COMPONENT: END ------ //
