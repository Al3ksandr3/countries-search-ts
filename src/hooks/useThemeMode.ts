import { selectThemeMode } from "../store/features/themeMode/themeModeSelectors";
import { setThemeMode } from "../store/features/themeMode/themeModeSlice";

import { useSelector } from "react-redux";
import { useCustomDispatch } from "./useCustomDispatch";

//------ HOOK: START ------ //

export function useThemeMode(): {
  currentThemeMode: string;
  handleThemeModeSwitch: () => void;
} {
  const currentThemeMode = useSelector(selectThemeMode);

  const dispatcher = useCustomDispatch();

  function handleThemeModeSwitch() {
    const newThemeMode = currentThemeMode === "light" ? "dark" : "light";
    dispatcher(setThemeMode(newThemeMode));
  }

  return { currentThemeMode, handleThemeModeSwitch };
}
//------ HOOK: END ------ //
