import { selectThemeMode } from "../store/features/themeMode/themeModeSelectors";
import { useSelector } from "react-redux";

// ------ HOOK: START ------ //

export function useGetCSSClassBasedOnThemeMode(baseClass: string): string {
  const themeMode: string = useSelector(selectThemeMode);

  const CSSClasssBasedOnThemeMode: string = `${baseClass}--${themeMode}-mode`;

  return CSSClasssBasedOnThemeMode;
}

// ------ HOOK: END ------ //
