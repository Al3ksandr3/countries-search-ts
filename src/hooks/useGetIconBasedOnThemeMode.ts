import { useThemeMode } from "./useThemeMode";

// ------ HOOK: START ------ //

export function useGetIconBasedOnThemeMode(
  iconForLightMode: string,
  iconForDarkMode: string
): string {
  const { currentThemeMode } = useThemeMode();

  return currentThemeMode === "light" ? iconForLightMode : iconForDarkMode;
}

// ------ HOOK: END ------ //
