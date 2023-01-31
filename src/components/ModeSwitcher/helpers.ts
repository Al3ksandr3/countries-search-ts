import { useCustomDispatch } from "../../hooks/useCustomDispatch";
import { setThemeMode } from "../../store/features/themeMode/themeModeSlice";

///////////////////////////////////////////////////////////////////

export function useThemeModeActions(currentThemeMode: string): {
  handleThemeModeSwitch: () => void;
} {
  const dispatcher = useCustomDispatch();

  function handleThemeModeSwitch() {
    const newThemeMode = currentThemeMode === "light" ? "dark" : "light";
    dispatcher(setThemeMode(newThemeMode));
  }

  return { handleThemeModeSwitch };
}
