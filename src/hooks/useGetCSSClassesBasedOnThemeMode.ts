import { selectThemeMode } from "../store/features/themeMode/themeModeSelectors";
import { useSelector } from "react-redux";

// ------ HOOK: START ------ //

export function useGetCSSClassesBasedOnThemeMode(
  ...baseClasses: string[]
): string[] {
  const themeMode: string = useSelector(selectThemeMode);

  const CSSClassesBasedOnThemeMode: string[] = baseClasses.map(
    (baseClass) => `${baseClass}--${themeMode}-mode`
  );

  return CSSClassesBasedOnThemeMode;
}

// ------ HOOK: END ------ //
